import { useState, useEffect } from 'react';
import { MenuInterface } from '../../../interfaces/menuInterface';
import { api } from '../../../../src/service/api';
import { MenuItemTJ } from './MenuItemTJ';
import MENUJSON from '../../../../test/menu.json';
import {
    Button,
    Box,
    UnorderedList,
    useMediaQuery,
    Drawer,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

export function MenuTJ() {
    const [isSmallerThan768] = useMediaQuery("(max-width: 768px)")
    const [menuItem, setMenuItems] = useState<MenuInterface[]>([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        //api.get('/menu/listar').then(response => setMenuItems(response.data)).catch(error => console.log(error));
        setMenuItems(MENUJSON);
    }, []);

    return (
        <Box w='full'>
            {isSmallerThan768 ?
                <Box>
                    <Button
                        minW='full'
                        bg='cyan.500'
                        color='white'
                        m='1px'
                        onClick={onOpen}
                        transition='background 0.2s'
                        _hover={{
                            bg: '#2ca1cf'
                        }}
                        _active={{
                            bg: 'cyan.500'
                        }}>
                        <FaBars />
                    </Button>
                    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody>
                                <UnorderedList
                                    mt='4rem'
                                    spacing='1rem'
                                    display='flex'
                                    flexDirection='column'>
                                    {menuItem ? menuItem.map(item =>
                                        <MenuItemTJ
                                            key={item.id}
                                            label={item.nome}
                                            link={item.linkExterno}
                                            isSmallerThan768={true} />) : <></>}
                                </UnorderedList>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Box>
                :
                <UnorderedList
                    maxW={1320}
                    m='auto'
                    listStyleType='none'
                    w='full'
                    h='3rem'
                    display='flex'
                    flexWrap='wrap'>
                    {menuItem ? menuItem.map(item =>
                        <MenuItemTJ
                            key={item.id}
                            label={item.nome}
                            link={item.linkExterno}
                            isSmallerThan768={false} />) : <></>}
                </UnorderedList>}
        </Box>
    )
}