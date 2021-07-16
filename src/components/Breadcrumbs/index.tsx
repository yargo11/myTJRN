import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Icon
} from '@chakra-ui/react';
import { FaHome, FaChevronRight } from 'react-icons/fa'

export function Breadcrumbs() {
    return (
        <Flex w="100%" h="48px" background="#191919">
            <Breadcrumb
                separator={<Icon as={FaChevronRight}/>}
                w="100%" maxW={1320} margin="auto" px="0.5rem" align="left" color="#ffffff">
                <BreadcrumbItem>
                    <BreadcrumbLink href="#"><Icon as={FaHome} /></BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Notícias</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </ Flex>
    )
}