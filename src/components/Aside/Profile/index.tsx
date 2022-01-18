import { Box, Image, Text } from "@chakra-ui/react";
import ListenPrintSharePanel from "../../ListenPrintSharePanel";

interface ProfileProps {
    image: string,
    email: string,
    telefone: string
    altProp: string
}

export default function Profile({ image, email, telefone, altProp }: ProfileProps) {
    return (
        <>
            <Image src={image} alt={altProp} width='200px' height='300px' />
            <Text mt='24px' fontSize='150%' lineHeight='120.83%' fontWeight='bold'>Contato</Text>
            <Box fontSize='112.5%' lineHeight='138.89%' letterSpacing='-0.26px' mt='16px'>
                <Text fontWeight='bold'>Email</Text>
                <Text fontWeight='normal' textDecor='underline'>{email}</Text>
                <Text fontWeight='bold' mt='16px'>Telefone</Text>
                <Text fontWeight='normal'>{telefone}</Text>
            </Box>
            <Box w='full' h='1px' bgColor='tj_dark_blue' mt='40px' mb='12px'></Box>
            <ListenPrintSharePanel listOfContentToRead={[]} />
        </>
    );
}