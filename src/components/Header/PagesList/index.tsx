import { ListItem, UnorderedList } from "@chakra-ui/layout";

export default function PagesList () {
    return (
        <UnorderedList>
            <ListItem>Início</ListItem>
            <ListItem>Institucional</ListItem>
            <ListItem>Legislação</ListItem>
            <ListItem>Transparência</ListItem>
        </UnorderedList>
    );
}