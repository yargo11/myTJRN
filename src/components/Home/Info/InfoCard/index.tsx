import { Flex, Text } from "@chakra-ui/react";

interface InfoCardProps {
    label: string
    info: string
}

export default function InfoCard({label, info}: InfoCardProps) {
    return (
        <Flex flexDir='column' borderRight='2px' borderColor='white' alignContent='start' justifyContent='center' textAlign='center'>
            <Text fontWeight='bold' fontSize='131.25%' lineHeight='133.33%' mb='8px'>{label}</Text>
            <Text fontWeight='normal' fontSize='100%' lineHeight='125%'>{info}</Text>
        </Flex>
    );
}