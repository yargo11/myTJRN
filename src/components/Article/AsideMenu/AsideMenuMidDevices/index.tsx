import { Box, Link, Image } from "@chakra-ui/react";
import AsideMenuMidDevicesItem, { AsideMenuMidDevicesItemProps } from "./AsideMenuMidDevicesItem";

interface LeftMenuProps {
    rootLink: string,
    rootLabel: string,
    linkList: Array<AsideMenuMidDevicesItemProps>
}

export default function AsideMenuMidDevices ({ rootLabel, rootLink, linkList }:LeftMenuProps) {
    return (
        <Box>
            <Box w='full' h='3px' bgColor='#00384D'></Box>
            <Link
                href={rootLink}
                display='flex'
                fontWeight='medium'
                fontSize='112.5%'
                lineHeight='138.89%'
                color='#336699'
                alignItems='center'
                my='16px'>
                <Image
                    src='/icons/GoTo.svg'
                    transform='scaleX(-1)'
                    ml='10.5px'
                    mr='8.5px'/>
                {rootLabel}
            </Link>
            <Box w='full' h='1px' bgColor='#00384D'></Box>
            {linkList? linkList.map(link => <AsideMenuMidDevicesItem key={link.link} label={link.label} link={link.link}/>)
            : <></>}
            <Box w='full' h='1px' bgColor='#00384D' mt='16px' mb='12px'></Box>
        </Box>
    );
}


