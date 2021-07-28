import { useState, useEffect } from 'react';
import { MenuInterface } from '../../../interfaces/menuInterface';
import { api } from '../../../service/api';
import MENUJSON from '../../../../test/menu.json';
import {
    Box,
    useMediaQuery,
} from '@chakra-ui/react';
import { DrawerMenu } from './DrawerMenu';
import { SimpleMenu } from './SimpleMenu';

export function Menu() {
    const [isSmallerThan768] = useMediaQuery("(max-width: 768px)")
    const [menuItem, setMenuItems] = useState<MenuInterface[]>([]);

    useEffect(() => {
        //api.get('/menu/listar').then(response => setMenuItems(response.data)).catch(error => console.log(error));
        setMenuItems(MENUJSON);
    }, []);

    return (
        <Box w='full'>
            {isSmallerThan768 ? <DrawerMenu menuList={menuItem}/> : <SimpleMenu menuList={menuItem}/>}
        </Box>
    )
}