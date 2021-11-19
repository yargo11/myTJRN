import { Center, Text } from '@chakra-ui/react';

export default function Calendar () {
    return (
        <Center minW='110px' h='140px' pt='10px' flexDir='column' backgroundImage='/image/CalendarBackground.png'>
            <Text fontWeight='semibold' lineHeight='137.5%' color='white'>Ter</Text>
            <Text fontWeight='extrabold' fontSize='400%' lineHeight='116.67%'>20</Text>
            <Text fontWeight='medium' fontSize='112.5%' lineHeight='138.89%'>OUT</Text>
        </Center>
    );
}