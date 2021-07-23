import { Breadcrumbs } from "../../../components/Breadcrumbs";

import { Flex, Heading, Text, Box, Image, ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
const customTheme = extendTheme({
    components: {
        Text: {
            baseStyle: {
                marginBottom: "10px"
            }
        },
    }
})

export default function Composicao() {
    return (
        <Flex direction="column">
            <Breadcrumbs />
            <Flex maxW={1320} w='100%' m='auto' direction='column'>
                <Heading my={8}>Composição</Heading>

                <ChakraProvider theme={customTheme}>
                    <Box>
                        <Heading size="md">Presidente</Heading>
                        <Text>Des. Vivaldo Pinheiro</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Vice-Presidente</Heading>
                        <Text>Desª. Maria Zeneide Bezerra</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Corregedor de Justiça</Heading>
                        <Text>Des. Dilermando Mota</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Ouvidor Geral</Heading>
                        <Text>Des. Amílcar Maia</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Diretor da Esmarn</Heading>
                        <Text>Des. Virgílio Macêdo Jr.</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Diretor da Revista do Tribunal de Justiça do RN</Heading>
                        <Text>Des. Saraiva Sobrinho</Text>
                    </Box>

                    <Heading size="md" my={4}>Plenário - Quarta-feira 8h</Heading>
                    <Box>
                        <Text>
                            Des. Amaury Moura Sobrinho
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Desª. Judite Nunes
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Claudio Santos
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Expedito Ferreira de Souza
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. João Rebouças
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Vivaldo Pinheiro
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Saraiva Sobrinho
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Amílcar Maia
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Dilermando Mota
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Virgílio Macêdo Jr
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Desª. Maria Zeneide Bezerra
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Ibanez Monteiro
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Glauber Rêgo
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Gilson Barbosa
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Cornélio Alves
                        </Text>
                    </Box>

                    <Heading size="md" my={4}>Câmara Criminal - Terça-feira 8h</Heading>
                    <Box>
                        <Text>
                            Des. Glauber Rêgo (presidente)
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Gilson Barbosa
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Saraiva Sobrinho
                        </Text>
                    </Box>

                    <Heading size="md" my={4}>Primeira Câmara Cível - Terça-feira 8h</Heading>
                    <Box>
                        <Text>
                            Des. Dilermando Mota (substituído pelo juiz convocado Ricardo Tinoco de Góes – art. 7º/RI)
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Claudio Santos
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Expedito Ferreira
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Cornélio Alves
                        </Text>
                    </Box>

                    <Heading size="md" my={4}>Segunda Câmara Cível - Terça-feira 8h</Heading>
                    <Box>
                        <Text>
                            Des. Ibanez Monteiro (presidente)
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Desª. Judite Nunes
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Virgílio Macêdo Jr
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Desª. Maria Zeneide Bezerra
                        </Text>
                    </Box>

                    <Heading size="md" my={4}>Terceira Câmara Cível - Terça-feira 8h</Heading>
                    <Box>
                        <Text>
                            Des. Amílcar Maia (presidente)
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Amaury Moura Sobrinho
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. João Rebouças
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Des. Vivaldo Pinheiro (substituído pela juíza convocada Maria Neíze Fernandes – art. 7º/RI)
                        </Text>
                    </Box>

                    <Heading size="md" my={4}>Estrutura Administrativa</Heading>

                    <Heading size="md" my={4}>Juízes Auxiliares</Heading>
                    <Box>
                        <Text>
                            João Afonso Morais Pordeus (Presidência)
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Patrícia Gondim Moreira Pereira (Presidência)
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                            Bruno Lacerda Bezerra Fernandes (Divisão de Precatórios)
                        </Text>
                    </Box>

                    <Box>
                        <Heading size="md">Secretário Geral</Heading>
                        <Text>Lindolfo Neto de Oliveira Sales</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Secretária Judiciária</Heading>
                        <Text>Walteíze Gomes Barbosa</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Secretária de Administração</Heading>
                        <Text>Maria Cecília Bussoni</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Secretário de Controle Interno</Heading>
                        <Text>Francisco Nascimento Sousa</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Secretário de Orçamento e Finanças</Heading>
                        <Text>Paulo Célio Pinto Machado</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Secretário de Tecnologia da Informação e Comunicação</Heading>
                        <Text>Gerânio Gomes da Silva</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Secretária de Gestão Estratégica</Heading>
                        <Text>Maristela Rodrigues de Queiroz Freire</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Secretária de Comunicação Social</Heading>
                        <Text>Andreia Ramos da Silva Holanda Leite</Text>
                    </Box>

                    <Box>
                        <Heading size="md">Gabinete de Segurança Institucional</Heading>
                        <Text>Cel. José Francisco Pereira Júnior</Text>
                    </Box>


                </ChakraProvider>

            </Flex>
        </Flex>
    )
}
