import ListenPrintSharePanel from "../../ListenPrintSharePanel";
import MidDevices from "./MidDevices";
import { Text } from "@chakra-ui/react";
import DateSharePrintListen from "../DateSharePrintListen";

export interface ArticleProps {
    rootLink: string,
    rootLabel: string,
    linkList: Array<AsideMenuMidDevicesItemProps>
    lastUpdate?: string,
    listOfContentToRead: Array<string>
}

export interface AsideMenuMidDevicesItemProps {
    label: string,
    link: string
}
<<<<<<< HEAD
export default function Article({ rootLink, rootLabel, linkList, lastUpdate }: ArticleProps) {

    return (
        <>
            <MidDevices rootLink={rootLink} rootLabel={rootLabel} linkList={linkList} />
            <DateSharePrintListen lastUpdate={lastUpdate} />
=======
export default function Article ({ rootLink, rootLabel, linkList, lastUpdate, listOfContentToRead }: ArticleProps) {
    const lastUpdateToView = new Date(lastUpdate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
    return (
        <>
            <MidDevices rootLink={rootLink} rootLabel={rootLabel} linkList={linkList} />
            {lastUpdate ? <Text fontSize='87.5%' lineHeight='142.86%' color='#888889' mt='12px' mb='14px'>Última atualização: {lastUpdateToView}</Text> : <></>}
            <ListenPrintSharePanel listOfContentToRead={listOfContentToRead} />
>>>>>>> novasAbas
        </>
    );
}