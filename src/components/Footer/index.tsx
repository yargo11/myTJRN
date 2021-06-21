import { Flex, List } from "@chakra-ui/react"
import { FooterListItems } from './FooterListItems';

export function Footer() {
    return (
        <Flex maxW="1120px" margin="auto" mt={36} p={2.5}>
            <List 
                fontSize="1.625rem"
                display='flex'
                flexDirection='column'>
                <FooterListItems label='Membros' link='#'/>
                <FooterListItems label='Multimidia' link='#'/>
                <FooterListItems label='O que o tribunal faz' link='#'/>
                <FooterListItems label='Contato' link='#'/>
            </List>
        </Flex>
    )
}