import {
    Link,
    ListItem,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from '@chakra-ui/react';

interface MenuItemProps {
    label: string;
    link: string;
    isSmallerThan768: boolean;
}

export function MenuItemTJ({ label, link, isSmallerThan768 }: MenuItemProps) {
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
            }}>
            {/* <Link
            _hover={{
                textDecoration:'none'
            }}
            href={link ? link : '#'}>
                {label}
            </Link> */}
            <Menu>
                {/* <MenuButton as={Button} > */}
                <Link
                    as={MenuButton}
                    fontSize='1rem'
                    fontWeight='semibold'
                    _hover={{
                        textDecoration: 'none'
                    }}
                    href={link ? link : '#'}>
                    {label}
                </Link>
                {/* </MenuButton> */}
                <MenuList>
                    <MenuItem>História</MenuItem>
                    <MenuItem>Competências e Responsabilidades</MenuItem>
                    <MenuItem>Organograma</MenuItem>
                    <MenuItem>Dirigentes</MenuItem>
                    <MenuItem>Ex-Presidentes</MenuItem>
                    <MenuItem>Vice-presidência</MenuItem>
                    <MenuItem>Composição</MenuItem>
                    <MenuItem>Memorial</MenuItem>
                    <MenuItem>Biblioteca</MenuItem>
                    <MenuItem>Juiz de Cooperação</MenuItem>
                </MenuList>
            </Menu>
        </ListItem>);
}