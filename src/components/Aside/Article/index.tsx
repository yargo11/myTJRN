import ListenPrintSharePanel from "../../ListenPrintSharePanel";
import MidDevices from "./MidDevices";
import { Text } from "@chakra-ui/react";

export interface ArticleProps {
    rootLink: string,
    rootLabel: string,
    linkList: Array<AsideMenuMidDevicesItemProps>
    lastUpdate?: string
}

export interface AsideMenuMidDevicesItemProps {
    label: string,
    link: string
}
export default function Article ({ rootLink, rootLabel, linkList, lastUpdate }: ArticleProps) {
    const lastUpdateToView = new Date(lastUpdate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
    return (
        <>
            <MidDevices rootLink={rootLink} rootLabel={rootLabel} linkList={linkList} />
            {lastUpdate ? <Text fontSize='87.5%' lineHeight='142.86%' color='#888889' mt='12px' mb='14px'>Última atualização: {lastUpdateToView}</Text> : <></>}
            <ListenPrintSharePanel listOfContentToRead={[]} />
        </>
    );
}