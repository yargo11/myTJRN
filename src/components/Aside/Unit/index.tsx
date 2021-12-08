import { Box, Image, Text } from "@chakra-ui/react";

interface UnitProps {
    image: string,
    lastUpdate: string
}

export default function Unit ({ image, lastUpdate }:UnitProps) {
    const lastUpdateToView = new Date(lastUpdate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })
    return (
        <>
            <Image src={image}/>
            <Box w='full' h='1px' bgColor='tj_dark_blue' mt='32px' mb='12px'></Box>
            <Text fontSize='87.5%' lineHeight='142.86%' color='#888889' mt='12px'>Última atualização: {lastUpdateToView}</Text>
        </>
    );
}