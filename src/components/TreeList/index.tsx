import { Box, BoxProps, Text } from "@chakra-ui/react";
import TreeListItem, { ListItem } from "./TreeListItem";

interface TreeListProps extends BoxProps {
    elementList: Array<Tree>
}

interface Tree {
    label: string,
    list: Array<ListItem>
}

export default function TreeList ({ elementList, ...attrs } :TreeListProps) {
    return (
        <>
            {elementList? elementList.map(
                element =>
                    <Box {...attrs} key={element.label} >
                        <Text fontWeight='bold' fontSize='150%' lineHeight='141.68%' color='tj_dark_blue'>{element.label}</Text>
                        <TreeListItem list={element.list}/>
                    </Box>
            ) : <></>}
        </>
    );
}