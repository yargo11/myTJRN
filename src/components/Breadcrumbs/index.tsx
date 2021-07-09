import { Flex, Link, Image } from '@chakra-ui/react';
import styles from './styles.module.scss';

export function Breadcrumbs() {
    return (
        <Flex w="100%" h="48px" background="#191919">
            <Flex w="100%" maxW={1192} margin="auto" px="0.5rem" align="center" color="#ffffff">
                <Link href="#" mr={2}>
                    <Image src="/images/icons/home.svg" />
                </Link>
                /
                <Link href="#" mx={2}
                    transition="0.2s color"
                    _hover={{
                        color: "cyan.500"
                    }}
                >
                    Notícias
                </Link>
            </Flex>
        </Flex >
    )
}