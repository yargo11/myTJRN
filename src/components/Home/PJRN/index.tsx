import { Box, Center, Image, Spacer, Text, Flex } from "@chakra-ui/react";
import ContainerBox from "../../ContainerBox";
import AreaTitle from "../AreaTitle";
import PJRNCard from "./PJRNCard";
import PJRNDivider from "./PJRNDivider";

export default function PJRN() {
    const unidadesList = [unidades1, unidades2, unidades3, unidades4]
    return (
        <Box maxW='1876px'>
            <Image src="/icons/TJRNShield.svg" zIndex='-1' position='absolute' right='5.5%' width="449" height="548"/>
            <ContainerBox py='64px' position='relative'>
                <AreaTitle title="Funcionamento do PJRN" subtitle="Veja a organização do Poder Judiciário "/>
                <Center
                    border='1px'
                    borderColor='#D8DBDF'
                    borderRadius='16px'
                    mt='46px'
                    px='24px'
                    pt='44px'
                    pb='28px'
                    sx={{
                        '@media (min-width: 500px)': {
                            flexDir:'row'
                        },
                        '@media (max-width: 499px)': {
                            flexDir:'column'
                        }
                    }}>
                    <Text fontWeight='bold' fontSize='150%' lineHeight='168.75%' textDecor='underline'>Presidência e Vice-presidência</Text>
                    <Spacer />
                    {unidadesList? unidadesList.map(
                        elemento =>
                            <Flex key={elemento.label}>
                                <PJRNDivider/>
                                <PJRNCard quantity={elemento.quantity} label={elemento.label}/>
                            </Flex>
                    ) : <></>}
                </Center>
            </ContainerBox>
        </Box>
    );
}

const unidades1 = {quantity: '09', label: 'Secretarias'}
const unidades2 = {quantity: '09', label: 'Órgãos'}
const unidades3 = {quantity: '90', label: 'Comarcas'}
const unidades4 = {quantity: '150', label: 'Juizados Especiais'}