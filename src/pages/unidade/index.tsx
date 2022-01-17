import { Text, Box, Flex, Input, Button, Select, Divider, Icon } from '@chakra-ui/react'
import ContainerBox from '../../components/ContainerBox'
import PageTitle from '../../components/PageTitle'

import { FaChevronRight } from 'react-icons/fa'

export default function Listagem() {
    return (
        <>

            <PageTitle title='Unidades administrativas e judiciárias' breadCrumbArray={[]} showTitle={true} description='Canais de atendimento do Poder Judiciário do Rio Grande do Norte'/>

            <Box bgColor='tj_dark_blue' color='tj_light_gray' h='115px' mt='-1px'></Box>
            <ContainerBox>
                <Box mt='-115px' w='full' maxW='100%' borderRadius='8px' border='1px solid #d8dbdf' boxShadow='0px 14px 30px rgba(0,0,0,0.1)' bg='#fff' p='24px' fontSize='16px' fontWeight='500'>
                    <Flex wrap='wrap' justify='space-between' w='full' maxW='100%' dir='column'>
                        <Flex wrap='wrap' justify='space-between' w='full' maxW='100%' dir='row'>
                            <Box w='100%' maxW='604px'>
                                <Text mb='8px'>Digite o que procura</Text>
                                <Input placeholder='plantão judicial' h='57px' />
                            </Box>
                            <Box w='100%' maxW='620px'>
                                <Text mb='8px'>Escolha a cidade</Text>
                                <Flex>
                                    <Select placeholder='Selecionar' h='57px'>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                    <Button ml='24px' w='165px' bg='tj_dark_blue' color='#fff' h='57px' _hover={{ bg: 'tj_light_blue' }}>Pesquisar</Button>
                                </Flex>
                            </Box>
                        </Flex>
                        <Flex justify='space-between' maxW='604px' w='100%' direction={['column', 'row']}>
                            <Box w='100%' maxW={['100%', '290px']} mt='24px'>
                                <Text mb='8px' fontSize={['75%', '100%']}>Filtre por tipo de unidade</Text>
                                <Select placeholder='Selecionar' h='44px'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </Box>
                            <Box w='100%' maxW={['100%', '290px']} mt='24px'>
                                <Text mb='8px' fontSize={['75%', '100%']}>Filtre por unidade</Text>
                                <Select placeholder='Selecionar' h='44px'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </Box>
                        </Flex>
                    </Flex>

                </Box>

                <Box w='full' mt='48px'>
                    <Flex w='full' h='116px' bg='#fff' border='1px solid #d8d8df' boxShadow='2px 0px 30px rgba(0,0,0,0.02)' borderRadius='6px' align='center' px='32px' mb='16px' direction={['column', 'row']} justify='space-between'>

                        <Text fontSize='24px' fontWeight='700' color='#00384d' mr='auto'> Primeira Vara</Text>
                        <Divider orientation='vertical' h={['0px', '52px']} mr='38px' />
                        <Flex>
                            <Text fontSize='18px' fontWeight='700' color='#222222' mr='auto'>Comarca de Assu</Text>
                            <Icon as={FaChevronRight} w='17px' h='31px' ml='1rem' />
                        </Flex>
                    </Flex>


                </Box>
            </ContainerBox>
        </>
    )
}