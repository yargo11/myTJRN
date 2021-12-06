import ListenPrintSharePanel from "../../ListenPrintSharePanel";
import MidDevices from "./MidDevices";

export interface ArticleProps {
    rootLink: string,
    rootLabel: string,
    linkList: Array<AsideMenuMidDevicesItemProps>
}

export interface AsideMenuMidDevicesItemProps {
    label: string,
    link: string
}
export default function Article ({ rootLink, rootLabel, linkList }: ArticleProps) {
    return (
        <>
            <MidDevices rootLink={rootLink} rootLabel={rootLabel} linkList={linkList} />
            <ListenPrintSharePanel listOfContentToRead={[]} />
        </>
    );
}