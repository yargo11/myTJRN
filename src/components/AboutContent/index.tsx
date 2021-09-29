import { Button, Divider, Flex, Link, Text } from "@chakra-ui/react";
import ContainerBox from "../ContainerBox";

export default function AboutContent () {
    return (
        <>
            <Divider border='1px solid #D8DBDF'/>
            <ContainerBox as={Flex} minH='1.313rem' py='1rem' alignItems='center' justifyContent='space-between'>
                <Flex alignItems='center' flexWrap='wrap'>
                    <Text mr='1.469rem' fontSize='0,875rem' >Esse conteúdo foi útil para você?</Text>
                    <Button
                        w='4.125rem'
                        h='1.625rem'
                        mr='0.938rem'
                        fontSize='0.75rem'
                        fontWeight='medium'
                        lineHeight='1.125rem'
                        color='white'
                        bgColor='tj_dark_blue'
                        transition='filter 0.2s'
                        _hover={{ filter: 'brightness(120%)' }}
                        _active={{ filter: 'brightness(75%)' }}>Sim</Button>
                    <Button
                        w='4.25rem'
                        h='1.625rem'
                        fontSize='0.75rem'
                        fontWeight='medium'
                        lineHeight='1.125rem'
                        color='white'
                        bgColor='tj_dark_blue'
                        transition='filter 0.2s'
                        _hover={{ filter: 'brightness(120%)' }}
                        _active={{ filter: 'brightness(75%)' }}>Não</Button>
                </Flex>
                <Link fontSize='0,875rem' fontWeight='1,25rem' textDecor='underline' _hover={{textDecor:'underline'}}>Relatar problema com esta página</Link>
            </ContainerBox>
        </>
    );
}