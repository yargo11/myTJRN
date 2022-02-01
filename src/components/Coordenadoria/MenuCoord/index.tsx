import { Button, Flex, HStack, Icon, Link, Spacer } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

export default function MenuCoord({ linkList }) {
    return (
        <Flex h='87px' w='full' bg='#e1e7eb'>
            <Flex w='100%' maxW='1296px' m='auto'>
                <HStack
                    color='#00384D'
                    fontWeight='400'
                    fontSize='100%'
                    spacing='20px'
                >
                    {linkList.map(link =>
                        <Link href={link.link}>{link.label}</Link>
                    )
                    }
                </HStack>
                <Spacer />
                <Button
                    h='50px'
                    borderRadius='6px'
                    bg='#cfd4d6'
                >
                    <Icon as={FiMenu} w='1rem' h='1rem' mr='1rem' />
                    MENU
                </Button>
            </Flex>
        </Flex>
    )
}