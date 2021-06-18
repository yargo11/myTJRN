
import { useCallback, useState, useEffect } from 'react';
import { MenuInterface } from '../../../interfaces/menuInterface';
import { api } from '../../../../src/service/api';
import { MenuItem } from './MenuItem';
import MENUJSON from '../../../../test/menu.json';
import { Button, Box, UnorderedList, useMediaQuery } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

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

    return (
        <Box w='full'>
            {isSmallerThan768 ?
            <Button
                minW='full'
                bg='cyan.500'
                color='white'
                m='1px'><FaBars /></Button> :
            <UnorderedList
                maxW='1192px'
                m='auto'
                listStyleType='none'
                w='full'
                h='3rem'>
                    {menuItem ?menuItem.map(item => <MenuItem key={item.id} label={item.nome} link={item.linkExterno}/>) : <></>}
            </UnorderedList>}
        </Box>
    )
}