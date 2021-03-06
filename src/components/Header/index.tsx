import { Link, Flex } from "@chakra-ui/react";
import ContainerBox from "../ContainerBox";
import RightMenuDesktop from "./RightMenuDesktop";
import RightMenuMobile from "./RightMenuMobile";

//Precisa melhorar responsividade
export default function Header() {
    return (
        <ContainerBox as={Flex}
            py='25px'
            justifyContent='space-between'
            alignItems='center' flexWrap='wrap'>
            <Link
                fontFamily='Inter'
                fontWeight='bold'
                fontSize='250%'
                color='tj_light_blue'
                lineHeight='137.5%'
                href='/'>TJRN.jus.br</Link>
            <RightMenuDesktop />
            <RightMenuMobile />
        </ContainerBox>
    );
}