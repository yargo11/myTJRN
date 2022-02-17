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

const introInfo = {
    about: `A atuação da Vice-Presidência, com sua competência e atribuições administrativas, inicialmente, está embasada nos arts. 5º, 28, XXIII, "b" e art. 30 do Regimento Interno do Tribunal de Justiça do Rio Grande do Norte.

    No âmbito jurisdicional, cumpre ao Vice-Presidente decidir sobre a admissibilidade de recurso extraordinário para o Supremo Tribunal Federal e do recurso especial para o Superior Tribunal de Justiça, bem como seus respectivos incidentes, além de baixar portarias, além de propor resoluções acerca da matéria delegada, conforme Portaria nº 1.614/2015-TJRN, de 29 de setembro de 2015.
    
    Ao Vice-Presidente do Tribunal de Justiça também cabe presidir a Comissão de Segurança Institucional, conforme dispõe a Resolução nº 013/2012-TJRN, de 04 de junho de 2012.
    
    O Conselho da Magistratura do Tribunal de Justiça também tem como membro nato o Vice-Presidente, nos termos do art. 21 da Lei de Organização Judiciária (Lei Complementar nº 165, de 28 de abril de 1999).
    
    Mais ainda, cumpre ao Vice-Presidente colaborar com a elaboração da proposta orçamentária e das leis financeiras no âmbito do Poder Judiciário, de acordo com o art. 28, XV, do Regimento Interno do Tribunal de Justiça do Rio Grande do Norte.
    
    Outras tarefas atinentes à direção do Tribunal de Justiça do Rio Grande do Norte também são cometidas ao Vice-Presidente em função de eventual substituição do Presidente, em caso de férias, licenças, ausências e impedimentos daquele.
    
    Com o advento da Resolução nº 235, de 13 de julho de 2016, do Conselho Nacional de Justiça (CNJ), que dispõe sobre a padronização de procedimentos administrativos decorrentes de julgamentos de repercussão geral, de casos repetitivos e de incidente de assunção de competência previstos no Código de Processo Civil de 2015, o órgão Pleno do Tribunal de Justiça instituiu, em substituição ao Núcleo de Repercussão Geral e Recursos Repetitivos (NURER), o Núcleo de Gerenciamento de Precedentes (NUGEP).
    
    Por meio da Resolução nº 24, de 07 de junho de 2017, o Tribunal de Justiça detalhou as atividades do NUGEP, que é vinculado à Vice-Presidência, incumbindo ao Vice-Presidente presidir a Comissão Gestora desse Núcleo.
    
    A Secretaria de Tecnologia da Informação e Comunicação (SETIC) do Tribunal de Justiça está incumbida de desenvolver as ferramentas tecnológicas para que o web service do NUGEP esteja integrado e possa veicular as informações constantes do respectivo banco de dados.`,
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
    noticias: noticias,
}
