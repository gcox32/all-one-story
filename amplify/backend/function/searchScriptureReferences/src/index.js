import { Client } from '@opensearch-project/opensearch';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { AwsSigv4Signer } from '@opensearch-project/opensearch/aws';

const client = new Client({
    ...AwsSigv4Signer({
        region: process.env.AWS_REGION || 'us-east-1',
        service: 'es',
        getCredentials: () => defaultProvider()(),
    }),
    node: process.env.OPENSEARCH_ENDPOINT
});

export const handler = async (event) => {
    try {
        const { query } = event.arguments;

        const { body } = await client.search({
            index: 'scripture',
            body: {
                query: {
                    match: {
                        reference: {
                            query: query,
                            fuzziness: "AUTO"
                        }
                    }
                },
                size: 10
            }
        });

        return body.hits.hits.map(hit => ({
            id: hit._source.id,
            book: hit._source.book,
            chapter: hit._source.chapter,
            verse: hit._source.verse,
            reference: hit._source.reference,
            referenceType: hit._source.referenceType,
            searchCount: hit._source.searchCount,
            createdAt: hit._source.createdAt || new Date().toISOString(),
            updatedAt: hit._source.updatedAt || new Date().toISOString()
        }));

    } catch (error) {
        console.error('OpenSearch query error:', error);
        throw new Error('An error occurred while searching');
    }
};