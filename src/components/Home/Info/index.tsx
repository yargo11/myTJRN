import { Box, Flex, Link } from "@chakra-ui/react";
import CardList from "../../CardList";
import ContainerBox from "../../ContainerBox";
import AreaTitle from "../AreaTitle";
import InfoCard from "./InfoCard";

export default function Info() {
    const infoList = [info1, info2, info3]

    return (
        <Box bgColor='rgba(212, 238, 248, 0.8)' pt='64px' pb='85px'>
            <ContainerBox>
                <AreaTitle title='Precisa de outras informações?' subtitle='Entre em contato pelos nossos Canais de Atendimento'/>
                <CardList columns={[1,2,2,4]} mt='69px' spacingX='0px'>
                    {infoList.map( info => <InfoCard key={info.label} label={info.label} info={info.info}/>)}
                    <Flex flexDir='column' alignContent='start' justifyContent='center' textAlign='start' color='#131D57' px='16px'>
                        <Link fontWeight='bold' fontSize='131.25%' lineHeight='133.33%' href='#' mb='21px'>Unidades Administrativas</Link>
                        <Link fontWeight='bold' fontSize='131.25%' lineHeight='133.33%' href='#' mb='21px'>Plantão Judiciário</Link>
                        <Link fontWeight='bold' fontSize='131.25%' lineHeight='133.33%' href='#'>Balcão Virtual</Link>
                    </Flex>
                </CardList>
            </ContainerBox>
        </Box>
    );
}

const info1 = {label: 'Telefone', info: '(84) 3673-8000'}
const info2 = {label: 'Endereço', info: 'Av. Jerônimo Câmara, 2000 Nossa Senhora de Nazaré, Natal/RN CEP 59060-300'}
const info3 = {label: 'Horário de atendimento', info: 'Segunda a quinta-feira: 8h às 18h Sexta-feira: 8h às 14h'}