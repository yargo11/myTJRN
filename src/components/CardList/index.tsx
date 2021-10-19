import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CardListProps extends SimpleGridProps {
    children: ReactNode;
}

export default function CardList ({children, ...attrs}: CardListProps) {
    return (
        <SimpleGrid w='full' justifyContent='center' spacing='1.5rem' sx={{
            "@media(min-width: 1320px)": {
                "gridTemplateColumns": "repeat(4, minmax(0, 1fr))"
            },

            "@media(max-width: 1319px) and (min-width: 990px)": {
                "gridTemplateColumns": "repeat(3, minmax(0, 1fr))"
            },

            "@media(max-width: 989px) and (min-width: 660px)": {
                "gridTemplateColumns": "repeat(2, minmax(0, 1fr))"
            },

            "@media(max-width: 659px)": {
                "gridTemplateColumns": "repeat(1, minmax(0, 1fr))"
            }
        }} {...attrs}>
            { children }
        </SimpleGrid>
    );
}