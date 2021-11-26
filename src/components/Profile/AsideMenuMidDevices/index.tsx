import { Box, Image, Text } from "@chakra-ui/react";

export default function AsideMenuMidDevices () {
    return (
        <>
            <Image src='/image/Maria_Zeneide_Bezerra.png'/>
            <Text mt='24px' fontSize='150%' lineHeight='120.83%' fontWeight='bold'>Contato</Text>
            <Box fontSize='112.5%' lineHeight='138.89%' letterSpacing='-0.26px' mt='16px'>
                <Text fontWeight='bold'>Email</Text>
                <Text fontWeight='normal'  textDecor='underline'>presidente@tjrn.jus.br</Text>
                <Text fontWeight='bold' mt='16px'>Telefone</Text>
                <Text fontWeight='normal'>+55 (84) 3673-8000</Text>
            </Box>
        </>
    );
}