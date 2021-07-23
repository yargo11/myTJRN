import { Breadcrumbs } from "../../../components/Breadcrumbs";

import { Flex, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react"

export default function CompetenciasResponsabilidades() {
    return (
        <Flex direction="column">
            <Breadcrumbs />
            <Flex maxW={1320} w='100%' m='auto' direction='column'>
                <Heading my={8}>Dirigentes</Heading>

                <SimpleGrid minChildWidth="120px" spacing="40px" mt={10}>
                    <Flex direction='column'>
                        <Image src='/images/dirigentes/vivaldoPinheiro.jpg' />
                        <Heading size="lg" textAlign='center'>
                            Vivaldo Pinheiro
                        </Heading>
                        <Text textAlign='center'>
                            Presidente
                        </Text>
                    </Flex>
                    <Flex direction='column'>
                        <Image src='/images/dirigentes/mariaZeneide.png' />
                        <Heading size="lg" textAlign='center'>
                            Maria Zeneide
                        </Heading>
                        <Text textAlign='center'>
                            Vice-Presidente
                        </Text>
                    </Flex>
                    <Flex direction='column'>
                        <Image src='/images/dirigentes/dilermandoMota.png' />
                        <Heading size="lg" textAlign='center'>
                            Dilermando Mota
                        </Heading>
                        <Text textAlign='center'>
                            Corregedor de Justiça
                        </Text>
                    </Flex>
                    <Flex direction='column'>
                        <Image src='/images/dirigentes/amilcarMaia.png' />
                        <Heading size="lg" textAlign='center'>
                            Amilcar Maia
                        </Heading>
                        <Text textAlign='center'>
                            Ouvidor Geral
                        </Text>
                    </Flex>
                </SimpleGrid>

            </Flex>
        </Flex>
    )
}
