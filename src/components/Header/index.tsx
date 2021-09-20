import { Flex, Text } from "@chakra-ui/react";
import PagesList from "./PagesList";
import FuncionalityList from './FuncionalityList'

export default function Header() {
    return (
        <Flex
            maxW='81rem'
            h='11.1rem'
            m='auto'
            alignItems='center'
            flexWrap='wrap'>
            <Text
                fontFamily='Inter'
                fontWeight='bold'
                fontSize='2.5rem'
                color='#14697F'
                lineHeight='55px'
                as='a'
                href='/'>TJRN.jus.br</Text>
            <PagesList />
            <FuncionalityList />
        </Flex>
    );
}