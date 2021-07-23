import { Cards } from '../Cards/index';
import { Heading, Flex, Box, SimpleGrid, useMediaQuery } from '@chakra-ui/react';

export function ServicesAndInformations() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    return (
        <Box maxW={1320} margin="auto">
            <Flex mb="40px" direction="column">
                <Heading as="h1" fontSize="2.25rem" fontFamily="Raleway" fontWeight="600" color="#191919"
                    m={isLargerThan768 ? '' : 'auto'}
                    mb='12px'>
                    Informações e serviços
                </Heading>
                <Heading as="h5" fontSize="1.125rem" fontFamily="Raleway" fontWeight="400" color="#191919"
                    m={isLargerThan768 ? '' : 'auto'}
                    textAlign={isLargerThan768 ? 'start' : 'center'}>
                    Encontre informações e serviços do Poder Judiciario que você precisa
                </Heading>

            </Flex>

            {/* <SimpleGrid
                columns={isLargerThan768 ? 4 : 2}
                spacingX={isLargerThan768 ? '76px' : '5px'}
                spacingY="30px"> */}
            <SimpleGrid minChildWidth="276px" spacingX="72px" spacingY="30px">
                <Cards
                    title="Consultas na Justiça"
                    image="consultasNaJustica"
                    description="Conheça seus direitos, processos legais, tribunais e mais"
                    a="#"
                />

                <Cards
                    title="Produtos do Tribunal"
                    image="produtosDoTribunal"
                    description="Acórdãos, Decisões, Pareceres, Relatórios, Sentenças e mais"
                    a="#"
                />

                <Cards
                    title="Infância, Juventude e Família"
                    image="infanciaJuventudeFamilia"
                    description="Imperdiet vitae volutpat adipiscing elit tellus commodo."
                    a="#"
                />

                <Cards
                    title="Seus direitos e a lei"
                    image="seusDireitoseaLei"
                    description="Aliquet suspendisse neque vulputate sed nunc diam."
                    a="#"
                />

                <Cards
                    title="Transporte, Viagens e Trânsito"
                    image="transporteViagensTransito"
                    description="Massa sit cursus sed sed sit libero non rhoncus."
                    a="#"
                />

                <Cards
                    title="Crime e Punição"
                    image="crimePunicao"
                    description="Nunc et, ac et platea ornare nunc aliquet faucibus."
                    a="#"
                />

                <Cards
                    title="Infância, Juventude e Família"
                    image="infanciaJuventudeFamilia"
                    description="Imperdiet vitae volutpat adipiscing elit tellus commodo."
                    a="#"
                />

                <Cards
                    title="Seus direitos e a lei"
                    image="seusDireitoseaLei"
                    description="Aliquet suspendisse neque vulputate sed nunc diam."
                    a="#"
                />

                <Cards
                    title="Segurança, crimes e prisões"
                    image="segurancaCrimesPrisoes"
                    description="Iaculis amet, mattis dictumst nisi, quis cursus risus mattis velit."
                    a="#"
                />

                <Cards
                    title="Mediação de conflitos e disputa"
                    image="mediacaoConflitosDisputas"
                    description="Nunc et, ac et platea ornare nunc aliquet faucibus."
                    a="#"
                />

                <Cards
                    title="Infância, Juventude e Família"
                    image="infanciaJuventudeFamilia"
                    description="Imperdiet vitae volutpat adipiscing elit tellus commodo."
                    a="#"
                />
            </SimpleGrid>
        </Box >
    )
}