import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ContainerBoxProps extends BoxProps {
    children: ReactNode;
}

export default function ContainerBox ({children, ...attrs}: ContainerBoxProps) {
    return (
        <Box w='full' maxW='82.5rem' m='auto' px='0.75rem' {...attrs}>
            { children }
        </Box>
    );
}