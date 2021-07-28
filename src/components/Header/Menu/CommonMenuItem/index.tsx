import { ListItem } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CommonMenuProps {
    isSmallerThan768:Boolean,
    children: ReactNode
}

export function CommonMenuItem({ isSmallerThan768, children }: CommonMenuProps) {
    return (
        <ListItem
        float='left'
        h='full'
        top='0'
        m='0 0.5rem'
        fontSize={isSmallerThan768 ? '1.25rem' : '0.9375rem'}
        fontWeight='medium'
        display='flex'
        alignItems='center'
        transition='box-shadow 0.2s, color 0.2s'
        _hover={{
            color: 'cyan.500',
            boxShadow: isSmallerThan768 ? 'none' : 'inset 0px -3px #b8d272',
        }}>{ children }</ListItem>
    );
}