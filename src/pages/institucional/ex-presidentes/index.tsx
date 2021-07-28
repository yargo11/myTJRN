import { Breadcrumbs } from "../../../components/Breadcrumbs";

import {
    Flex,
    Heading,
    Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption
} from "@chakra-ui/react"

export default function ExPresidentes() {
    return (
        <Flex direction="column">
            <Breadcrumbs />
            <Flex maxW={1320} w='100%' m='auto' direction='column'>
                <Heading my={8}>Ex-Presidentes</Heading>

                <Table size="sm" variant="striped" colorScheme="cyan">
                    <Thead>
                        <Tr>
                            <Th>Presidentes</Th>
                            <Th>Biênio</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>OLYMPIO MANOEL DOS SANTOS VITAL</Td>
                            <Td>1892</Td>
                        </Tr>
                        <Tr>
                            <Td>JERÔNIMO AMÉRICO RAPOUSO DA CAMARA</Td>
                            <Td>1893, 1895, 1896,1897 e 12/01/1898</Td>
                        </Tr>
                        <Tr>
                            <Td>JOAQUIM CAVALCANTE FERREIRA DE MELO</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>JOSÉ CLÍMACO DO ESPIRITO SANTO</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>JOAQUIM FERREIRA CHAVES FILHO</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>FRANCISCO DE SALLES MEIRA E SÁ</Td>
                            <Td>31/08/1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905 e 1906</Td>
                        </Tr>
                        <Tr>
                            <Td>MANOEL MOREIRA DIAS</Td>
                            <Td>1907</Td>
                        </Tr>
                        <Tr>
                            <Td>JOSÉ TEOTÔNIO FREIRE</Td>
                            <Td>1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920 e 12/01/1921</Td>
                        </Tr>
                        <Tr>
                            <Td>HEMETÉRIO FERNANDES RAPOSO DE MELO</Td>
                            <Td>09/03/1921, 1922, 1923, 1924 e 1925</Td>
                        </Tr>
                        <Tr>
                            <Td>JOÃO DIONÍSIO FILGUEIRA</Td>
                            <Td>1926, 1927, 1928, 1929, 1930, 1931, 1932 e 1933</Td>
                        </Tr>
                    </Tbody>
                </Table>

            </Flex>
        </Flex>
    )
}
