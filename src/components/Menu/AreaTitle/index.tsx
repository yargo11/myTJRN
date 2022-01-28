import { Flex, Heading } from "@chakra-ui/react";

interface areaTitleProps {
    title: string;
}


export default function AreaTitle ({ title }:areaTitleProps) {
    return (
        <Flex alignItems='center' h='128px'>
            <Heading as='h3' fontSize='200%' fontWeight='semibold' color='tj_dark_blue' lineHeight='125%'>{title}</Heading>
        </Flex>
    );
}