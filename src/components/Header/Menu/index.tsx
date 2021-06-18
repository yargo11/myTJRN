
import { useCallback, useState, useEffect } from 'react';

import { MenuInterface } from '../../../interfaces/menuInterface';
import { api } from '../../../../src/service/api';
import { MenuItem } from './MenuItem';
import MENUJSON from '../../../../test/menu.json';
import { UnorderedList, useMediaQuery } from '@chakra-ui/react';

export function Menu() {
    const [isSmallerThan768] = useMediaQuery("(max-width: 768px)")
    const [menuItem, setMenuItems] = useState<MenuInterface[]>([]);

    useEffect(() => {
        //api.get('/menu/listar').then(response => setMenuItems(response.data)).catch(error => console.log(error));
        setMenuItems(MENUJSON);
    }, []);

    const accessibilityIds = {
        checkbox: 'accessible-marker-example1',
        button: 'accessible-marker-example2'
    };

    const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);

    const onClick = useCallback(
        () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
        [isButtonCollapseOpen]
    );

    if (isSmallerThan768) {
        setIsButtonCollapseOpen(false);
    }

    return (
        <UnorderedList
            maxW='1192px'
            m='auto'
            listStyleType='none'
            w='full'
            h='3rem' display={isSmallerThan768 ? 'none' : 'initial'}>
                {menuItem ?menuItem.map(item => <MenuItem label={item.nome} link={item.linkExterno}/>) : <></>}
        </UnorderedList>

    )
}