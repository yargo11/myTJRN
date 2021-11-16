import { Box, Divider, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import { PageContentProps } from '..';
import CardList from '../../../CardList';

export default function GridDisplay ({ headers }:PageContentProps) {
    const display = useBreakpointValue({ base: 'none', sm: 'initial' })
    return (
        <Box display={display}>
            <Text lineHeight='121%'>Nesta Página</Text>
            <Divider my='16px'/>
            <CardList columns={2} >
                {headers.map((header, index) => 
                    <Link key={index} href={`#${index}`} display='inline-block'>
                        <Image src='/icons/ArrowDown.svg' display='inline' mr='7px'/>
                        <Text display='inline' lineHeight='150%' textDecor='underline' color='#336699'>{header}</Text>
                    </Link>
                )}
            </CardList>
        </Box>
    );
}