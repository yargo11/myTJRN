import { Flex, Text } from '@chakra-ui/react';

export interface CalendarProps {
    weekday: string,
    monthday: number,
    month: string
}

export default function Calendar ({ weekday, monthday, month }: CalendarProps) {
    return (
        <Flex minW='110px' h='140px' pt='13px' alignItems='center' flexDir='column' backgroundImage='/image/CalendarBackground.png'>
            <Text fontWeight='semibold' fontSize='16px' lineHeight='22px' color='white'>{weekday}</Text>
            <Text fontWeight='extrabold' fontSize='48px' lineHeight='56px' mt='10px'>{monthday}</Text>
            <Text fontWeight='medium' fontSize='18px' lineHeight='25px' mt='5px'>{month}</Text>
        </Flex>
    );
}