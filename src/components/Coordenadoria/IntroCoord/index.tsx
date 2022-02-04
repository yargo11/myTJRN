import { Divider, Flex, Text } from "@chakra-ui/react";
import DateSharePrintListen from "../../Aside/DateSharePrintListen";


interface CoordenadoriaProps {
    coordenacao: string,
    contato: string,
    email: string,
    telefone: string,
    lastUpdate: string,
}

export default function Coordenadoria({ coordenacao, contato, email, telefone, lastUpdate }: CoordenadoriaProps) {
    const lastUpdateToView = new Date(lastUpdate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
    return (
        <Flex direction='column' maxW='307px' w='100%'>
            <Text mb='1rem' fontSize='150%' color='#000' fontWeight='700'>Coordenação</Text>
            <Text mb='1.5rem' fontSize='112.5%' color='#00384D' fontWeight='500'>{coordenacao}</Text>
            <Text mb='1rem' fontSize='150%' color='#000' fontWeight='700'>Contato</Text>
            <Text mb='1.5rem' fontSize='112.5%' color='#333333' fontWeight='400'>{contato}</Text>
            <Text fontSize='112.5%' color='#000' fontWeight='700'>Email:</Text>
            <Text mb='1.5rem' fontSize='112.5%' color='#333333' fontWeight='400'>{email}</Text>
            <Text fontSize='112.5%' color='#000' fontWeight='700'>Telefone:</Text>
            <Text mb='3rem' fontSize='112.5%' color='#333333' fontWeight='400'>{telefone}</Text>
            <Divider borderWidth='1px' borderColor='#00384D' mb='12px' />
            <DateSharePrintListen lastUpdate={lastUpdate} />
        </Flex>
    )
}