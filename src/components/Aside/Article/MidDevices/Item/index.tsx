import { Link } from "@chakra-ui/react";
import {useRouter} from 'next/router';
import { AsideMenuMidDevicesItemProps } from "../..";

export default function Item ({ label, link }: AsideMenuMidDevicesItemProps) {
    const router = useRouter();
    const { asPath } = router; //asPath,route, try with one of them, if the actual does not work

    return (
        <Link
            display='block'
            href={link}
            fontWeight={link === asPath? 'bold' : 'medium'}
            color={link === asPath? 'tj_dark_blue' : 'tj_navy_blue'}
            fontSize='112.5%'
            lineHeight='138.89%'
            mt='16px'
            >{label}</Link>
    );
}