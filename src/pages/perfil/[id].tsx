import { Flex, Box, Spacer, Text, useBreakpointValue } from "@chakra-ui/react";
import ContainerBox from "../../components/ContainerBox";
import PageTitle from "../../components/PageTitle";
import AsideMenu from "../../components/Profile/AsideMenu";

export default function Perfil () {
    const profile = {
                        name: 'Des. Vivaldo Prinheiro',
                        biography: `Possui graduação em em Direito pela 
                        Universidade Federal do Rio Grande do Norte (1976) 
                        e graduação em Ciências Sociais pela Universidade Federal do Rio Grande do Norte (1982). 
                        Em 20.06.2007 foi promovido, por merecimento, ao cargo de Desembargador. 
                        Exerceu o cargo de Diretor da Revista do Tribunal de Justiça no biênio 2008/2010, 
                        presidiu o TRE/RN - biênio 2010/2011, Vice - Presidente do TRE/RN - biênio 2011/2012, 
                        Corregedor Geral da Justiça - biênio 2013/2014. 
                        E, atualmente exerce suas funções jurisdicionais junto a 3ª Câmara Cível do TJRN, além de ser o 
                        Diretor da Escola da Magistratura do Rio Grande do Norte - biênio 2015-2016. Tem experiência na docência.`,
                        title: 'Presidente do TJRN',
                        titleDescription: `Possui graduação em em Direito pela 
                        Universidade Federal do Rio Grande do Norte (1976) 
                        e graduação em Ciências Sociais pela Universidade Federal do Rio Grande do Norte (1982). 
                        Em 20.06.2007 foi promovido, por merecimento, ao cargo de Desembargador. 
                        Exerceu o cargo de Diretor da Revista do Tribunal de Justiça no biênio 2008/2010, 
                        presidiu o TRE/RN - biênio 2010/2011, Vice - Presidente do TRE/RN - biênio 2011/2012, 
                        Corregedor Geral da Justiça - biênio 2013/2014. 
                        E, atualmente exerce suas funções jurisdicionais junto a 3ª Câmara Cível do TJRN, além de ser o 
                        Diretor da Escola da Magistratura do Rio Grande do Norte - biênio 2015-2016. Tem experiência na docência.`,
                        image: '/image/Maria_Zeneide_Bezerra.png',
                        email: 'presidente@tjrn.jus.br',
                        telefone: '+55 (84) 3673-8000'
                    }


    const imageWidth = useBreakpointValue({ base: Box, sm: Flex })
    const topMarginText = useBreakpointValue({ base: '0px', sm: '-154px'  })
    return (
        <>
            <PageTitle title='Desembargador Vivaldo Pinheiro' breadCrumbArray={[]} showTitle={false}/>
            <Box w='full' h='299px' bgColor='rgba(0, 56, 77, 0.1)'></Box>
            <ContainerBox as={imageWidth}>
                <Box w='306px' mt='-251px'>
                    <AsideMenu image={profile.image} email={profile.email} telefone={profile.telefone} />
                </Box>
                <Spacer maxW='130px'/>
                <Box maxW='747px' mt={topMarginText} mb='100px'>
                    <Text fontWeight='bold' fontSize='200%' lineHeight='140.625%'>{profile.title}</Text>
                    <Text fontWeight='bold' fontSize='350%' lineHeight='80.36%' color='tj_dark_blue' mt='16px'>{profile.name}</Text>
                    <Text fontWeight='semibold' fontSize='200%' lineHeight='118.75%' mt='96px'>Biografia</Text>
                    <Text fontWeight='normal' fontSize='112.5%' lineHeight='177.78%' letterSpacing='-0.26px' mt='35.36px'>{profile.biography}</Text>
                    <Text fontWeight='semibold' fontSize='200%' lineHeight='118.75%' mt='57.37px'>{profile.title}</Text>
                    <Text fontWeight='normal' fontSize='112.5%' lineHeight='177.78%' letterSpacing='-0.26px' mt='35.36px'>{profile.titleDescription}</Text>
                </Box>
            </ContainerBox>
        </>
    );
}