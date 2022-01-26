import { Flex, Link } from '@chakra-ui/react';
import ContainerBox from '../../components/ContainerBox';
import GrayBorder from '../../components/Border/GrayBorder';
import NewsList from '../../components/NewsList';
import PageTitle from '../../components/PageTitle';
import { useState } from 'react';
import Pagination from '../../components/Pagination';
import { GetServerSideProps } from 'next';
import { NewsCardProps } from '../../components/NewsList/NewsCard';

const pageSize = 10;

interface NoticiaProps {
    newsList: Array<NewsCardProps>,
    totalPages: number
}

export default function Noticias ({newsList, totalPages}:NoticiaProps) {
    const [currentPage,  setCurrentPage] = useState(0);
    const [list, setList] = useState(newsList);

    async function changePage(value:number) {
        setCurrentPage(value);

        setList(await ((await fetch(`/api/NewsPagination/`, {
            method: 'POST',
            body: JSON.stringify({page: value, pageSize: pageSize})
        })).json()))
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
                    newsList={list}/>
                <Pagination
                    currentPage={currentPage}
                    numberOfPages={totalPages}
                    marginRange={3}
                    skipGap={5}
                    paginationRange={5}
                    breakLabel='...'
                    nextLabel='Próxima Página'
                    previousLabel='Página Anterior'
                    onClickFunction={changePage}/>
            </ContainerBox>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    let newsApiResult = await fetch(`${process.env.BACKEND_URL}noticias?page=0&size=${pageSize}`, {
        method: 'GET'
    }).then(
        response => {
            return response.json().then(
                result => {
                    return result;
                }
            ).catch(
                error => {
                    console.log(error);
                    return {content: [], totalPages: 0};
                }
            )
        }
    ).catch(
        error => {
            console.log(error);
            return {content: [], totalPages: 0};
        }
    )
  
    return {
      props: {
        newsList: newsApiResult.content,
        totalPages: newsApiResult.totalPages
      },
    }
  }