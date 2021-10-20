import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import ContainerBox from "../ContainerBox";
import GrayBorder from "../GrayBorder";

export default function AboutContent () {
    return (
        <>
            <GrayBorder/>
            <ContainerBox as={Flex} py='16px' alignItems='center' justifyContent='space-between'>
                <Flex alignItems='center' flexWrap='wrap'>
                    <Box>
                        <Text mr='23.5px' fontSize='87.5%' >Esse conteúdo foi útil para você?</Text>
                    </Box>
                    <Box>
                        <Button
                            w='66px'
                            h='26px'
                            mr='15px'
                            fontSize='75%'
                            fontWeight='medium'
                            lineHeight='112.5%'
                            color='white'
                            bgColor='tj_dark_blue'
                            transition='filter 0.2s'
                            _hover={{ filter: 'brightness(120%)' }}
                            _active={{ filter: 'brightness(75%)' }}>Sim</Button>
                        <Button
                            w='66px'
                            h='26px'
                            fontSize='75%'
                            fontWeight='medium'
                            lineHeight='112.5%'
                            color='white'
                            bgColor='tj_dark_blue'
                            transition='filter 0.2s'
                            _hover={{ filter: 'brightness(120%)' }}
                            _active={{ filter: 'brightness(75%)' }}>Não</Button>
                    </Box>
                </Flex>
                <Link fontSize='87.5%' fontWeight='125%' textDecor='underline' _hover={{textDecor:'underline'}}>Relatar problema com esta página</Link>
            </ContainerBox>
        </>
    );
}