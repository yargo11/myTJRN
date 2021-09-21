import { Flex, Text } from "@chakra-ui/layout";
import AreaTitle from "../AreaTitle";

export default function Pjrn () {
    return (
        <Flex h='32.375rem' w='full' maxW='82.5rem' px='0.75rem' justifyContent='center' flexDirection='column' m='auto'>
            <AreaTitle title='Conheça o PJRN' subtitle='Veja como funciona o Poder Judiciário'/>
            <Flex w='full' border='1px' alignItems='center' justifyContent='space-between' borderColor='#D8DBDF'>
                <Text fontSize='1.5rem' fontWeight='bold' textDecoration='underline' lineHeight='2.5rem'>Presidência e Vice-presidência</Text>
            </Flex>
        </Flex>
    );
}