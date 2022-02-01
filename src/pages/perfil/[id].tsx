<<<<<<< HEAD
import { Flex, Box, Text, useBreakpointValue, SimpleGrid, GridItem } from "@chakra-ui/react";
=======
import { Flex, Box, Text, useBreakpointValue, SimpleGrid, GridItem, AspectRatio } from "@chakra-ui/react";
>>>>>>> a8b32c9bcec75b10ca9609ff845e12e2b58eba77
import Profile from "../../components/Aside/Profile";
import ContainerBox from "../../components/ContainerBox";
import PageTitle from "../../components/PageTitle";

export default function Perfil() {
    const profile = {
        name: 'Des. Vivaldo Pinheiro',
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
        telefone: '+55 (84) 3673-8000',
        altProp: 'Vivaldo Pinheiro'
    }


    const imageWidth = useBreakpointValue({ base: Box, sm: Flex })
    return (
        <>
            <PageTitle title='Desembargador Vivaldo Pinheiro' breadCrumbArray={[]} showTitle={false} />
            <Box w='full' h='299px' bgColor='rgba(0, 56, 77, 0.1)' zIndex={-1} position='absolute' tabIndex={-1}></Box>
            <ContainerBox as={imageWidth} mb='100px'>
<<<<<<< HEAD
            <SimpleGrid columns={{base: 2, md: 3}} spacingX='30px'>
                <GridItem colSpan={{base: 2, md: 1}} pt='48px'>
                    <Profile image={profile.image} email={profile.email} telefone={profile.telefone} listOfContentToRead={['Nome: ' + profile.name, 'Biografia: ' + profile.biography, 'Título: ' + profile.title, profile.titleDescription, 'Email: ' + profile.email, 'Telefone: ' + profile.telefone]}/>
                </GridItem>
                <GridItem colSpan={2} py={{base: '30px', md:'145px'}}>
                    <Text fontWeight='bold' fontSize='200%' lineHeight='140.625%'>{profile.title}</Text>
                    <Text fontWeight='bold' fontSize='350%' lineHeight='80.36%' color='tj_dark_blue' mt='16px'>{profile.name}</Text>
                    <Text fontWeight='semibold' fontSize='200%' lineHeight='118.75%' mt='96px'>Biografia</Text>
                    <Text fontWeight='normal' fontSize='112.5%' lineHeight='177.78%' letterSpacing='-0.26px' mt='35.36px'>{profile.biography}</Text>
                    <Text fontWeight='semibold' fontSize='200%' lineHeight='118.75%' mt='57.37px'>{profile.title}</Text>
                    <Text fontWeight='normal' fontSize='112.5%' lineHeight='177.78%' letterSpacing='-0.26px' mt='35.36px'>{profile.titleDescription}</Text>
=======
                <SimpleGrid columns={{ base: 2, md: 3 }} spacingX='30px'>
                    <GridItem colSpan={{ base: 2, md: 1 }} pt='48px'>
                        <Profile image={profile.image} email={profile.email} telefone={profile.telefone} altProp={profile.altProp} />
                    </GridItem>
                    <GridItem colSpan={2} py={{ base: '30px', md: '145px' }}>
                        <Text fontWeight='bold' fontSize='200%' lineHeight='140.625%'>{profile.title}</Text>
                        <Text fontWeight='bold' fontSize='350%' lineHeight='80.36%' color='tj_dark_blue' mt='16px'>{profile.name}</Text>
                        <Text fontWeight='semibold' fontSize='200%' lineHeight='118.75%' mt='96px'>Biografia</Text>
                        <Text fontWeight='normal' fontSize='112.5%' lineHeight='177.78%' letterSpacing='-0.26px' mt='35.36px'>{profile.biography}</Text>
                        <Text fontWeight='semibold' fontSize='200%' lineHeight='118.75%' mt='57.37px'>{profile.title}</Text>
                        <Text fontWeight='normal' fontSize='112.5%' lineHeight='177.78%' letterSpacing='-0.26px' mt='35.36px'>{profile.titleDescription}</Text>
>>>>>>> a8b32c9bcec75b10ca9609ff845e12e2b58eba77
                    </GridItem>
                </SimpleGrid>
            </ContainerBox>
        </>
    );
}