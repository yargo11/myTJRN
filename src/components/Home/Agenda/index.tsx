import { Box, Flex, Spacer } from '@chakra-ui/react';
import Calendar from "../../Calendar";
import AreaTitle from "../AreaTitle";
import EventList from './EventList';

export default function Agenda () {
    const eventList = [item0, item1, item2];
    return (
        <Box>
            <AreaTitle title='Calendário' subtitle='Veja a agenda do Poder Judiciário' />
            <Flex mt='32px'>
                <Calendar />
                <Spacer maxW='24px' minW='24px'/>
                <EventList eventList={eventList}/>
            </Flex>
        </Box>
    );
}


const item0 = {label: 'Sessão da Terceira Câmara Cível', type: 'Ordinária', link:'#'}
const item1 = {label: 'Sessão da Primeira Câmara Cível', type: 'Ordinária', link:'#'}
const item2 = {label: 'Sessão da Câmara Criminal', type: 'Ordinária', link:'#'}