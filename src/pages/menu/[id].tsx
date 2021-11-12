import { Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import GrayBorder from "../../components/Border/GrayBorder";
import ContainerBox from "../../components/ContainerBox";
import ListenPrintSharePanel from "../../components/ListenPrintSharePanel";
import AreaTitle from "../../components/menu/AreaTitle";
import Content, { AreaType } from "../../components/menu/Content";
import PageTitle from "../../components/PageTitle";

interface MenuProps {
    titulo: string,
    descricao: string;
    listaDeConteudo: Array<AreaType>;
}

export default function Menu ({ listaDeConteudo, descricao, titulo }:MenuProps) {

    return (
        <>
            <PageTitle
                title={titulo}
                showTitle={true}
                description={descricao}/>
            <ContainerBox as={Flex} h='53px' justifyContent='end'>
                <ListenPrintSharePanel listOfContentToRead={[]}/>
            </ContainerBox>
            <GrayBorder/>
            <ContainerBox>
                {listaDeConteudo?
                    listaDeConteudo.map(content =>
                    <>
                        <AreaTitle title={content.titulo}/>
                        <Content tipo={content.tipo} listadeconteudo={content.listadeconteudo}/>
                    </>)
                   :<></>}     
            </ContainerBox>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    //const { id } = context.query;
    //const noticia = await (await apinoticia.get('elemento/' + id)).data;
    return {
        props: {
            titulo: 'Infância, Juventude e Família',
            descricao: 'Obtenha informações sobre questões familiares e outras ocasiões em que precisar de ajuda',
            listaDeConteudo: [{
                titulo: 'Principais informações',
                tipo: 'linkCards',
                listadeconteudo: [{
                    titulo: 'Adoção',
                    link: '#',
                    descricao: 'Se você deseja adotar, apadrinhar ou dar seu filho para adoção é importante saber algumas coisas sobre o processo legal'
                }, {
                    titulo: 'Separação e divórcio',
                    link: '#',
                    descricao: 'Peça ajuda para se separar ou se divorciar quando seu casamento, união civil ou relacionamento de fato terminar'
                }, {
                    titulo: 'Propriedade de relacionamento',
                    link: '#',
                    descricao: 'Obtenha ajuda para fazer acordos sobre propriedades a qualquer momento durante seu relacionamento, ou quando o relacionamento terminar ou o outro parceiro morrer'
                }, {
                    titulo: 'Violência familiar',
                    link: '#',
                    descricao: 'Informações sobre como obter ajuda e/ou proteção legal do Tribunal se você tiver ou tiver tido uma família ou relacionamento pessoal próximo com uma pessoa violenta'
                }, {
                    titulo: 'Trabalho infantil',
                    link: '#',
                    descricao: 'Informações sobre a idade mínima para as crianças podem trabalhar, restrições ao emprego infantil'
                }, {
                    titulo: 'Mudar de sexo na sua certidão de nascimento',
                    link: '#',
                    descricao: 'Como mudar o sexo na sua certidão de nascimento'
                }, {
                    titulo: 'Poderes para tomar decisões pelos outros',
                    link: '#',
                    descricao: 'Como você pode ajudar pessoas que podem não ser totalmente capazes de tomar decisões por si mesmas'
                }, {
                    titulo: 'Tratamento ordenado pelo tribunal',
                    link: '#',
                    descricao: 'O tribunal pode ordenar tratamento para problemas de saúde mental, abuso de álcool e outras substâncias ou outros problemas de dependência'
                }, {
                    titulo: 'Contestar um testamento',
                    link: '#',
                    descricao: 'Descubra os motivos pelos quais você pode contestar um testamento e como fazê-lo no Tribunal de Família'
                }, {
                    titulo: 'Ordens de restrição civil para evitar casos sem mérito',
                    link: '#',
                    descricao: 'O Tribunal pode fazer uma ordem para restringir uma pessoa de iniciar ou continuar a trazer ações civis que são injustificadas ou sem mérito'
                }, {
                    titulo: 'Obtenha consentimento para se casar se tiver 16 ou 17 anos',
                    link: '#',
                    descricao: 'Se você tem 16 ou 17 anos e deseja se casar, ou ter uma união civil com alguém, você precisará do consentimento de um juiz do Tribunal'
                }]
            }, {
                titulo: 'Envolvidos',
                tipo: 'links',
                listadeconteudo: [{
                    titulo: 'Vara de Família',
                    link: '#'
                }, {
                    titulo: 'Vara da Infância e Juventude',
                    link: '#',
                }, {
                    titulo: 'Coordenadoria da Infância e da Juventude ',
                    link: '#',
                }]
            }, {
                titulo: 'Todas os sistemas e ferramentas',
                tipo: 'applicationCards',
                listadeconteudo: [{
                    sigla: 'PJE',
                    titulo: 'Processo Judicial eletrônico',
                    descricao: 'Proposição da prática de atos jurídicos e acompanhamento do trâmite processual de forma padronizada',
                    link: '#'
                }, {
                    sigla: 'PROJUD',
                    titulo: 'Processos dos Juizados Especiais',
                    descricao: 'Proposição da prática de atos jurídicos e acompanhamento do trâmite processual de forma padronizada',
                    link: '#'
                }, {
                    sigla: 'SEEU',
                    titulo: 'Sistema Eletrônico de Execução Unificado',
                    descricao: 'Proposição da prática de atos jurídicos e acompanhamento do trâmite processual de forma padronizada',
                    link: '#'
                }, {
                    sigla: 'SIGAJUS',
                    titulo: 'Sistema Integrado de Gestão Administrativa da Justiça',
                    descricao: 'Proposição da prática de atos jurídicos e acompanhamento do trâmite processual de forma padronizada',
                    link: '#'
                }, {
                    sigla: 'SAJ',
                    titulo: 'Sistema de Automação da Justiça',
                    descricao: 'Proposição da prática de atos jurídicos e acompanhamento do trâmite processual de forma padronizada',
                    link: '#'
                }, {
                    sigla: 'SERASAJUD',
                    titulo: 'Tramitação de Ofícios entre Tribunais e Serasa Experian',
                    descricao: 'Proposição da prática de atos jurídicos e acompanhamento do trâmite processual de forma padronizada',
                    link: '#'
                }, {
                    sigla: 'INFOJUD',
                    titulo: 'Sistema de Informações ao Judiciário',
                    descricao: 'Proposição da prática de atos jurídicos e acompanhamento do trâmite processual de forma padronizada',
                    link: '#'
                }, {
                    sigla: 'RENAJUD',
                    titulo: 'Restrições Judiciais Sobre Veículos Automotores',
                    descricao: 'Proposição da prática de atos jurídicos e acompanhamento do trâmite processual de forma padronizada',
                    link: '#'
                }, {
                    sigla: 'CEP',
                    titulo: 'Controle Estatístico de Prisões',
                    descricao: 'Proposição da prática de atos jurídicos e acompanhamento do trâmite processual de forma padronizada',
                    link: '#'
                }]
            }]
        },
    }
}