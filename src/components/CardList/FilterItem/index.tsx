import { GridItem, GridItemProps, Link, Spacer, Text, Icon } from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa'

interface FilterItemProps extends GridItemProps {
    categoryFilterLabel: string;
    categoryFilterDescription?: string;
}

export default function FilterItem ({ categoryFilterLabel, categoryFilterDescription, ...attrs}: FilterItemProps) {
    return (
        <GridItem bg="#E1E7EB" py='32px' px='24px' display='flex' flexDirection='column' borderRadius='2xl' {...attrs}>
            <Text fontWeight='bold' fontSize='200%' lineHeight='125%' color='tj_dark_blue'>{categoryFilterLabel}</Text>
            <Text mt='16px' fontWeight='normal' fontSize='112.5%' lineHeight='138,88%'>{categoryFilterDescription}</Text>
            <Spacer minH='16px'/>
            <Link
                display='flex'
                textDecor='underline'
                _hover={{textDecor: 'underline'}}
                alignItems='center'
                lineHeight='121%'>
                <Icon as={FaBell} mr='8px'/>
                Inscreva-se para receber atualizações deste assunto
            </Link>
        </GridItem>
    );
}