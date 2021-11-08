import { Flex, Link } from '@chakra-ui/react';
import ContainerBox from '../../components/ContainerBox';
import GrayBorder from '../../components/Border/GrayBorder';
import NewsList from '../../components/NewsList';
import PageTitle from '../../components/PageTitle';
import { useState } from 'react';
import Pagination from '../../components/Pagination';

interface News {
    id: number,
    date: string,
    title: string,
    link: string
}

export default function noticias () {

    const [list, setList] = useState<News[]>([item0, item1, item2, item3, item4, item5, item6, item7]);
    const [currentPage,  setCurrentPage] = useState(0);


    function doSomething(value:number) {
        setCurrentPage(value);
        console.log(value);
    }

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
                <NewsList
                    categoryFilterLabel='Decisões Judiciais'
                    categoryFilterDescription='Elementum pulvinar leo tincidunt molestie at ultrices morbi ornare. Nulla diam diam ut dignissim. Justo, velit nunc nunc consectetur nunc nec dui. Purus quam at amet.'
                    newsList={list}/>
                <Pagination currentPage={currentPage} numberOfPages={20} marginRange={3} skipGap={5} paginationRange={5} breakLabel='...' nextLabel='Próxima Página' previousLabel='Página Anterior' onClickFunction={doSomething} />
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