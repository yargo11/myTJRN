import { Box, Button, Center, Link, Spacer, Text } from "@chakra-ui/react";
import ContainerBox from "../ContainerBox";
import GrayBorder from "../Border/GrayBorder";

export default function AboutContent () {
    return (
        <Box className='no-print'>
            <GrayBorder/>
            <ContainerBox as={Center} py='16px'>
                <Center flexWrap='wrap'>
                    <Box>
                        <Text mr='23.5px' fontSize='87.5%' >Esse conteúdo foi útil para você?</Text>
                    </Box>
                    <Box>
                        <Button
                            w='66px'
                            h='26px'
                            mr='15px'
                            fontSize='12px'
                            fontWeight='medium'
                            lineHeight='150%'
                            color='white'
                            bgColor='tj_dark_blue'
                            transition='filter 0.2s'
                            _hover={{ filter: 'brightness(120%)' }}
                            _active={{ filter: 'brightness(75%)' }}>Sim</Button>
                        <Button
                            w='66px'
                            h='26px'
                            fontSize='12px'
                            fontWeight='medium'
                            lineHeight='150%'
                            color='white'
                            bgColor='tj_dark_blue'
                            transition='filter 0.2s'
                            _hover={{ filter: 'brightness(120%)' }}
                            _active={{ filter: 'brightness(75%)' }}>Não</Button>
                    </Box>
                </Center>
                <Spacer />
                <Link fontSize='87.5%' fontWeight='125%' textDecor='underline' _hover={{textDecor:'underline'}}>Relatar problema com esta página</Link>
            </ContainerBox>
        </Box>
    );
}

