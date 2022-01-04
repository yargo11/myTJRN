import { Flex, Text } from "@chakra-ui/react";

interface PJRNCardProps {
    quantity: string,
    label: string
}

export default function PJRNCard({ quantity, label }: PJRNCardProps) {
    return (
        <Flex flexDir='column' borderLeft='2px' borderColor='#F0F3F5' alignContent='start' justifyContent='center'>
            <Text fontWeight='extrabold' fontSize='500%' lineHeight='100%' color='#C9E880' textAlign='center' mb='8px'>{quantity}</Text>
            <Text fontWeight='bold' fontSize='100%' lineHeight='137.5%' textDecor='underline' textAlign='center'>{label}</Text>
        </Flex>
    );
}