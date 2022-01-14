# Front-end do portal do TJRN

[Figma do projeto](https://www.figma.com/file/FAq48zzu45PsgzBo8myhu8/Novo-Site-do-TJRN?node-id=948%3A40)

[Documentação do pm2](https://pm2.keymetrics.io/docs/usage/process-management/)

[Documentação de acessibilidade](https://docs.google.com/document/d/10xaNhYiToJ1Wb5bPsqyGyV4QcGrtdI7iSa2OLK1xCBI/edit?usp=sharing)

# Requisitos
* node 14
* yarn
* pm2
* O ambiente deve ser capaz de se comunicar com o servidor intranet afim de consumir o serviço de notícias
* Link da api de notícias: http://intranet.tjrn.jus.br/apinoticia/
* Caminho do serviço de notícias no servidor intranet: /var/www/intranet.intrajus.tjrn/web/apinoticia/

# Ambientes
Homologação: seth-macphail.intrajus.tjrn (192.168.160.203)
Produção: gray-dolson (200.23.118.50)

# Arquivos necessários
	
* .next/ (contém o código mesmo da aplicação. Normalmente, esta pasta será substituída EM TODAS VERSÕES)
* node_modules/ (contém as bibliotecas do projeto. Essa pasta só será atualizada quando houver alteração nas dependências do projeto)
* package.json (informa as bibliotecas e da versão atual do projeto. Esse arquivo deverá ser atualizado junto com a pasta node modules)
* public/ (contém arquivos públicos. Imagens, PDF's, etc. Deverá ser atualizado quando houver algum novo arquivo a ser disponibilizado)

# Acessibilidade
<details>
    <summary>Links das documentações</summary>

[SpeechSynthesis - Som](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
</details>

# Requisitos das páginas
* Obs: não precisa se preocupar com os nomes dos atributos das estruturas, apenas os tipos
<details>
    <summary>Index</summary>

## Eventos
* id - tanto faz
* label - string
* tipo - string
* link - string (pode ser só o que será usado para a busca no sistema)

## Card Notícia
* id - tanto faz
* data - preferencialmente datetime com timezone. Pode ser diferente, mas é preciso avisar para ser tratado antes. Ou string já tratada
* image - O arquivo em sí, porém preciso de algo funcionando para testar
* label - string
* link - string (pode ser só o que será usado para a busca no sistema)

## Card Serviço
* id - tanto faz
* label - string
* descricao - string
* link - string (pode ser só o que será usado para a busca no sistema)
* image - O arquivo em sí, porém preciso de algo funcionando para testar
</details>

<details>
    <summary>Listagem de notícias</summary>

## Card Notícia
* id - tanto faz
* data - preferencialmente datetime com timezone. Pode ser diferente, mas é preciso avisar para ser tratado antes. Ou string já tratada
* image - O arquivo em sí, porém preciso de algo funcionando para testar
* label - string
* link - string (pode ser só o que será usado para a busca no sistema)
</details>

<details>
    <summary>Leitura de notícia</summary>

## Notícia
* título - string
* categoria - string
* última atualização - preferencialmente datetime com timezone. Pode ser diferente, mas é preciso avisar para ser tratado antes. Ou string já tratada
* corpo - string em html. Acredito que ainda não tratei todas as tags que precisam ser tratadas. É preciso ser definido isso em algum canto
</details>

<details>
    <summary>Menu</summary>

## Menu
* título - string
* descricao - string
* lista de area de conteúdo - Array de 'Área de conteúdo'

## Área de conteúdo
* id - tanto faz
* título - string
* tipo - string
* lista de conteúdo - Array de 'Conteúdo'

## Conteúdo
* id - tanto faz
* título - string
* descricao - string. Opcional
* sigla - string. Opcional
* link - string (Caso, não seja possível haver mais de um tipo de conteúdo na mesma área, pode ser só o que será usado para a busca no sistema)
</details>

<details>
    <summary>Artigo</summary>

## Artigo
* título - string
* subtítulo - string
* corpo - string em html. Acredito que ainda não tratei todas as tags que precisam ser tratadas. É preciso ser definido isso em algum canto
* última atualização - preferencialmente datetime com timezone. Pode ser diferente, mas é preciso avisar para ser tratado antes. Ou string já tratada
* breadcrumb - Lista do tipo 'Breadcrumb' contendo o que vai ficar entre a página inicial e a atual
* aside links - Lista do tipo 'Aside link'

## Breadcrumb
* label - string
* link - string (pode ser só o que será usado para a busca no sistema)
* tipo - string. Tipo do link (Artigo, Menu, etc)

## Aside link
* label - string
* link - string (pode ser só o que será usado para a busca no sistema)
</details>

<details>
    <summary>Perfil</summary>

## Perfil
* nome - string
* biofrafia - string
* cargo - string
* descrição do cargo - string
* image - O arquivo em sí, porém preciso de algo funcionando para testar
* email - string
* telefone - string

## Breadcrumb
* label - string
* link - string (pode ser só o que será usado para a busca no sistema)
* tipo - string. Tipo do link (Artigo, Menu, etc)
</details>

<details>
    <summary>Plenário</summary>

## Lista de perfis
* label - string
* descrição - string
* link - string
* image - O arquivo em sí, porém preciso de algo funcionando para testar
</details>

<details>
    <summary>Unidade</summary>

## Unidade
* nome - string
* descrição - string
* descrição adicional - string
* image - O arquivo em sí, porém preciso de algo funcionando para testar
* endereço - string
* última atualização - preferencialmente datetime com timezone. Pode ser diferente, mas é preciso avisar para ser tratado antes. Ou string já tratada
* informações - Lista do tipo 'Informação'

## Informação
* label - string
* lista - Lista do tipo 'Detalhes'

## Detalhes
* label - string. Opcional
* value - string
</details>