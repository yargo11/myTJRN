// AREA TITLE 2 TEM O SUBTITLE COM FONTWEIGHT NORMAL

import { Box, Heading } from "@chakra-ui/react";

interface areaTitleProps {
    title: string;
    subtitle: string;
}

export default function AreaTitle2 ({title, subtitle}:areaTitleProps) {
    return (
        <Box mb='2.5rem'>
            <Heading as='h1' fontSize='225%' fontWeight='bold' color='tj_dark_blue' lineHeight='127.7%'>{title}</Heading>
            <Heading as='h2' fontSize='112.5%' fontWeight='normal' color='#555555' lineHeight='138.8%' mt='7px'>{subtitle}</Heading>
        </Box>
    );
}