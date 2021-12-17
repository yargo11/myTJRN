import { Center, Text } from "@chakra-ui/react";

interface PJRNCardProps {
    quantity: string,
    label: string
}

export default function PJRNCard({ quantity, label }: PJRNCardProps) {
    return (
        <Center w='220px' flexDir='column'>
            <Text fontWeight='extrabold' fontSize='500%' lineHeight='100%' color='#C9E880' mb='8px'>{quantity}</Text>
            <Text fontWeight='bold' fontSize='100%' lineHeight='137.5%' textDecor='underline'>{label}</Text>
        </Center>
    );
}