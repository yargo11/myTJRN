import { Flex, Select } from "@chakra-ui/react";
import AreaTitle from "../AreaTitle";
import { SelectIcon } from './SelectIcon';
import ContainerBox from "../../ContainerBox";
import ServiceAndInformationCard from "./ServiceAndInformationCard";
import CardList from "../../CardList";

export default function ServiceAndInformation () {

    const TopicList = [];

    TopicList.push(item0);
    TopicList.push(item1);
    TopicList.push(item2);
    TopicList.push(item3);
    TopicList.push(item4);
    TopicList.push(item5);
    TopicList.push(item6);
    TopicList.push(item7);
    TopicList.push(item8);
    TopicList.push(item9);
    TopicList.push(item10);
    TopicList.push(item11);
    TopicList.push(item12);
    TopicList.push(item13);
    TopicList.push(item14);
    TopicList.push(item15);

    return (
        <ContainerBox py='4rem'>
            <Flex justifyContent='space-between' wrap='wrap'>
                <AreaTitle title='Informações e serviços' subtitle='Encontre informações e serviços do Poder Judiciario'/>
                <Select mt='1rem' placeholder="Seu perfil" borderColor='tj_dark_blue' icon={SelectIcon} iconSize='34' w='10rem' _hover={{ borderColor: 'tj_dark_blue'}}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
            </Flex>

            <CardList mt='2.5rem'>
                {TopicList ? TopicList.map(topic =>
                    <ServiceAndInformationCard key={topic.link} label={topic.label} description={topic.description} link={topic.link}/>
                ) : <></>}
            </CardList>
        </ContainerBox>
    );
}


const item0 = {id:0, label: 'Consultas na justiça', description: 'Conheça seus direitos, processos legais, tribunais e mais', link: '#'}
const item1 = {id:1, label: 'Produtos do Tribunal', description: 'Acórdãos, Decisões, Pareceres, Relatórios, Sentenças e mais', link: '#'}
const item2 = {id:2, label: 'Infância, Juventude e Família', description: 'Imperdiet vitae volutpat adipiscing elit tellus commodo.', link: '#'}
const item3 = {id:3, label: 'Seus direitos e a lei', description: 'Aliquet suspendisse neque vulputate sed nunc diam.', link: '#'}
const item4 = {id:4, label: 'Viagens, Transporte e Trânsito', description: 'Massa sit cursus sed sed sit libero non rhoncus.', link: '#'}
const item5 = {id:5, label: 'Crime e punição', description: 'Massa sit cursus sed sed sit libero non rhoncus.', link: '#'}
const item6 = {id:6, label: 'Mediação de conflitos e disputa', description: 'Nunc et, ac et platea ornare nunc aliquet faucibus.', link: '#'}
const item7 = {id:7, label: 'Segurança, crimes e prisões', description: 'Iaculis amet, mattis dictumst nisi, quis cursus risus mattis velit.', link: '#'}
const item8 = {id:8, label: 'Est egestas nunc', description: 'Augue donec vestibulum ultricies neque dolor scelerisque ullamcorper.', link: '#'}
const item9 = {id:9, label: 'Egestas a nunct', description: 'Commodo, condimentum mauris vel accumsan nunc non nunc.', link: '#'}
const item10 = {id:10, label: 'Produtos do Tribunal', description: 'Acórdãos, Decisões, Pareceres, Relatórios, Sentenças e mais', link: '#'}
const item11 = {id:11, label: 'Viagens, Transporte e Trânsito', description: 'Massa sit cursus sed sed sit libero non rhoncus.', link: '#'}
const item12 = {id:12, label: 'Segurança, crimes e prisões', description: 'Iaculis amet, mattis dictumst nisi, quis cursus risus mattis velit.', link: '#'}
const item13 = {id:13, label: 'Produtos do Tribunal', description: 'Acórdãos, Decisões, Pareceres, Relatórios, Sentenças e mais', link: '#'}
const item14 = {id:14, label: 'Infância, Juventude e Família', description: 'Imperdiet vitae volutpat adipiscing elit tellus commodo.', link: '#'}
const item15 = {id:15, label: 'Consultas na justiça', description: 'Conheça seus direitos, processos legais, tribunais e mais', link: '#'}