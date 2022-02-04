import ListenPrintSharePanel from "../../ListenPrintSharePanel";
import MidDevices from "./MidDevices";
import { Text } from "@chakra-ui/react";
import DateSharePrintListen from "../DateSharePrintListen";

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
export default function Article({ rootLink, rootLabel, linkList, lastUpdate }: ArticleProps) {

    return (
        <>
            <MidDevices rootLink={rootLink} rootLabel={rootLabel} linkList={linkList} />
            <DateSharePrintListen lastUpdate={lastUpdate} />
        </>
    );
}