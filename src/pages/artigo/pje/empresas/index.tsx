import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import PageTitle from '../../../../components/PageTitle';
import PageContentList from '../../../../components/Article/PageContentList';
import AreaTitle from '../../../../components/Home/AreaTitle';
import ContainerBox from '../../../../components/ContainerBox';
import Article from '../../../../components/Aside/Article';
import {
    GridItem, SimpleGrid, Spacer, useBreakpointValue, Text,
} from '@chakra-ui/react';


interface PageProps {
    title: string,
    subtitle: string,
    content: string
    lastUpdate: string
}
export default function PrimeiroGrau({ title, subtitle, content, lastUpdate }: PageProps) {

    const router = useRouter()
    const { id } = router.query

    const linkList = pjeLinks

    const breadcrumblist = [breadcrumbpje1];

    return (
        <>
            <PageTitle title='Vídeos Tutoriais e Manuais - 1º grau' breadCrumbArray={breadcrumblist} showTitle={false} />
            <ContainerBox mt='56px' sx={{ '@media print': { display: 'block' } }}>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacingX='30px'>
                    <GridItem colSpan={{ base: 2, md: 1 }}>
                        <Article rootLabel={breadcrumbpje1.label} rootLink='#' linkList={linkList} lastUpdate='' />
                    </GridItem>
                    <GridItem colSpan={2}>
                        <AreaTitle title='Vídeos Tutoriais e Manuais - 1º grau' subtitle='' />
                        {/* <PageContentList headers={pageTitles} /> */}


                        <Text fontSize='150%'>123 Viagens e Turismo LTDA</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 26669170000157
                        </Text>

                        <Text fontSize='150%'>Air Canada</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 05385049000123
                        </Text>

                        <Text fontSize='150%'>AJCRIM-STJ/PGR (Ministério Público da União)</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 26989715000374
                        </Text>

                        <Text fontSize='150%'>ALESAT COMBUSTÍVEIS S.A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 23314594000100
                        </Text>

                        <Text fontSize='150%'>ALLIANZ SAUDE S.A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 04439627000102
                        </Text>

                        <Text fontSize='150%'>ALLIANZ SEGUROS</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 61573796000166
                        </Text>

                        <Text fontSize='150%'>ALVORADA COMPANHIA SECURITIZADORA DE CREDITOS FINANCEIROS</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 03572412000194
                        </Text>

                        <Text fontSize='150%'>ALVORADA SERVIÇOS E NEGOCIOS LTDA</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 50991421000108
                        </Text>

                        <Text fontSize='150%'>AMERICAN AIRLINES INC</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 36212637000199
                        </Text>

                        <Text fontSize='150%'>ANDRE CIRILO DE O. PINHEIRO</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 02328628000146
                        </Text>

                        <Text fontSize='150%'>ARENA VIEW EMPREENDIMENTOS TURISTICOS LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 17298641000177
                        </Text>

                        <Text fontSize='150%'>ATACADAO DOS ELETRODOMESTICOS DO NORDESTE LTDA  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 70120662000180
                        </Text>

                        <Text fontSize='150%'>BANCO BRADESCARD S.A. (Banco IBI S.A.) </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 04184779000101
                        </Text>

                        <Text fontSize='150%'>BANCO BRADESCO BBI S.A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 06271464000119
                        </Text>

                        <Text fontSize='150%'>BANCO BRADESCO BERJ S.A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 33147315000115
                        </Text>

                        <Text fontSize='150%'>Banco Bradesco Financiamentos S/A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 07207996000150
                        </Text>

                        <Text fontSize='150%'>BANCO BRADESCO S.A. (Banco Bradesco e suas CONTROLADAS)</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 60746948000112
                        </Text>

                        <Text fontSize='150%'>BANCO DAYCOVAL S.A </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 62232889000190
                        </Text>

                        <Text fontSize='150%'>BANCO DO BRASIL S.A </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 00000000236802
                            Filial
                            CNPJ: 00000000558249
                            Filial
                            CNPJ: 00000000586960,
                        </Text>

                        <Text fontSize='150%'>BANCO DO NORDESTE DO BRASIL S.A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 07237373010192
                        </Text>

                        <Text fontSize='150%'>BANCO IBI S/A - BANCO MÚLTIPLO - BANCO BRADESCARD S.A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 04184779000101
                        </Text>

                        <Text fontSize='150%'>Banco Losango S.A. - Banco Multiplo </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 33254319000100
                        </Text>

                        <Text fontSize='150%'>BANCO ORIGINAL S.A </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 92894922000108
                        </Text>

                        <Text fontSize='150%'>BANCO PAN S A </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 59285411000113
                        </Text>

                        <Text fontSize='150%'>BANCO RODOBENS S.A </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 33603457000140
                        </Text>

                        <Text fontSize='150%'>BANCO TOYOTA DO BRASIL S.A </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 03215790000110
                        </Text>

                        <Text fontSize='150%'>BF PROMOTORA DE VENDAS LTDA  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 02038394000100
                            Filial
                            CNPJ: 07131760000187
                        </Text>

                        <Text fontSize='150%'>Bradesco Administradora de Consórcios Ltda </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 52568821000122
                        </Text>

                        <Text fontSize='150%'>BRADESCO CAPITALIZACAO S/A </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 33010851000174
                        </Text>

                        <Text fontSize='150%'>Banco Bradesco Leasing S/A  Arrendamento Mercantil </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 47509120000182
                        </Text>

                        <Text fontSize='150%'>BRADESCO SA CORRETORA DE TITULOS E VALORES MOBILIARIOS </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 61855045000132
                        </Text>

                        <Text fontSize='150%'>BRQUALY ADMINISTRADORA DE CONSORCIOS LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 45713971000117
                        </Text>

                        <Text fontSize='150%'>CDJ - SAÚDE - ESTADO </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 14031955000110
                        </Text>

                        <Text fontSize='150%'>CINCO V BRASIL S A  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 05212761000120
                        </Text>

                        <Text fontSize='150%'>CNF ADMINISTRADORA DE CONSORCIOS NACIONAL LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 59129403000188
                        </Text>

                        <Text fontSize='150%'>COMPANHIA DE AGUAS E ESGOTOS DO RIO GRANDE DO NORTE</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 08334385000135
                            Filiais <br />
                            CNPJ: 08334385000305
                            CNPJ: 08334385002340
                            CNPJ: 08334385004556
                        </Text>

                        <Text fontSize='150%'>COMPANIA DE AVIACION PARAGUAYA SOCIEDAD ANONIMA  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 26454308000109
                        </Text>

                        <Text fontSize='150%'>COMPANHIA SECURITIZADORA DE CRÉDITOS FINANCEIROS RUBI  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 01222069000122
                        </Text>

                        <Text fontSize='150%'>CONDOR FLUGDIENST GMBH  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 18911676000100
                        </Text>

                        <Text fontSize='150%'>CONSELHO REGIONAL DE MEDICINA VETERINARIA DO ESTADO DO RIO GRANDE DO NORTE </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 08693822000107
                        </Text>

                        <Text fontSize='150%'>CREDIVAL PARTICIPACOES, ADMINISTRACAO E ASSESSORIA LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 45003746000197
                        </Text>

                        <Text fontSize='150%'>COSERN - COMPANHIA ENERGETICA DO RIO GRANDE DO NORTE </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 08324196000181
                        </Text>

                        <Text fontSize='150%'>CREFISA SA CREDITO FINANCIAMENTO E INVESTIMENTOS </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 60779196000196
                        </Text>

                        <Text fontSize='150%'>DELTA AIR LINES INC </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 00146461000177
                        </Text>

                        <Text fontSize='150%'>DELTA VEICULOS LTDA</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 03002191000119
                        </Text>

                        <Text fontSize='150%'>EMGERN - EMPRESA GESTORA DE ATIVOS DO RIO GRANDE DO NORTE </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 09375740000187
                        </Text>

                        <Text fontSize='150%'>EXPEDIA DO BRASIL AGENCIA DE VIAGENS E TURISMO LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 61062212000198
                        </Text>

                        <Text fontSize='150%'>FUND INST DE MOLESTIAS DO APARELHO DIGESTIVO E DA NUTRI </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 09375740000187
                        </Text>

                        <Text fontSize='150%'>GFG COMERCIO DIGITAL BF LTDA. </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 11200418000169
                        </Text>

                        <Text fontSize='150%'>GOOGLE BRASIL INTERNET LTDA  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 06990590000123
                        </Text>

                        <Text fontSize='150%'>GREEN STAR PECAS E VEICULOS LTDA</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 03084709000100
                        </Text>

                        <Text fontSize='150%'>GV HOLDING SA</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 59981829000165
                        </Text>

                        <Text fontSize='150%'>HSBC BANK BRASIL S/A - BANCO MÚLTIPLO </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 01701201000189
                        </Text>

                        <Text fontSize='150%'>HSBC BANK BRASIL S/A - BANCO MÚLTIPLO </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 01701201000189
                        </Text>

                        <Text fontSize='150%'>INDUSTRIA E COMERCIO DE COSMETICOS NATURA LTDA  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 00190373000172
                        </Text>

                        <Text fontSize='150%'>JBS S/A</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 02916265000160
                        </Text>

                        <Text fontSize='150%'>KIRTON ADMINISTRACAO DE SERVICOS PARA FUNDO DE PENSAO LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 30458178000141
                        </Text>

                        <Text fontSize='150%'>KIRTON BANK S.A - BANCO MULTIPLO (BANCO HSBC BANK BRASIL S/A -BANCO MULTIPLO) </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 01701201000189
                        </Text>

                        <Text fontSize='150%'>LEITE MARTINHO ADVOGADOS</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 04884210000140
                        </Text>

                        <Text fontSize='150%'>MINISTERIO PUBLICO DO ESTADO DO RIO GRANDE DO NORTE </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 08539710000104
                        </Text>

                        <Text fontSize='150%'>NATURA BIOSPHERA FRANQUEADORA LTDA</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 15537286000116
                        </Text>

                        <Text fontSize='150%'>NATURA COMERCIAL LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 24276833000148
                        </Text>

                        <Text fontSize='150%'>NATURA COSMETICOS S A</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 71673990000177
                        </Text>

                        <Text fontSize='150%'>NATURA LOGISTICA E SERVICOS LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 56680176000196
                        </Text>

                        <Text fontSize='150%'>NORWEGIAN AIR SHUTTLE ASA  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 32098480000161
                        </Text>

                        <Text fontSize='150%'>NORWEGIAN AIR UK LIMITED </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 31924388000140
                        </Text>

                        <Text fontSize='150%'>NS2.COM INTERNET S.A. </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 09339936000116
                        </Text>

                        <Text fontSize='150%'>Pagseguro Internet Ltda  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 08561701000101
                        </Text>

                        <Text fontSize='150%'>PARTAGE ADMINISTRACAO DE SHOPPING CENTER LTDA  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 09324208000130
                        </Text>

                        <Text fontSize='150%'>PETROLEO BRASILEIRO S A PETROBRAS </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 33000167000101
                        </Text>

                        <Text fontSize='150%'>POLICIA MILITAR DO ESTADO DO RIO GRANDE DO NORTE  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 04058766000188
                        </Text>

                        <Text fontSize='150%'>PORTOBENS ADMINISTRADORA DE CONSORCIOS LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 87433413000148
                        </Text>

                        <Text fontSize='150%'>PORTO SEGURO COMPANHIA DE SEGUROS GERAIS S.A.  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 61198164000160
                        </Text>

                        <Text fontSize='150%'>PRAIAMAR EMPREENDIMENTOS TURISTICOS LTDA   </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 24367732000182
                        </Text>

                        <Text fontSize='150%'>PREVI-MOSSORÓ - INSTITUTO MUNICIPAL DE PREVIDENCIA SOCIAL DOS SERVIDORES DE MOSSORO/RN </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 14801428000148
                        </Text>

                        <Text fontSize='150%'>QATAR AIRWAYS GROUP</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 08734301000150
                        </Text>

                        <Text fontSize='150%'>QUALIMIDIA VEICULACAO E DIVULGACAO LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 07126309000171
                        </Text>

                        <Text fontSize='150%'>RODOBENS ADMINISTRADORA DE CONSORCIOS LTDA</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 51855716000101
                        </Text>

                        <Text fontSize='150%'>RODOBENS ADMINISTRADORA E CORRETORA DE SEGUROS LTDA</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 53215653000154
                        </Text>

                        <Text fontSize='150%'>RODOBENS ASSESSORIA TECNICA E GERENCIAMENTO DE RISCOS EM SEGUROS LTDA</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 04459836000100
                        </Text>

                        <Text fontSize='150%'>RODOBENS COMERCIO E LOCACAO DE VEICULOS LTDA</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 65993453000101
                        </Text>

                        <Text fontSize='150%'>RODOBENS VEICULOS COMERCIAIS CIRASA S.A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 59970624000184
                        </Text>

                        <Text fontSize='150%'>RODOBENS VEICULOS COMERCIAIS CUIABA S.A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 03005212000150
                        </Text>

                        <Text fontSize='150%'>RODOBENS VEICULOS COMERCIAIS PERNAMBUCO LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 01024914000155
                        </Text>

                        <Text fontSize='150%'>RODOBENS VEICULOS COMERCIAIS RECIFE LTDA  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 09794389000169
                        </Text>

                        <Text fontSize='150%'>RODOBENS VEICULOS COMERCIAIS SP S.A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 60812088001069
                        </Text>

                        <Text fontSize='150%'>SEARA ALIMENTOS LTDA </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 02914460011276
                        </Text>

                        <Text fontSize='150%'>SECRETARIA DE ESTADO DE TRIBUTACAO  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 24519654000194
                        </Text>

                        <Text fontSize='150%'>Seguradora Lider dos Consórcios do Seguro DPVAT S/A</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 09248608000104
                        </Text>

                        <Text fontSize='150%'>SHOPFACIL SOLUCOES EM COMERCIO ELETRONICO S.A. </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 14370342000108
                        </Text>

                        <Text fontSize='150%'>SINDICATO DOS TRABALHADORES DO SERVICO PUBLICO DA ADMINISTRACAO DIRETA DO ESTADO DO RN  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 17572030000175
                        </Text>

                        <Text fontSize='150%'>SOUTH AFRICAN AIRWAYS PROPRIETARY LIMITED </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 33896614000152
                        </Text>

                        <Text fontSize='150%'>TEMPO SERVICOS LTDA.  </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 58503129000100
                        </Text>

                        <Text fontSize='150%'>TIM S.A.</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 02421421000111
                        </Text>

                        <Text fontSize='150%'>TRIBUNAL DE CONTAS DO ESTADO DO RIO GRANDE DO NORTE (TCE/RN) </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 12978037000178
                        </Text>

                        <Text fontSize='150%'>TRIGUEIRO FONTES ADVOGADOS</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 70030457000124
                        </Text>

                        <Text fontSize='150%'>UNIMED NATAL SOCIEDADE COOPERATIVA DE TRABALHO MEDICO </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 08380701000105
                        </Text>

                        <Text fontSize='150%'>UNIVERSIDADE FEDERAL RURAL DO SEMI-ÁRIDO</Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 24529265000140
                        </Text>

                        <Text fontSize='150%'>URBANA - COMPANHIA DE SERVICOS URBANOS DE NATAL </Text>

                        <Text fontSize='100%' fontWeight='700'>
                            Matriz <br />
                            CNPJ: 08498701000104
                        </Text>



                    </GridItem>
                </SimpleGrid>
            </ContainerBox>
        </>
    );
}

const breadcrumbpje1 = { label: 'PJE', link: '#' }

const pjeLinks = [
    { label: 'Apresentação', link: '/artigo/0' },
    { label: 'Documentos', link: '/artigo/1' },
    { label: 'Comarcas Contempladas', link: '/artigo/2' },
    { label: 'Empresas/Órgãos Públicos', link: '/artigo/3' },
    { label: 'Municípios - Produradorias', link: '/artigo/4' },
    { label: 'Vídeos tutoriais e manuais - 1º Grau', link: '/artigo/pje/1grau' },
    { label: 'Vídeos tutoriais e manuais - 2º Grau', link: '/artigo/pje/2grau' },
]



