import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
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
            <SimpleGrid w='full' justifyContent='center' columns={2} spacing='24px' sx={{'@media not print': {display: 'none'}}}>
                {categoryFilterLabel?
                    <FilterItem categoryFilterLabel={categoryFilterLabel} categoryFilterDescription={categoryFilterDescription} colSpan={1} />
                : <></>}
                { children }
            </SimpleGrid>
            <SimpleGrid w='full' justifyContent='center' spacing='24px' {...attrs} sx={{'@media print': {display: 'none'}}}>
                {categoryFilterLabel?
                    <FilterItem categoryFilterLabel={categoryFilterLabel} categoryFilterDescription={categoryFilterDescription} colSpan={{base: 1, sm: 2}} />
                : <></>}
                { children }
            </SimpleGrid>
        </>
    );
}