import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image, Link, Text } from '@chakra-ui/react';
import { PageContentProps } from '..';
import CardList from '../../../CardList';

export default function AccordionDisplay ({ headers }:PageContentProps) {
    return (
        <Accordion display={{ base: 'initial', sm: 'none' }} allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            Nesta Página
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CardList columns={1} >
                        {headers.map((header, index) => 
                            <Link key={index} href={`#${index}`} display='inline-block'>
                                <Image src='/icons/ArrowDown.svg' display='inline' mr='7px'/>
                                <Text display='inline' lineHeight='150%' textDecor='underline' color='tj_navy_blue'>{header}</Text>
                            </Link>
                        )}
                    </CardList>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}