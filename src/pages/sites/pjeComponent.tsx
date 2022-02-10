const pageTitle = 'Processo Judicial Eletrônico - PJe'
const pageSubTitle = 'Na adoção uma criança ou adolescente é acolhido por uma família, passando a ser filho ou filha na sua integralidade.'

const basicInfo = {
    coordenacao: 'FATIMA MARIA COSTA SOARES DE LIMA',
    contato: 'Av. duqe de caxias, 151, 3 andar, ribeira, natal rn',
    email: 'secretariageral@jtnr.jus.br',
    telefone: '+55 84 3673-9216'
}


const linksInfo = [
    { label: "Início", link: "/pje/0" },
    { label: "PJe - Primeiro grau", link: "/pje/1" },
    { label: "PJe - Segundo grau", link: "/pje/2" },
    { label: "Documentos", link: "/pje/empresas" },
  ]
  
  const subMenu = [
    { label: "Sobre o PJe", link: "/pje/10" },
    { label: "Pje - Primeiro Grau", link: "/pje/11" },
    { label: "Pje - Segundo Grau", link: "/pje/12" },
    { label: "Documentos", link: "/pje/13" },
    { label: "Municípios e Procuradorias", link: "/pje/14" },
    { label: "Comarcas Contempladas", link: "/pje/15" },
    { label: "Empresas e Órgãos públicos", link: "/pje/16" },
    { label: "Perguntas Frequentes", link: "/pje/0" },
    { label: "Tabelas Processuais Unificadas", link: "https://www.cnj.jus.br/sgt/consulta_publica_classes.php" },
    { label: "Registro de Indisponibilidade", link: "https://apps.tjrn.jus.br/siri/f/public/consultarIndisponibilidade/index.xhtml" },
    { label: "Cadastro de Pessoa Jurídica SisCadPJ", link: "https://siscadpj.tjrn.jus.br/" },
    { label: "Cadastro de Serviços de Informática - Agile", link: "https://agile.tjrn.jus.br/" },
  ]
  
const lastUpdate = '2021-12-03T14:38:51-0300'

const warnings = [{
    warning: 'O cadastro dos advogados no PJe deverá ser feito diretamente ao entrar no sistema, via certificado digital.',
},
{ warning: 'A habilitação do segundo advogado, de qualquer parte, tem que ser solicitada ao Juizado e/ou Vara em que o processo tramite.' },
{ warning: 'Em conformidade com a Portaria n° 392/2014-TJ, informoamos que os processos que estão em fase de Cumprimento de Sentença devem ser cadastrados no PJe, utilizando a classe CUMPRIMENTO DE SENTENÇA.' }
]

const introInfo = {
    about: `O PJe tem como premissa básica ofertar um sistema de informação "capaz de permitir a prática de atos processuais pelos magistrados, servidores e demais participantes da relação processual diretamente no sistema, assim como o acompanhamento desse processo judicial, independentemente de o processo tramitar na Justiça Federal, na Justiça dos Estados, na Justiça Militar dos Estados e na Justiça do Trabalho".
    Entretanto, a adoção do PJe vai mais longe e se apresenta como uma ferramenta robusta, fundamentada em requisitos de segurança e interoperabilidade, que proporcionará aos tribunais grande racionalização de gastos com aquisição e manutenção de softwares, podendo direcionar parte dos recursos financeiros para suas atividades finalísticas.
    Assim, é possível constatar a dimensão do Sistema Processo Judicial Eletrônico (PJe) – projeto do Conselho Nacional de Justiça (CNJ) – e sua importância para o Poder Judiciário brasileiro.
    A partir do dia 16 de maio de 2013, o Tribunal de Justiça do Rio Grande do Norte (TJRN) passou a fazer uso do sistema PJe – Processo Judicial Eletrônico. O projeto piloto do PJe foi implantado nos 1º e 2º Juizados Especiais Cíveis da Zona Sul em Natal.`,
    projects: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nulla, egestas ut nisi quis, dictum consequat lorem. Suspendisse nulla diam, viverra cursus arcu quis, varius laoreet risus. Sed sed fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam gravida tellus ac vulputate tempus. Morbi nec auctor tortor. Maecenas placerat felis eget quam maximus pharetra. Nam viverra ultricies ex at elementum. Aenean non cursus dui. Suspendisse egestas viverra.',
    specialized_rods: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nulla, egestas ut nisi quis, dictum consequat lorem. Suspendisse nulla diam, viverra cursus arcu quis, varius laoreet risus. Sed sed fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam gravida tellus ac vulputate tempus. Morbi nec auctor tortor. Maecenas placerat felis eget quam maximus pharetra. Nam viverra ultricies ex at elementum. Aenean non cursus dui. Suspendisse egestas viverra.'
}

const noticias = [
    { title: 'CEJAI encessa ano de 2019 com recorde de adoções internacionais', link: '#', lastUpdated: '08 de Fevereiro de 2022' },
    { title: 'Comarca de Touros seleciona estagiário de pós-graduação em Direito ', link: '#', lastUpdated: '08 de Fevereiro de 2022' },
    { title: 'TJRN divulga edital de seleção temporária com 33 vagas para área de Tecnologia da Informação', link: '#', lastUpdated: '08 de Fevereiro de 2022' },
]

export const pje = {
    title: pageTitle,
    subTitle: pageSubTitle,
    linksInfo: linksInfo,
    subMenu: subMenu,
    intro: introInfo,
    asideInfo: basicInfo,
    lastUpdate: lastUpdate,
    wanings: warnings,
    noticias: noticias,
}
