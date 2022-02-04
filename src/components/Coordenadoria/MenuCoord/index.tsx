import { Box, Button, Flex, HStack, Link, Icon, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

export default function MenuCoord({ linkList, subMenu }) {

    const [showMenu, setShowMenu] = useState('none')

    function handleMenuClick() {
        if (showMenu === 'none') {
            setShowMenu('flex')
        } else {
            setShowMenu('none')
        }
    }

    return (
        <Flex w='full' bg='#e1e7eb' direction='column'>
            <Flex w='100%' maxW='1296px' m='auto' h='87px' align='center'>
                <HStack
                    color='#00384D'
                    fontWeight='500'
                    fontSize='100%'
                    spacing='20px'
                >
                    {linkList.map(link =>
                        <Link key={link.link} href={link.link}>{link.label}</Link>
                    )
                    }
                </HStack>
                <Spacer />
                <Button
                    h='50px'
                    borderRadius='6px'
                    bg='#cfd4d6'
                    onClick={handleMenuClick}
                >
                    <Icon as={FiMenu} w='1rem' h='1rem' mr='1rem' />
                    MENU
                </Button>
            </Flex>
            <Flex py='32px' display={showMenu}>
                <SimpleGrid minChildWidth='306px' spacing='24px' w='100%' maxW='1296px' m='auto'>
                    {subMenu.map(option =>
                        <Flex key={option.link} as={Link} href={option.link} align='center' pl='24px' color='#fff' textDecoration='underline' borderRadius='6px' bg='#00384D' height='97px'>
                            <Text>{option.label}</Text>
                        </Flex>
                    )}
                </SimpleGrid>
            </Flex>

        </Flex>
    )
}