import { Link, ListItem } from '@chakra-ui/react';

interface MenuItemProps {
    label: string;
    link: string;
}

export function MenuItem({ label, link }: MenuItemProps) {
	return (
        <ListItem
            float='left'
            h='full'
            m='0 0.5rem'
            fontSize=' 0.9375rem'
            fontWeight='medium'
            display='flex'
            alignItems='center'
            transition='box-shadow 0.2s, color 0.2s'
            _hover={{
                color: 'cyan.500',
                boxShadow: 'inset 0px -3px #b8d272',  
            }}>
            <Link
            _hover={{
                textDecoration:'none'
            }}
            href={link ? link : '#'}>
                {label}
            </Link>
        </ListItem>);
}