// AREA TITLE TEM O SUBTITLE COM FONTWEIGHT BOLD

import { Box, Heading } from "@chakra-ui/react";

interface areaTitleProps {
    title: string;
    subtitle: string;
}

export default function AreaTitle ({title, subtitle}:areaTitleProps) {
    return (
        <Box maxW='746px'>
            <Heading as='h1' fontSize='225%' fontWeight='bold' color='tj_dark_blue' lineHeight='127.7%' mb='24px'>{title}</Heading>
            <Heading as='h2' fontSize='112.5%' color='#555555' lineHeight='138.8%' mt='7px'>{subtitle}</Heading>
        </Box>
    );
}