import { Box, Text, TextProps } from "@chakra-ui/react";

interface areaTitleProps {
    title: string;
    subtitle: string;
}

export default function AreaTitle ({title, subtitle}:areaTitleProps) {
    return (
        <Box>
            <Text fontSize='2.25rem' fontWeight='bold' color='tj_dark_blue' lineHeight='2.87rem'>{title}</Text>
            <Text fontSize='1.125rem' color='#555555' lineHeight='1.563rem'>{subtitle}</Text>
        </Box>
    );
}