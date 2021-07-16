import {
    Flex,
    Link,
    Image,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Icon
} from '@chakra-ui/react';
import styles from './styles.module.scss';
import { FaHome, FaChevronRight } from 'react-icons/fa'

export function Breadcrumbs() {
    return (
        <Flex w="100%" h="48px" background="#191919">
            <Breadcrumb
                separator={<Icon as={FaChevronRight}/>}
                w="100%" maxW={1192} margin="auto" px="0.5rem" align="left" color="#ffffff">
                <BreadcrumbItem>
                    <BreadcrumbLink href="#"><Icon as={FaHome} /></BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Notícias</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </ Flex>
        // <Flex w="100%" h="48px" background="#191919">
        //     <Flex w="100%" maxW={1192} margin="auto" px="0.5rem" align="center" color="#ffffff">
        //         <Link href="#" mr={2}>
        //             <Image src="/images/icons/home.svg" />
        //         </Link>
        //         /
        //         <Link href="#" mx={2}
        //             transition="0.2s color"
        //             _hover={{
        //                 color: "cyan.500"
        //             }}
        //         >
        //             Notícias
        //         </Link>
        //     </Flex>
        // </Flex >
    )
}