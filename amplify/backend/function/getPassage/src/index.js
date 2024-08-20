import axios from 'axios';

export const handler = async (event) => {
    try {
        const { query, translation } = JSON.parse(event.body);

        let formattedResponse;

        if (translation === 'ESV') {
            const esvParams = {
                "include-passage-references": false,
                "include-verse-numbers": false,
                "include-first-verse-numbers": false,
                "include-footnotes": false,
                "include-footnote-body": false,
                "include-headings": false,
                "include-short-copyright": false
            };

            const response = await axios.get('https://api.esv.org/v3/passage/text/', {
                headers: { 'Authorization': `Token ${process.env.REACT_APP_ESV_API_KEY}` },
                params: { 
                    q: query,
                    ...esvParams
                }
            });

            const esvData = response.data;
            
            formattedResponse = {
                reference: esvData.canonical,
                text: esvData.passages[0].trim(),
                translation: 'ESV',
                meta: {
                    canonical: esvData.canonical,
                    parsed: esvData.parsed,
                    passage_meta: esvData.passage_meta
                }
            };
        } else if (translation === 'NIV') {
            // Implement NIV-specific logic here
            // This is a placeholder - you'll need to replace this with actual NIV API call
            throw new Error('NIV translation not implemented yet');
        } else {
            // Default handling for other translations
            const [book, chapterVerse] = query.split(' ');
            const [chapter, verse] = chapterVerse.split(':');

            const response = await axios.get(
                `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-${translation.toLowerCase()}/books/${book.toLowerCase()}/chapters/${chapter}/verses/${verse}.json`
            );

            formattedResponse = {
                reference: query,
                text: response.data.text,
                translation: translation,
                meta: {
                    book: book,
                    chapter: chapter,
                    verse: verse
                }
            };
        }

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify(formattedResponse)
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: error.response?.status || 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify({ 
                error: error.message || 'Internal server error',
                details: error.response?.data
            })
        };
    }
};