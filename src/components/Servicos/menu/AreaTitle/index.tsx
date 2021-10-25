import { Flex, Text } from "@chakra-ui/react";

interface areaTitleProps {
    title: string;
}

export default function AreaTitle ({ title }:areaTitleProps) {
    return (
        <Flex alignItems='center' h='128px'>
            <Text fontSize='200%' fontWeight='semibold' color='tj_dark_blue' lineHeight='125%'>{title}</Text>
        </Flex>
    );
}