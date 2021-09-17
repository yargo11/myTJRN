import { Flex, Text } from "@chakra-ui/react";
import PagesList from "./PagesList";
import FuncionalityList from './FuncionalityList'

export default function Header() {
    return (
        <Flex maxW='82.5rem' h='11.1rem' m='auto' alignItems='center' justifyContent='space-between'>
            <Text fontWeight='bold' fontSize='2.5rem' color='#14697F' as='a' href='/'>TJRN.jus.br</Text>
            <PagesList />
            <FuncionalityList />
        </Flex>
    );
}