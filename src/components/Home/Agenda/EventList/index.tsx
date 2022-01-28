import { Box, SimpleGrid } from '@chakra-ui/react';
import Item from './Item';

interface EventListProps {
    eventList: Array<Event>
}

export interface Event {
    label: string,
    type: string,
    link: string
}

export default function EventList ({ eventList }:EventListProps) {
    return (
        <SimpleGrid columns={1} spacing='12px' w='full'>
            {eventList? eventList.map(event =>
                <Item key={event.link} link={event.link} label={event.label} type={event.type}/>
            )
            : <></>}
        </SimpleGrid>
    );
}