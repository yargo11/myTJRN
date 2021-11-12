import { Box, Text } from "@chakra-ui/react";

interface areaTitleProps {
    title: string;
    subtitle?: string
}

export default function AreaTitle ({ title, subtitle }:areaTitleProps) {
    return (
        <Box alignItems='center' pt='56px' pb='64px'>
            <Text fontSize='250%' fontWeight='bold' color='tj_dark_blue' lineHeight='112.5%'>{title}</Text>
            <Text fontSize='137.5%%' fontWeight='normal' lineHeight='136.36%' pt='24px'>{subtitle}</Text>
        </Box>

        
    );
}