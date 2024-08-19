import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function Copyright() {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        ESV Copyright
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Scripture quotations marked “ESV” are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. The ESV text may not be quoted in any publication made available to the public by a Creative Commons license. The ESV may not be translated into any other language.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Users may not copy or download more than 500 verses of the ESV Bible or more than one half of any book of the ESV Bible.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Unless otherwise indicated, all Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. The ESV text may not be quoted in any publication made available to the public by a Creative Commons license. The ESV may not be translated into any other language.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Users may not copy or download more than 500 verses of the ESV Bible or more than one half of any book of the ESV Bible.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Users may not copy or download more than 500 verses of the ESV Bible or more than one half of any book of the ESV Bible.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
}