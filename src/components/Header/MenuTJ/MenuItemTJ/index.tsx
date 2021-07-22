import {
    Link,
    ListItem,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import { MenuInterface } from '../../../../interfaces/menuInterface';

interface MenuItemProps {
    menu: MenuInterface;
    isSmallerThan768: boolean;
}

export function MenuItemTJ({ menu, isSmallerThan768 }: MenuItemProps) {
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
            <Menu>
                <Link
                    as={MenuButton}
                    fontSize='1rem'
                    fontWeight='semibold'
                    href={menu.link ? menu.link : '#'}>
                    {menu.nome}
                </Link>
                {menu.menuFilhos ?
                    <MenuList>
                        {menu.menuFilhos.map(item => <MenuItem key={item.id}><Link href={item.link}>{item.nome}</Link></MenuItem>)}
                    </MenuList>
                : <></>}

            </Menu>
        </ListItem>);
}