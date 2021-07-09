import { Flex, Box, Heading, Text } from '@chakra-ui/react';

export function NewsIntro() {
    return (
        <Box w="100%" maxW="1120px" mx="auto" my="40px">
            <Flex w="100%" maxW="684px" px="10px" direction="column">
                <Heading as="h1" fontSize="2.25rem" fontWeight="500" mt="41px" mb="17px">
                    Notícias
                </Heading>
                <Text fontSize="1rem" fontWeight="400">
                    Eu placerat et, elit dui tortor quis eget malesuada. Amet quis euismod lacus, hendrerit mauris venenatis
                    purus magna id. Quisque augue vitae in pharetra sodales amet, scelerisque nisi. Volutpat enim dolor
                    risus, nulla amet, malesuada luctus.
                </Text>
            </Flex>
        </Box>
    )
}