import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import ContainerBox from "../../ContainerBox";
import AreaTitle from "../AreaTitle";
import PJRNCard from "./PJRNCard";
import CardList from '../../CardList';

interface PJRNProps {
    unidadeList: Array<UnidadeProps>
}

interface UnidadeProps {
    label: string,
    quantity: string
}

export default function PJRN({unidadeList}: PJRNProps) {
    return (
        <Box maxW='1876px' bgImage="url('/image/tjrn-escudo.png')" bgPos='95% 0%' bgRepeat='no-repeat'>
            <ContainerBox py='64px' position='relative'>
                <AreaTitle title="Funcionamento do PJRN" subtitle="Veja a organização do Poder Judiciário "/>
                <CardList
                    bg='white'
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
                    {unidadeList? unidadeList.map(
                        elemento => <PJRNCard key={elemento.label} quantity={elemento.quantity} label={elemento.label}/>
                    ) : <></>}
                </CardList>
            </ContainerBox>
        </Box>
    );
}