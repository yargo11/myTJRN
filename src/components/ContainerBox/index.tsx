import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ContainerBoxProps extends BoxProps {
    children: ReactNode;
}

export default function ContainerBox ({children, ...attrs}: ContainerBoxProps) {
    return (
        <Box w='full' maxW='1320px' m='auto' px='24px' {...attrs}>
            { children }
        </Box>
    );
}