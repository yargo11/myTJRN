import { Box, GridItem, Link, SimpleGrid, Text } from "@chakra-ui/react";
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
                <SimpleGrid key={element.value} mt='24px' columns={{base:1, sm:2}}>
                    <GridItem>
                        <Text
                            fontWeight='semibold'
                            fontSize='112.5%'
                            lineHeight='138.89%'
                            display='inline-block'>
                                {element.label}
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Text
                            fontSize='112.5%'
                            lineHeight='138.89%'
                            display={element.contactType? 'none':'inline-block'}>
                                {element.value}
                        </Text>
                        <Link
                            href={`${element.contactType === 'Phone'? 'tel': 'mailto'}:${element.value}`}
                            color='tj_navy_blue'
                            textDecor='underline'
                            fontSize='112.5%'
                            lineHeight='138.89%'
                            _hover={{textDecor: 'underline'}}
                            display={element.contactType? 'inline-block':'none'}>
                                {element.value}
                        </Link>
                    </GridItem>
                    <GridItem colSpan={{base:1, sm:2}}>
                        <GrayBorder mt='12px'/>
                    </GridItem>
                </SimpleGrid>
            )
            :<></>}
        </>
    );
}