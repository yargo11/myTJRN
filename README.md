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
	
## Deploy

	1. Através do git
		1.1 Conetar ao servidor usando ssh:
			ssh -p {porta} {usuário}@{servidor}
            
            Atualmente por padrão, o TJ utiliza porta 2022.
            O usuário nos é informado junto com o servidor quando os servidores são criados.
            
		1.2 Entrar em modo de super usuário:
			sudo su
            
		1.3 Ir até a pasta onde o projeto clonado ficará
			cd {caminho do projeto clonado}
            
		1.4 Realizar o clone ou pull
			git clone {link do projeto}
            git pull origin main
            
	2. Através de SCP
		2.1. Rodar o comando SCP
			scp -P {porta} (-r caso o que for enviado seja uma pasta) {origem} {destino}
        	
            2.1.1. Origem local e destino remoto
				Destino seria {usuário}@{servidor}:{caminho da pasta para onde serão copiados os arquivos}
            	Atualmente, só podemos passar os arquivos diretamente para a pasta "/var/www/html/"
                Ou seja, teria que ser: {usuário}@{servidor}:/var/www/html/
                Origem seria o caminho local da pasta ou do arquivo
                
			2.1.2 Origem remota e destino local
				Origem seria {usuário}@{servidor}:{caminho da pasta para onde serão copiados os arquivos}
                Destino seria o caminho local da pasta ou do arquivo
                
	3. Preparando o projeto
		ESSA PARTE SÓ SERÁ NECESSÁRIA CASO O CONTEÚDO ENVIADO AO SERVIDOR SEJA O PROJETO INTEIRO,
        pois o conteúdo realmente necessário será somente:
        
		* .next/ (contém o código mesmo da aplicação. Normalmente, esta pasta será substituída EM TODAS VERSÕES)
		* node_modules/ (contém as bibliotecas do projeto. Essa pasta só será atualizada quando houver alteração nas dependências do projeto)
    	* package.json (informa as bibliotecas do projeto. Esse arquivo deverá ser atualizado junto com a pasta node modules)
    	* public/ (contém arquivos públicos. Imagens, PDF's, etc. Deverá ser atualizado quando houver algum novo arquivo a ser disponibilizado)

		3.1. Apagar, caso haja, arquivos referentes a gerações antigas, pois ELES NÂO SERÃO ATUALIZADOS COM PULLS
    	
          3.1.1. Apague as pastas .next/, node_modules e o arquivo yarn.lock rodando os comandos:
              rm -r .next/
              rm -r node_modules/
              rm yarn lock

          3.1.2. Ou tudo em um comando só:
              rm -r .next/ node_modules/ yarn.lock
            
		3.2. Gerar novamente o que foi apagado anteriormente:

			3.2.1. Baixar novamente as dependências:
				yarn install
			3.2.2. Gerar o código de homologação/produção
				yarn build

	4. Rodando o projeto
		Atualmente, para gerênciar o projeto, estamos utilizando o pm2.
		Após subir qualquer alteração na aplicação, a mesma deverá ser reiniciada.

		4.1. Iniciar aplicação em modo de homologação/produção:
			pm2 start "yarn start -p {porta}"

		4.2. Listar aplicações:
			pm2 list

		4.3. Parar aplicação:
			pm2 stop {aplicação ou id do processo}

		4.4. Reiniciar aplicação:
			pm2 restart {aplicação}

## Criar tag
git tag -a {tag} -m “{comment}” //não criar tag com mesmo nome de branch // é importante fazer push da tag