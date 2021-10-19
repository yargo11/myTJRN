# Front-end do portal do TJRN

[Figma do projeto](https://www.figma.com/file/FAq48zzu45PsgzBo8myhu8/Novo-Site-do-TJRN?node-id=948%3A40)

[Documentação do pm2](https://pm2.keymetrics.io/docs/usage/process-management/)

## Requisitos
* node 14
* yarn
* pm2
* O ambiente deve ser capaz de se comunicar com o servidor intranet afim de consumir o serviço de notícias
* Link da api de notícias: http://intranet.tjrn.jus.br/apinoticia/
* Caminho do serviço de notícias no servidor intranet: /var/www/intranet.intrajus.tjrn/web/apinoticia/

## Ambientes
Homologação: seth-macphail.intrajus.tjrn (192.168.160.203)
Produção: gray-dolson (200.23.118.50)
	
## Deploy

1. Apontar o repositório local para a main
2. Atualizar a main
3. Fazer merge das atualizações
4. Gerar o que irá para o servidor (yarn build)
5. Mandar as atualizações para o servidor
6. Mandar as atualizações para a pasta correta dentro do servidor
7. Reiniciar a aplicação
8. Gerar a tag
9. Fazer push na main
10. Extra: fazer push na branch canaissetic

## Arquivos necessários
	
* .next/ (contém o código mesmo da aplicação. Normalmente, esta pasta será substituída EM TODAS VERSÕES)
* node_modules/ (contém as bibliotecas do projeto. Essa pasta só será atualizada quando houver alteração nas dependências do projeto)
* package.json (informa as bibliotecas e da versão atual do projeto. Esse arquivo deverá ser atualizado junto com a pasta node modules)
* public/ (contém arquivos públicos. Imagens, PDF's, etc. Deverá ser atualizado quando houver algum novo arquivo a ser disponibilizado)