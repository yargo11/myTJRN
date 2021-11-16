import { Grid, GridItem, Link, SimpleGrid, SimpleGridProps, Spacer, Text, Icon } from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa'
import { ReactNode } from 'react';
import FilterItem from './FilterItem';



interface CardListProps extends SimpleGridProps {
    categoryFilterLabel?: string;
    categoryFilterDescription?: string;
    children: ReactNode;
}

export default function CardList ({children, categoryFilterLabel, categoryFilterDescription, ...attrs}: CardListProps) {
    return (
        <>
            <Grid templateColumns="repeat(2, 1fr)" gap='24px' justifyContent='center' {...attrs} sx={{'@media not print': {display: 'none'}}}>
                {categoryFilterLabel?
                    <FilterItem categoryFilterLabel={categoryFilterLabel} categoryFilterDescription={categoryFilterDescription} colSpan={1} />
                : <></>}
                { children }
            </Grid>
            <SimpleGrid w='full' justifyContent='center' spacing='24px' {...attrs} sx={{'@media print': {display: 'none'}}}>
                {categoryFilterLabel?
                    <FilterItem categoryFilterLabel={categoryFilterLabel} categoryFilterDescription={categoryFilterDescription} colSpan={{base: 1, sm: 2}} />
                : <></>}
                { children }
            </SimpleGrid>
        </>
    );
}