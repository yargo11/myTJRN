import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface UnitProps {
    image: string,
    lastUpdate: string,
    imgAlt: string
}

export default function Unit({ image, lastUpdate, imgAlt }: UnitProps) {
    const lastUpdateToView = new Date(lastUpdate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })
    return (
        <>
            <Flex justify='center'>
                <Image src={image} alt={imgAlt} maxW='full' h='auto' />
            </Flex>
            <Box w='full' h='1px' bgColor='tj_dark_blue' mt='32px' mb='12px'></Box>
            <Text fontSize='87.5%' lineHeight='142.86%' color='#888889' mt='12px'>Última atualização: {lastUpdateToView}</Text>
        </>
    );
}