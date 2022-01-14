import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import ContainerBox from "../../ContainerBox";
import AreaTitle from "../AreaTitle";
import PJRNCard from "./PJRNCard";
import CardList from '../../CardList';

export default function PJRN() {
    const unidadesList = [unidades1, unidades2, unidades3, unidades4]
    return (
        <Box maxW='1876px'>
            <Box h='548px' w='449px' zIndex={-1} position='absolute' right='5.5%' tabIndex={-1} bgImage="url('/icons/tjrn-escudo.png')">
            </Box>
            <ContainerBox py='64px' position='relative'>
                <AreaTitle title="Funcionamento do PJRN" subtitle="Veja a organização do Poder Judiciário "/>
                <CardList
                    border='1px'
                    borderColor='#D8DBDF'
                    borderRadius='16px'
                    mt='46px'
                    pt='44px'
                    pb='28px'
                    columnGap='0px'
                    columns={[1,2,4,5,6]}>
                    <GridItem  colSpan={[1,2,4,1,2]}>
                        <Text fontWeight='bold' fontSize='150%' lineHeight='168.75%' textDecor='underline' textAlign='center'>Presidência e Vice-presidência</Text>
                    </GridItem>
                    {unidadesList? unidadesList.map(
                        elemento => <PJRNCard key={elemento.label} quantity={elemento.quantity} label={elemento.label}/>
                    ) : <></>}
                </CardList>
            </ContainerBox>
        </Box>
    );
}

const unidades1 = {quantity: '09', label: 'Secretarias'}
const unidades2 = {quantity: '09', label: 'Órgãos'}
const unidades3 = {quantity: '90', label: 'Comarcas'}
const unidades4 = {quantity: '150', label: 'Juizados Especiais'}