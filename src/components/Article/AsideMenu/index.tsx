import ListenPrintSharePanel from "../../ListenPrintSharePanel";
import AsideMenuMidDevices from "./AsideMenuMidDevices";

export interface LeftMenuProps {
    rootLink: string,
    rootLabel: string,
    linkList: Array<AsideMenuMidDevicesItemProps>
}

export interface AsideMenuMidDevicesItemProps {
    label: string,
    link: string
}
export default function AsideMenu ({ rootLink, rootLabel, linkList }:LeftMenuProps) {
    return (
        <>
            <AsideMenuMidDevices rootLink={rootLink} rootLabel={rootLabel} linkList={linkList} />
            <ListenPrintSharePanel listOfContentToRead={[]} />
        </>
    );
}