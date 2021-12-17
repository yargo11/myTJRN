import { Box } from "@chakra-ui/react";

export default function PJRNDivider() {
    return (
        <Box
            h='124px'
            w='1px'
            border='1px'
            borderColor='#F0F3F5'
            sx={{
                '@media (min-width: 500px)': {
                    display:'flex'
                },
                '@media (max-width: 499px)': {
                    display:'none'
                }
            }}>
            </Box>
    );
}