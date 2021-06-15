import styles from './styles.module.scss';

import { Flex, List, ListItem } from "@chakra-ui/react"

export function Footer() {
    return (
        <Flex maxW="1120px" margin="auto" mt={36} p={2.5}>
            <List className={styles.listLiElements} fontSize="1.625rem">
                <ListItem><a href="#">Membros</a></ListItem>
                <ListItem><a href="#">Multimidia</a></ListItem>
                <ListItem><a href="#">O que o tribunal faz</a></ListItem>
                <ListItem><a href="#">Contato</a></ListItem>
            </List>
        </Flex>
    )
}