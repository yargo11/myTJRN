import { Box, Divider, Image, Link, Text } from '@chakra-ui/react';
import { PageContentProps } from '..';
import CardList from '../../../CardList';

export default function GridDisplay ({ headers }:PageContentProps) {
    return (
        <Box display={{ base: 'none', sm: 'initial' }}>
            <Text lineHeight='121%'>Nesta Página</Text>
            <Divider my='16px'/>
            <CardList columns={2} >
                {headers.map((header, index) => 
                    <Link key={index} href={`#${index}`} display='inline-block'>
                        <Image src='/icons/ArrowDown.svg' display='inline' mr='7px'/>
                        <Text display='inline' lineHeight='150%' textDecor='underline' color='tj_navy_blue'>{header}</Text>
                    </Link>
                )}
            </CardList>
        </Box>
    );
}