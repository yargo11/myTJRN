import { Box, Divider, Link, Text } from '@chakra-ui/react';

interface EventListProps {
    eventList: Array<Event>
}

interface Event {
    label: string,
    type: string,
    link: string
}
export default function EventList ({ eventList }:EventListProps) {
    return (
        <Box w='full'>
            {eventList? eventList.map(event =>
                <>
                    <Link href={event.link} mb='8px'>
                        <Text fontWeight='bold' fontsize='112.5%' lineHeight='138.89%' color='tj_dark_blue'>{event.label}</Text>
                        <Text fontsize='87.5%' lineHeight='142.86%'>{event.type}</Text>
                    </Link>
                    <Divider mb='12px'/>
                </>
            )
            : <></>}
        </Box>
    );
}