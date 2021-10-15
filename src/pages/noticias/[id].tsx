import parse from 'html-react-parser';
import PageTitle from '../../components/PageTitle';
import { Box, Flex, Text, Image, Button, Divider } from "@chakra-ui/react";
import { GetServerSideProps } from 'next';
import ContainerBox from '../../components/ContainerBox';
import GrayBorder from '../../components/GrayBorder';

interface LerNoticiaProps {
    categoria: string;
    titulo: string;
    ultimaModificacao: string;
    corpo: string;
}

export default function lerNoticia({ titulo, categoria, ultimaModificacao, corpo }:LerNoticiaProps) {
    const breadcrumblist = [];

    breadcrumblist.push(breadcrumb);

    return (
        <>
            <PageTitle title={titulo} breadCrumbArray={breadcrumblist} showTitle={false}/>
            <ContainerBox>
                <Text mt='2.625rem' mx='0.625rem' fontWeight='bold' fontSize='1.125rem' lineHeight='1.5rem'>{categoria}</Text>
                <Text mt='1rem' fontWeight='bold' fontSize='3rem' lineHeight='3.5rem' color='tj_light_blue'>{titulo}</Text>
                
                <Flex mt='3.5rem' mb='0.75rem' fontSize='0.875rem' color='#888889' justifyContent='space-between'>
                    <Text lineHeight='1.25rem'>{ultimaModificacao}</Text>
                    <Flex lineHeight='1.059rem'>
                        <Button fontSize='0.875rem' fontWeight='normal' variant='link' rightIcon={<Image src='/icons/Share.svg'/>}>
                            Compartilhar
                        </Button>
                        <GrayBorder orientation='vertical' mx='0.5rem'/>
                        <Button fontSize='0.875rem' fontWeight='normal' variant='link' rightIcon={<Image src='/icons/Print.svg'/>}>
                            Imprimir
                        </Button>
                        <GrayBorder orientation='vertical' mx='0.5rem'/>
                        <Button fontSize='0.875rem' fontWeight='normal' variant='link' rightIcon={<Image src='/icons/Listen.svg'/>}>
                            Ouvir
                        </Button>
                    </Flex>
                </Flex>
                <GrayBorder/>
                <Box mt='3rem' mx='auto' mb='9.688rem' maxW='67.25rem'>
                    {parse(corpo)}
                </Box>
            </ContainerBox>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    //const { id } = context.query;
    //const noticia = await (await apinoticia.get('elemento/' + id)).data;
    return {
        props: {
            titulo: 'Justiça em Números 2021: TJRN fica em 2° lugar em eficiência entre os 12 tribunais de pequeno porte',
            categoria: 'PRODUTIVIDADE',
            ultimaModificacao: '13/08/2021 18h26 - Atualizado há 2 horas',
            corpo: `<p>O Tribunal de Justiça do Rio Grande do Norte alcançou o percentual máximo de 100% no Índice de Produtividade Comparada da Justiça (IPC-Jus), principal indicador criado pelo Conselho Nacional de Justiça dentro do relatório Justiça em Números 2021 (ano-base 2020), divulgado nesta terça-feira (28/9). O TJ potiguar figura na segunda posição entre os 12 Tribunais de Justiça considerados de pequeno porte, atrás do tribunal de Rondônia e a frente do Acre – os três tribunais alcançaram a marca de 100%. No levantamento de 2020, o TJRN havia alcançado percentual de 78%, o que representa uma melhora de 22 pontos percentuais no período. O TJRN foi um dos oito tribunais estaduais, de um total de 27, a alcançar 100% de eficiência. É o melhor resultado do Tribunal potiguar desde que é medido o IPC-Jus.
            O TJ potiguar superou seus congêneres de Sergipe, Mato Grosso do Sul, Paraíba, Amazonas, Tocantins e Piauí, entre outros. Dirigente do Poder Judiciário potiguar, o desembargador Vivaldo Pinheiro ressalta a relevância do resultado. “Trabalhamos todos os dias para isso, para avançar, produzir, ser mais eficiente, não apenas por uma satisfação pessoal de cada integrante da Justiça do Rio Grande do Norte, mas pensando sobretudo no cidadão, naquele que está na ponta, a merecer nossa atenção, na dona de casa, no paciente, no consumidor, em todos que precisam de uma Justiça mais célere e eficiente”, observa o presidente.
            Secretária de Gestão Estratégica do TJRN, Maristela Freire, aponta a tecnologia e ações de orientação e treinamento como fatores-chave para o sucesso do desempenho da instituição, registrado neste Justiça em Números. “O investimento em novas funcionalidades do GPS-Jus impulsionou a produtividade dos servidores. Além disso, impactou na melhoria em relação à extração dos dados”, ressalta a responsável pela área no TJ potiguar. Atividades como Gerencial Day (treinamentos nas unidades judiciais), webinários, informes através da lista de transmissão e reuniões focais com unidades nas quais foram verificados e corrigidos erros de alimentação nos sistemas que coletam os dados dos processos também contribuíram para o aperfeiçoamento no desempenho.
            O método utilizado pelo CNJ para calcular o IPC-Jus considera o que foi produzido a partir dos recursos ou insumos disponíveis para cada tribunal. A respeito dos insumos, o índice agrega informações de litigiosidade — número de processos que tramitaram no período (excluídos os processos suspensos, sobrestados, em arquivo provisório e de execuções fiscais e penais), dados sobre recursos humanos (magistrados(as), servidores(as) efetivos(as), comissionados(as) e ingressados(as) por meio de requisição ou cessão) e sobre recursos financeiros (despesa total da Justiça, excluídas as despesas com inativos e com projetos de construção e obras). O índice avalia também a quantidade de processos baixados, excluídos os processos de execuções fiscais e penais.
            Busca pela eficiência e redução de despesas
            De acordo com o CNJ, a obtenção de eficiência de 100% não significa que um tribunal não precise melhorar, mas que a instituição foi capaz de baixar mais processos, quando comparado com os demais, com recursos similares.
            Ao analisar apenas a área judiciária, por instância, os dados apontam que o 1º grau da Justiça potiguar alcançou percentual de 92% no IPC-Jus, enquanto o 2º grau obteve a marca de 88%.
            O Tribunal de Justiça do Rio Grande do Norte figura como o terceiro maior dentre os 12 considerados de pequeno porte e apresentou nova redução de despesas, que caíram de R$ 962.845.551 em 2019 para R$ 901.181.131 em 2020, redução de R$ 61,66 milhões em um ano.
            O relatório aponta que em 2020 a Justiça potiguar registrou 256.756 casos novos  (foram 275.997 novos processos em 2019) ao mesmo tempo em que conseguiu reduzir seu acervo: 461.428 processos pendentes de julgamento contra 499.105 em 2019.
            Mais uma vez, o TJRN avançou na melhoria de sua taxa de congestionamento, a qual indica a capacidade do Tribunal em dar vazão aos processos em determinado período. Quanto menor o percentual, melhor o desempenho do Tribunal. A taxa bruta caiu de 61,97% em 2019 para 59,4% em 2020, enquanto que a taxa líquida caiu de 61,50% para 57,8%.
            Segundo o levantamento, em termos de recursos humanos, são 250 magistrados e magistradas e 4.061 servidores e servidoras.
            Expectativa e realizações
            O IPC-Jus calcula ainda quanto o tribunal deveria ter baixado em número de processos para que, em 2020, pudesse alcançar a eficiência máxima. Também aqui o TJRN bateu todas as metas para alcançar o percentual de 100% no IPC-Jus.
            O TJRN teve o quinto melhor resultado no Índice de Produtividade dos Servidores (IPS), alcançando a marca de 128 processos baixados por servidor da área judiciária. Para alcançar 100% no IPC-Jus, a meta era de 111 processos baixados por servidor. Na primeira instância, o IPS foi de 131 processos baixados por servidor da área judiciária, enquanto que na segunda instância o número chegou a 105 processos baixados por servidor do tribunal.
            Já em relação ao Índice de Produtividade dos Magistrados (IPM), o TJRN também figura em quinto entre os 12 de pequeno porte, com 1.271 processos baixados por magistrado, atingindo o número estimado para a alcançar a máxima eficiência. Na primeira instância, o IPM foi de 1.231 processos baixados por magistrado, enquanto na segunda instância o número chegou a 1.894 processos baixados por magistrado da Corte de Justiça.
            Por fim, o alcance de 58% na taxa de congestionamento líquida também correspondeu à expectativa do cálculo do IPC-Jus.
            Justiça brasileira: evolução em várias áreas
            Durante a apresentação técnica do Justiça em Números pelos juízes auxiliares e diretores do CNJ, foi anunciado que o levantamento abrange 14.853 unidades judiciárias brasileiras. A Justiça estadual, representada por 27 cortes, representa 64% dessas unidades, ou seja, 9.606 varas e juizados especiais, instalados em 2.672 comarcas. Com isso, é possível observar que 89,7% da população brasileira reside na sede da comarca. A maior parte desses dados foi anunciada pela diretora executiva do Departamento de Pesquisas Judiciárias do CNJ, Gabriela Moreira de Azevedo Soares.
            A redução nos custos é um dos pontos mais relevantes do mais novo relatório. A despesa com pessoal caiu 3,3% de 2019 para 2020. O custo anual por habitante é de R$ 475,51, ou seja, 5% inferior a 2019. Também diminuiu a quantidade de casos novos, 14% menor de um ano para o outro. O esforço de magistrados e juízes em diversas unidades significou queda de 2,6% no acervo processual da Justiça brasileira. 
            Em 2020, outro dado interessante surge no Justiça em Números. No ano, ocorreu a maior redução de acervo de processos pendentes, desde o início da série história, em 2009. A diminuição é de 2 milhões de processos a menos, nesta categoria. 
            Cada vez mais virtualizado, o Poder Judiciário brasileiro registra adesão de 96,9% ao processo eletrônico. Ano passado, a Justiça recebeu 21,8 milhões de processos eletrônicos, em todo o país. 
            Processos referentes ao meio ambiente alcançaram crescimento de 17,9% de 2019 para 2020. E outra categoria nova a registrar dado expressivo é de processos na área dos direitos humanos, cuja quantidade anual atingiu aumento de 342%.</p>`
        },
    }
}


const breadcrumb = {label: 'Notícias', link: '/noticias'}

