import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export default function Warnings({ warnings }) {
    return (
        <Box mb='2.5rem'>
            <Heading as='h1' fontSize='225%' fontWeight='bold' color='tj_dark_blue' lineHeight='127.7%' mb='1rem'>Avisos</Heading>
            {warnings.map(warn =>
                <Flex key={warn.warning} borderLeft='10px solid #00384d' mb='15px' >
                    <Text fontSize='112.5%' fontWeight='400' color='#0b0c0c' ml='1rem'>
                        {warn.warning}
                    </Text>
                </Flex>
            )}
        </Box>
    )
}