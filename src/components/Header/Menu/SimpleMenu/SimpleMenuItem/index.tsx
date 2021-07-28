import {
    Link,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
} from '@chakra-ui/react';

import { MenuInterface } from '../../../../../interfaces/menuInterface';
import { CommonMenuItem } from '../../CommonMenuItem';
import { CommonSimpleLink } from '../../CommonSimpleLink';

interface SimpleMenuItemProps {
    menu: MenuInterface;
}

export function SimpleMenuItem({ menu }: SimpleMenuItemProps) {
    return (
        <>
        <CommonMenuItem  isSmallerThan768={false}>
            {menu.menuFilhos?
                <Menu>
                    <MenuButton
                        fontSize='1rem'
                        fontWeight='semibold'
                        href={menu.link}>
                        {menu.nome}
                    </MenuButton>
                    <MenuList>
                        {menu.menuFilhos.map(item => <MenuItem key={item.id}><Link href={item.link}>{item.nome}</Link></MenuItem>)}
                    </MenuList>
                </Menu>:
                <CommonSimpleLink menu={menu}/>}
            </CommonMenuItem>
        </> 
    );
}