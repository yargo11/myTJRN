import { Flex, Link } from "@chakra-ui/react";
import ContainerBox from "../../components/ContainerBox";
import GrayBorder from "../../components/Border/GrayBorder";
import NewsList from "../../components/NewsList";
import PageTitle from "../../components/PageTitle";

export default function noticias () {

    const list = [];

    list.push(item0);
    list.push(item1);
    list.push(item2);
    list.push(item3);
    list.push(item4);
    list.push(item5);
    list.push(item6);
    list.push(item7);

    return (
        <>
            <PageTitle
                title='Notícias'
                showTitle={true}
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus eget fringilla dui, ut varius est. Maecenas ac leo arcu. Nunc ut porta lectus. 
                Nulla sollicitudin eu nisi non dapibus. Aliquam erat volutpat. Vivamus ornare lorem vel vehicula tempor.'/>
            <ContainerBox as={Flex} h='53px' alignItems='center' justifyContent='space-between'>
                <Link textDecor='underline' _hover={{textDecor:'underline'}}>Todas</Link>
            </ContainerBox>
            <GrayBorder/>
            <ContainerBox mt='56px' mb='150px'>
                <NewsList newsList={list}/>
            </ContainerBox>
        </>
    );
}

const item0 = {id:0, date:'2019-12-28', title:'CEJAI encessa ano de 2019 com recorde de adoções internacionais', link: '#'}
const item1 = {id:1, date:'2020-01-20', title:'Comarca de Touros seleciona estagiário de pós-graduação em Direito', link: '#'}
const item2 = {id:2, date:'2020-01-17', title:'TJRN divulga edital de seleção temporária com 33 vagas para área de Tecnologia da Informação', link: '#'}
const item3 = {id:3, date:'2019-12-16', title:'Mérito Legislativo: Des. Vivaldo Pinheiro é homenageado pela ALRN', link: '#'}
const item4 = {id:4, date:'2019-12-28', title:'CEJAI encessa ano de 2019 com recorde de adoções internacionais', link: '#'}
const item5 = {id:5, date:'2020-01-20', title:'Comarca de Touros seleciona estagiário de pós-graduação em Direito', link: '#'}
const item6 = {id:6, date:'2020-01-17', title:'TJRN divulga edital de seleção temporária com 33 vagas para área de Tecnologia da Informação', link: '#'}
const item7 = {id:7, date:'2019-12-16', title:'Mérito Legislativo: Des. Vivaldo Pinheiro é homenageado pela ALRN', link: '#'}