import { Box, Text } from "@chakra-ui/react";

interface areaTitleProps {
    title: string;
    subtitle: string;
}

export default function AreaTitle ({title, subtitle}:areaTitleProps) {
    return (
        <Box mb='56px'>
            <Text fontSize='225%' fontWeight='bold' color='tj_dark_blue' lineHeight='127.7%'>{title}</Text>
            <Text fontSize='112.5%' color='#555555' lineHeight='138.8%'>{subtitle}</Text>
        </Box>
    );
}