import { Box, Text, TextProps } from "@chakra-ui/react";

interface areaTitleProps {
    title: string;
    subtitle: string;
}

export default function AreaTitle ({title, subtitle}:areaTitleProps) {
    return (
        <Box>
            <Text fontSize='225%' fontWeight='bold' color='tj_dark_blue' lineHeight='46px'>{title}</Text>
            <Text fontSize='112.5%' color='#555555' lineHeight='25px'>{subtitle}</Text>
        </Box>
    );
}