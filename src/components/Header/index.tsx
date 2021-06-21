import { Flex, Spacer, Box, Input, Button, Image, WrapItem, Wrap, Divider } from "@chakra-ui/react"
import { FiSearch } from 'react-icons/fi';
import { Menu } from './Menu';

export function Header() {

    return (
        <Flex w="100%" direction="column">
            <Flex w="100%" maxWidth={1192} justify="center" align="center" margin="auto" direction="row" my={6} px={4}>
                <Wrap w="100%" align="center">
                    <WrapItem>
                        <Box>
                            <a href="http://tjrn.jus.br/">
                                <Image src="/images/Vector.svg" alt="TJRN" />
                            </a>
                        </Box>
                    </WrapItem>
                    <Spacer />
                    <WrapItem width="458px">
                        <Box
                            width="100%"
                            border='1px solid #d2d2dc'
                        >
                            <Flex as="form"
                                display="flex"
                                height={12}
                                align="center"
                            >
                                <Input
                                    type="text"
                                    _focus={{ borderColor: "0 0 0 0 #ffffff", }}
                                    border='none'
                                    placeholder="Buscar em todo site, processos, jurisprudência..."
                                />
                                <Button
                                    type="submit"
                                    leftIcon={<FiSearch size={18} />}
                                    bg="#fff"
                                    transition='color 0.2s'
                                    _hover={{ 
                                        bg: "#fff",
                                        color: '#61dafb'
                                    }}

                                />
                            </Flex>
                        </Box>
                    </WrapItem>
                </Wrap>
            </Flex>
            <Divider orientation='horizontal' borderWidth='2px' opacity='100' borderColor='#61dafb' />
            <Flex w="100%" maxWidth={1192} justify="center" align="center" margin="auto" direction="row">
                <Menu />
            </Flex>
        </Flex>
    )
}
