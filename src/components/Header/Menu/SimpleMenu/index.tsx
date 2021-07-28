import { UnorderedList } from '@chakra-ui/react';
import { MenuInterface } from '../../../../interfaces/menuInterface';
import { SimpleMenuItem } from './SimpleMenuItem';

interface SimpleMenuProps {
    menuList: MenuInterface[]
}

export function SimpleMenu ({ menuList }: SimpleMenuProps) {
    return (
        <UnorderedList
            maxW={1320}
            m='auto'
            listStyleType='none'
            w='full'
            h='3rem'
            display='flex'
            flexWrap='wrap'>
            {menuList.map(item =>
                <SimpleMenuItem
                    key={item.id}
                    menu={item}/>)}
        </UnorderedList>
    );
}