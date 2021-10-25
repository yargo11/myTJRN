import { GridItem, Link, SimpleGrid, SimpleGridProps, Spacer, Text, Icon } from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa'
import { ReactNode } from 'react';

interface CardListProps extends SimpleGridProps {
    categoryFilterLabel?: string;
    categoryFilterDescription?: string;
    children: ReactNode;
}

export default function CardList ({children, categoryFilterLabel, categoryFilterDescription, ...attrs}: CardListProps) {
    return (
        <SimpleGrid w='full' justifyContent='center' spacing='24px' {...attrs}>
            {categoryFilterLabel?
                <GridItem colSpan={{base: 1, sm: 2}} bg="#E1E7EB" py='32px' px='24px' display='flex' flexDirection='column'>
                    <Text fontWeight='bold' fontSize='200%' lineHeight='125%' color='tj_dark_blue'>{categoryFilterLabel}</Text>
                    <Text mt='16px' fontWeight='normal' fontSize='112.5%' lineHeight='138,88%'>{categoryFilterDescription}</Text>
                    <Spacer minH='16px'/>
                    <Link display='flex' textDecor='underline' _hover={{textDecor: 'underline'}} alignItems='center' lineHeight='121%'><Icon as={FaBell} mr='8px'/>Inscreva-se para receber atualizações deste assunto</Link>
                </GridItem> : <></>}
            { children }
        </SimpleGrid>
    );
}