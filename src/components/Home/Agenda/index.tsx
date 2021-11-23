import { Box, Flex, Spacer } from '@chakra-ui/react';
import Calendar, { CalendarProps } from "../../Calendar";
import AreaTitle from "../AreaTitle";
import EventList, { Event } from './EventList';

interface AgendaProps {
    calendar: CalendarProps,
    eventList: Array<Event>
}

export default function Agenda ({calendar, eventList}:AgendaProps) {
    
    return (
        <Box>
            <AreaTitle title='Calendário' subtitle='Veja a agenda do Poder Judiciário' />
            <Flex mt='32px'>
                <Calendar weekday={calendar.weekday} monthday={calendar.monthday} month={calendar.month}/>
                <Spacer maxW='24px' minW='24px'/>
                <EventList eventList={eventList}/>
            </Flex>
        </Box>
    );
}


