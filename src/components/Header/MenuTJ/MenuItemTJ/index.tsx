import {
    Link,
    ListItem,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    AccordionItem,
    Accordion,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/react';
import { MenuInterface } from '../../../../interfaces/menuInterface';

interface MenuItemProps {
    menu: MenuInterface;
    isSmallerThan768: boolean;
}

export function MenuItemTJ({ menu, isSmallerThan768 }: MenuItemProps) {
    console.log(!menu.menuFilhos)
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
            {!isSmallerThan768 || !menu.menuFilhos ?   
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
                </Menu> : 
                <Accordion allowMultiple  maxW='full'>
                <AccordionItem borderStyle='none'>
                  <h2>
                    <AccordionButton pl={0} pt={2}>
                      <Box flex="1" textAlign="left" fontSize='1rem' fontWeight='semibold'>
                        {menu.nome}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {menu.menuFilhos.map(item => <AccordionPanel pb={2} key={item.id} fontSize='1rem'><Link href={item.link}>{item.nome}</Link></AccordionPanel>)}
                </AccordionItem>
                </Accordion>
            }
        </ListItem>);
}