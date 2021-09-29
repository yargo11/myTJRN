import { Box, Button, HStack, Link } from "@chakra-ui/react";
import ContainerBox from "../../ContainerBox";
import AreaTitle from "../AreaTitle";
import NewsList from "../../NewsList";

export default function News () {

    const list = [];

    list.push(item0);
    list.push(item1);
    list.push(item2);
    list.push(item3);

    return (
        <Box w='full' py='3.938rem' bgColor='tj_light_gray'>
            <ContainerBox>
                <AreaTitle title='Notícias' subtitle='Saiba o que acontece no Poder Judiciário'/>
                <NewsList newsList={list}/>

                <HStack mt='3.125rem' justify='end' wrap='wrap' spacing='2rem'>
                    <Link fontWeight='normal' lineHeight='1.21' textDecor='underline' _hover={{textDecor:'underline'}}>Decisões Judiciais</Link>
                    <Link fontWeight='normal' lineHeight='1.21' textDecor='underline' _hover={{textDecor:'underline'}}>Seleções</Link>
                    <Link fontWeight='normal' lineHeight='1.21' textDecor='underline' _hover={{textDecor:'underline'}}>Notas à Imprensa</Link>
                    <Link fontWeight='normal' lineHeight='1.21' textDecor='underline' _hover={{textDecor:'underline'}}>Mulher</Link>
                    <Button
                        as={Link}
                        h='2.375rem'
                        w='10.438rem'
                        href='/noticias'
                        fontWeight='semibold'
                        lineHeight='1.375rem'
                        color='white'
                        bgColor='tj_dark_blue'
                        transition='filter 0.2s'
                        _hover={{ filter: 'brightness(120%)' }}
                        _active={{ filter: 'brightness(75%)' }}>Todas as notícias</Button>
                </HStack>
            </ContainerBox>
        </Box>
    );
}


const item0 = {id:0, date:'2019-12-28', title:'CEJAI encessa ano de 2019 com recorde de adoções internacionais', link: '#'}
const item1 = {id:1, date:'2020-01-20', title:'Comarca de Touros seleciona estagiário de pós-graduação em Direito', link: '#'}
const item2 = {id:2, date:'2020-01-17', title:'TJRN divulga edital de seleção temporária com 33 vagas para área de Tecnologia da Informação', link: '#'}
const item3 = {id:3, date:'2019-12-16', title:'Mérito Legislativo: Des. Vivaldo Pinheiro é homenageado pela ALRN', link: '#'}