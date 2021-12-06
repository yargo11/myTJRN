import { Flex, Box, Spacer, Text, useBreakpointValue } from "@chakra-ui/react";
import Unit from "../../components/Aside/Unit";
import ContainerBox from "../../components/ContainerBox";
import ListenPrintSharePanel from "../../components/ListenPrintSharePanel";
import PageTitle from "../../components/PageTitle";

export default function Unidade () {
    const profile = {
                        name: '1ª Vara da Comarca de Assu',
                        about: `É a secretaria a quem compete planejar, dirigir e coordenar atividades administrativas 
                        em consonância com diretrizes da Presidência do Tribunal. Define e implementa sistemáticas e instrumentos 
                        de planejamento administrativo, de execução e de controle, além de zelar pelo cumprimento da legislação e 
                        das normas regulamentares.`,
                        aditionalInfo: `É a secretaria a quem compete planejar, dirigir e coordenar atividades administrativas em 
                        consonância com diretrizes da Presidência do Tribunal.`,
                        image: '/image/Maria_Zeneide_Bezerra.png',
                        email: 'presidente@tjrn.jus.br',
                        telefone: '+55 (84) 3673-8000'
                    }


    const imageWidth = useBreakpointValue({ base: Box, sm: Flex })
    return (
        <>
            <PageTitle title='Desembargador Vivaldo Pinheiro' breadCrumbArray={[]} showTitle={false}/>
            <Flex bgColor='#FAFBFC'>
                <ContainerBox as={Flex} py='56px' alignItems='center' justifyContent='space-between'>
                    <Text fontWeight='extrabold' fontSize='250%' lineHeight='115%' color='tj_dark_blue'>{profile.name}</Text>
                    <ListenPrintSharePanel listOfContentToRead={[]}/>
                </ContainerBox>
            </Flex>
            <ContainerBox as={imageWidth} my='64px'>
                <Box w='306px'>
                    <Unit image={profile.image} />
                </Box>
                <Spacer maxW='130px'/>
                <Box maxW='747px'>
                    <Text fontWeight='bold' fontSize='200%' lineHeight='125%' color='tj_dark_blue'>Sobre</Text>
                    <Text fontWeight='normal' fontSize='112.5%' lineHeight='177.78%' letterSpacing='-0.26px' mt='16px' mb='48px'>{profile.about}</Text>
                    <Text fontWeight='bold' fontSize='200%' lineHeight='125%' color='tj_dark_blue'>Informações adicionais</Text>
                    <Text fontWeight='normal' fontSize='112.5%' lineHeight='177.78%' letterSpacing='-0.26px' mt='16px' mb='48px'>{profile.aditionalInfo}</Text>
                    <Text fontWeight='bold' fontSize='200%' lineHeight='125%' color='tj_dark_blue'>Atendimento</Text>
                    <Text fontWeight='bold' fontSize='150%' lineHeight='141.68%' color='tj_dark_blue'>Atendimento</Text>
                </Box>
            </ContainerBox>
        </>
    );
}