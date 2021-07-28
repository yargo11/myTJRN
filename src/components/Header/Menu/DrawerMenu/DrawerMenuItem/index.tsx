import {
    Link,
    AccordionItem,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/react';
import { MenuInterface } from '../../../../../interfaces/menuInterface';
import { CommonMenuItem } from '../../CommonMenuItem';
import { CommonSimpleLink } from '../../CommonSimpleLink';

interface DrawerMenuItemProps {
    menu: MenuInterface;
}

export function DrawerMenuItem({ menu }:DrawerMenuItemProps) {
    return (
        <>
            <CommonMenuItem isSmallerThan768={true}>
                {menu.menuFilhos?
                    <Accordion allowMultiple  maxW='full'>
                        <AccordionItem borderStyle='none'>
                            <h2>
                                <AccordionButton pl={0} pt={2}>
                                <Link flex="1" textAlign="left" fontSize='1rem' fontWeight='semibold' href={menu.link}>
                                    {menu.nome}
                                </Link>
                                <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            {menu.menuFilhos.map(item =>
                                <AccordionPanel pb={2} key={item.id} fontSize='1rem'>
                                    <Link href={item.link}>{item.nome}</Link>
                                </AccordionPanel>)}
                        </AccordionItem>
                    </Accordion>:
                    <CommonSimpleLink menu={menu}/>}
            </CommonMenuItem>
        </>
    );
}


