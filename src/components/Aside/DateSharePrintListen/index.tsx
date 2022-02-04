import ListenPrintSharePanel from "../../ListenPrintSharePanel";
import { Text } from "@chakra-ui/react";

export interface DateSharePrintListenProps {
    lastUpdate?: string
}

export interface AsideMenuMidDevicesItemProps {
    label: string,
    link: string
}
export default function DateSharePrintListen({ lastUpdate }: DateSharePrintListenProps) {
    const lastUpdateToView = new Date(lastUpdate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
    return (
        <>
            {lastUpdate ? <Text fontSize='87.5%' lineHeight='142.86%' color='#888889' mt='12px' mb='14px'>Última atualização: {lastUpdateToView}</Text> : <></>}
            <ListenPrintSharePanel listOfContentToRead={[]} />
        </>
    );
}