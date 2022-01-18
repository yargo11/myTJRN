import parse from 'html-react-parser';
import PageTitle from '../../components/PageTitle';
import { Box, Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps } from 'next';
import ContainerBox from '../../components/ContainerBox';
import GrayBorder from '../../components//Border/GrayBorder';
import styles from './styles.module.scss';
import ListenPrintSharePanel from '../../components/ListenPrintSharePanel';

interface LerNoticiaProps {
    categoria: string;
    titulo: string;
    ultimaModificacao: string;
    corpo: string;
}

export default function Noticia({ titulo, categoria, ultimaModificacao, corpo }:LerNoticiaProps) {

    const breadcrumblist = [breadcrumb];

    /*
    useEffect(() => {
        speechSynthesis.speak(new SpeechSynthesisUtterance(corpo))
    },[])
    */
    return (
        <>
            <PageTitle title={titulo} breadCrumbArray={breadcrumblist} showTitle={false}/>
            <ContainerBox>
                <Text mt='42px' mx='10px' fontWeight='bold' fontSize='112.5%' lineHeight='133.33%'>{categoria}</Text>
                <Text mt='16px' fontWeight='bold' fontSize='300%' lineHeight='116.66%' color='tj_light_blue' maxW='1076px'>{titulo}</Text>
                
                <Flex mt='56px' mb='12px' fontSize='87.5%' color='#888889' justifyContent='space-between' flexWrap='wrap'>
                    <Text fontSize='87.5%' lineHeight='142.85%'>{ultimaModificacao}</Text>
                    <ListenPrintSharePanel listOfContentToRead={[corpo]}/>
                </Flex>
                <GrayBorder/>
                <Box mt='48px' mx='auto' mb='155px' maxW='856px'>
                    <div className={styles.Container}>
                        {parse(corpo)}
                    </div>
                </Box>
            </ContainerBox>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    //const { id } = context.query;
    //const noticia = await (await apinoticia.get('elemento/' + id)).data;
    return {
        props: {
            titulo: 'Justiça em Números 2021: TJRN fica em 2° lugar em eficiência entre os 12 tribunais de pequeno porte',
            categoria: 'PRODUTIVIDADE',
            ultimaModificacao: '13/08/2021 18h26 - Atualizado há 2 horas',
            corpo: `<p>O Tribunal de Justiça do Rio Grande do Norte alcançou o percentual máximo de 100% no Índice de Produtividade Comparada da Justiça (IPC-Jus), principal indicador criado pelo Conselho Nacional de Justiça dentro do relatório Justiça em Números 2021 (ano-base 2020), divulgado nesta terça-feira (28/9). O TJ potiguar figura na segunda posição entre os 12 Tribunais de Justiça considerados de pequeno porte, atrás do tribunal de Rondônia e a frente do Acre – os três tribunais alcançaram a marca de 100%. No levantamento de 2020, o TJRN havia alcançado percentual de 78%, o que representa uma melhora de 22 pontos percentuais no período. O TJRN foi um dos oito tribunais estaduais, de um total de 27, a alcançar 100% de eficiência. É o melhor resultado do Tribunal potiguar desde que é medido o IPC-Jus.</p>

            <p>O TJ potiguar superou seus congêneres de Sergipe, Mato Grosso do Sul, Paraíba, Amazonas, Tocantins e Piauí, entre outros. Dirigente do Poder Judiciário potiguar, o desembargador Vivaldo Pinheiro ressalta a relevância do resultado. “Trabalhamos todos os dias para isso, para avançar, produzir, ser mais eficiente, não apenas por uma satisfação pessoal de cada integrante da Justiça do Rio Grande do Norte, mas pensando sobretudo no cidadão, naquele que está na ponta, a merecer nossa atenção, na dona de casa, no paciente, no consumidor, em todos que precisam de uma Justiça mais célere e eficiente”, observa o presidente.</p>

            <p>Secretária de Gestão Estratégica do TJRN, Maristela Freire, aponta a tecnologia e ações de orientação e treinamento como fatores-chave para o sucesso do desempenho da instituição, registrado neste Justiça em Números. “O investimento em novas funcionalidades do GPS-Jus impulsionou a produtividade dos servidores. Além disso, impactou na melhoria em relação à extração dos dados”, ressalta a responsável pela área no TJ potiguar. Atividades como Gerencial Day (treinamentos nas unidades judiciais), webinários, informes através da lista de transmissão e reuniões focais com unidades nas quais foram verificados e corrigidos erros de alimentação nos sistemas que coletam os dados dos processos também contribuíram para o aperfeiçoamento no desempenho.</p>

            <p>O método utilizado pelo CNJ para calcular o IPC-Jus considera o que foi produzido a partir dos recursos ou insumos disponíveis para cada tribunal. A respeito dos insumos, o índice agrega informações de litigiosidade — número de processos que tramitaram no período (excluídos os processos suspensos, sobrestados, em arquivo provisório e de execuções fiscais e penais), dados sobre recursos humanos (magistrados(as), servidores(as) efetivos(as), comissionados(as) e ingressados(as) por meio de requisição ou cessão) e sobre recursos financeiros (despesa total da Justiça, excluídas as despesas com inativos e com projetos de construção e obras). O índice avalia também a quantidade de processos baixados, excluídos os processos de execuções fiscais e penais.</p>
            
            <h2>Busca pela eficiência e redução de despesas</h2>
            <p>De acordo com o CNJ, a obtenção de eficiência de 100% não significa que um tribunal não precise melhorar, mas que a instituição foi capaz de baixar mais processos, quando comparado com os demais, com recursos similares.</p>

            <p>Ao analisar apenas a área judiciária, por instância, os dados apontam que o 1º grau da Justiça potiguar alcançou percentual de 92% no IPC-Jus, enquanto o 2º grau obteve a marca de 88%.</p>

            <p>O Tribunal de Justiça do Rio Grande do Norte figura como o terceiro maior dentre os 12 considerados de pequeno porte e apresentou nova redução de despesas, que caíram de R$ 962.845.551 em 2019 para R$ 901.181.131 em 2020, redução de R$ 61,66 milhões em um ano.</p>
            <p>O relatório aponta que em 2020 a Justiça potiguar registrou 256.756 casos novos  (foram 275.997 novos processos em 2019) ao mesmo tempo em que conseguiu reduzir seu acervo: 461.428 processos pendentes de julgamento contra 499.105 em 2019.</p>
            <p>Mais uma vez, o TJRN avançou na melhoria de sua taxa de congestionamento, a qual indica a capacidade do Tribunal em dar vazão aos processos em determinado período. Quanto menor o percentual, melhor o desempenho do Tribunal. A taxa bruta caiu de 61,97% em 2019 para 59,4% em 2020, enquanto que a taxa líquida caiu de 61,50% para 57,8%.</p>
            <p>Segundo o levantamento, em termos de recursos humanos, são 250 magistrados e magistradas e 4.061 servidores e servidoras.</p>
            
            <h2>Expectativa e realizações</h2>
            <p>O IPC-Jus calcula ainda quanto o tribunal deveria ter baixado em número de processos para que, em 2020, pudesse alcançar a eficiência máxima. Também aqui o TJRN bateu todas as metas para alcançar o percentual de 100% no IPC-Jus.</p>
            <p>O TJRN teve o quinto melhor resultado no Índice de Produtividade dos Servidores (IPS), alcançando a marca de 128 processos baixados por servidor da área judiciária. Para alcançar 100% no IPC-Jus, a meta era de 111 processos baixados por servidor. Na primeira instância, o IPS foi de 131 processos baixados por servidor da área judiciária, enquanto que na segunda instância o número chegou a 105 processos baixados por servidor do tribunal.</p>
            <p>Já em relação ao Índice de Produtividade dos Magistrados (IPM), o TJRN também figura em quinto entre os 12 de pequeno porte, com 1.271 processos baixados por magistrado, atingindo o número estimado para a alcançar a máxima eficiência. Na primeira instância, o IPM foi de 1.231 processos baixados por magistrado, enquanto na segunda instância o número chegou a 1.894 processos baixados por magistrado da Corte de Justiça.</p>
            <p>Por fim, o alcance de 58% na taxa de congestionamento líquida também correspondeu à expectativa do cálculo do IPC-Jus.</p>`
        },
    }
}

const breadcrumb = {label: 'Notícias', link: '/noticias'}