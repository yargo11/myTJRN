import { Box, Link, Text } from "@chakra-ui/react";
import GrayBorder from "../../Border/GrayBorder";

interface TreeListItemProps {
    list: Array<ListItem>
}

export interface ListItem {
    label?: string,
    value: string,
    contactType?: string
}

export default function TreeListItem ({ list } :TreeListItemProps) {
    return (
        <>
            {list? list.map(
                element =>
                <Box key={element.label} mt='24px'>
                    <Text
                        w='50%'
                        fontWeight='semibold'
                        fontSize='112.5%'
                        lineHeight='138.89%'
                        display='inline-block'>
                            {element.label}
                    </Text>
                    <Text
                        maxW='50%'
                        fontSize='112.5%'
                        lineHeight='138.89%'
                        display={element.contactType? 'none':'inline-block'}>
                            {element.value}
                    </Text>
                    <Link
                        href={`${element.contactType === 'Phone'? 'tel': 'mailto'}:${element.value}`}
                        color='tj_navy_blue'
                        textDecor='underline'
                        maxW='50%'
                        fontSize='112.5%'
                        lineHeight='138.89%'
                        _hover={{textDecor: 'underline'}}
                        display={element.contactType? 'inline-block':'none'}>
                            {element.value}
                    </Link>
                    <GrayBorder mt='12px'/>
                </Box>
            )
            :<></>}
        </>
    );
}