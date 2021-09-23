import { Link, Flex } from "@chakra-ui/react";
import ContainerBox from "../ContainerBox";
import AreaList from "./AreaList";
import ApplicationList from "./ApplicationList";

//Precisa melhorar responsividade
export default function Header() {
    return (
        <ContainerBox as={Flex}
            h='11.188rem'
            justifyContent='space-between'
            alignItems='center' flexWrap='wrap'>
            <Flex flexWrap='wrap'>
                <Link
                    fontFamily='Inter'
                    fontWeight='bold'
                    fontSize='2.5rem'
                    color='#14697F'
                    lineHeight='3.438rem'
                    href='#'>TJRN.jus.br</Link>
                <AreaList />
            </Flex>
            <ApplicationList />
        </ContainerBox>
    );
}