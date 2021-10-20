import { Link, Flex } from "@chakra-ui/react";
import ContainerBox from "../ContainerBox";
import ApplicationList from "./ApplicationList";

//Precisa melhorar responsividade
export default function Header() {
    return (
        <ContainerBox as={Flex}
            h='179px'
            justifyContent='space-between'
            alignItems='center' flexWrap='wrap'>
            <Link
                fontFamily='Inter'
                fontWeight='bold'
                fontSize='250%'
                color='tj_light_blue'
                lineHeight='55px'
                href='/'>TJRN.jus.br</Link>
            <ApplicationList />
        </ContainerBox>
    );
}