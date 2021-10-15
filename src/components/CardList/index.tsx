import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CardListProps extends SimpleGridProps {
    children: ReactNode;
    columnNumber: () => 1 | 2 | 3 | 4;
}

export default function CardList ({children, columnNumber, ...others}: CardListProps) {
    return (
        <SimpleGrid w='full' justifyContent='center' spacing='1.5rem' columns={columnNumber()}>
            { children }
        </SimpleGrid>
    );
}