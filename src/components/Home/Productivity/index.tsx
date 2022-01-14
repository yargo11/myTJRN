import { Box, Divider, Link, Text } from "@chakra-ui/react";
import AreaTitle from "../AreaTitle";

export default function Productivity () {
    return (
        <Box>
            <AreaTitle title='Produtividade' subtitle='Veja informações de produção do Poder Judiciário'/>
            <Divider mb='16px' mt='34px'/>
            <Link fontSize='131.25%' fontWeight='bold' lineHeight='119.05%' color='tj_dark_blue' href='#'>Produtividade semanal do Poder Judiciário</Link>
            <Divider my='16px'/>
            <Link fontSize='131.25%' fontWeight='bold' lineHeight='119.05%' color='tj_dark_blue' href='#'>Estatísticas</Link>
            <Divider my='16px'/>
            <Link fontSize='131.25%' fontWeight='bold' lineHeight='119.05%' color='tj_dark_blue' href='#'>Centro de Inteligência</Link>
            <Divider my='16px'/>
            <Link fontSize='131.25%' fontWeight='bold' lineHeight='119.05%' color='tj_dark_blue' href='#'>Carta de serviços ao cidadão</Link>
            <Divider my='16px'/>
        </Box>
    );
}