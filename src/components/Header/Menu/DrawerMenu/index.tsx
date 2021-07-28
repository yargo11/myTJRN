import { MenuInterface } from '../../../../interfaces/menuInterface';
import {
    Button,
    Box,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    UnorderedList,
    useDisclosure
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { DrawerMenuItem } from './DrawerMenuItem';

interface DrawerMenuProps {
    menuList: MenuInterface[]
}

export function DrawerMenu ({ menuList }: DrawerMenuProps) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
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
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <UnorderedList
                            mt='4rem'
                            spacing='1rem'
                            display='flex'
                            flexDirection='column'>
                            {menuList.map(item =>
                                <DrawerMenuItem
                                    key={item.id}
                                    menu={item}/>)}
                        </UnorderedList>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>);
}