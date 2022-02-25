import { Box, Text } from "@chakra-ui/react";
import TreeListItem, { ListItem } from "./TreeListItem";

interface TreeListProps {
    elementList: Array<Tree>
}

export interface Tree {
    label: string,
    list: Array<ListItem>
}

export default function TreeList ({ elementList } :TreeListProps) {
    return (
        <>
            {elementList? elementList.map(
                element =>
                    <Box key={element.label} mt='16px' mb='32px'>
                        <Text fontWeight='bold' fontSize='150%' lineHeight='141.68%' color='tj_dark_blue'>{element.label}</Text>
                        <TreeListItem list={element.list}/>
                    </Box>
            ) : <></>}
        </>
    );
}