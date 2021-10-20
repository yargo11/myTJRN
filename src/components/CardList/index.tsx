import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CardListProps extends SimpleGridProps {
    children: ReactNode;
}

export default function CardList ({children, ...attrs}: CardListProps) {
    return (
        <SimpleGrid w='full' justifyContent='center' spacing='24px' columns={{base: 1, sm: 2, md: 3, lg: 4}} {...attrs}>
            { children }
        </SimpleGrid>
    );
}