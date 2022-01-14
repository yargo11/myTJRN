import { Box, Link, Image } from "@chakra-ui/react";
import { ArticleProps } from "..";
import Item from "./Item";

export default function MidDevices ({ rootLabel, rootLink, linkList }:ArticleProps) {
    return (
        <Box display={{ base: 'none', sm: 'block' }} className='no-print'>
            <Box w='full' h='3px' bgColor='tj_dark_blue'></Box>
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
            <Box w='full' h='1px' bgColor='tj_dark_blue'></Box>
            {linkList? linkList.map(link => <Item key={link.link} label={link.label} link={link.link}/>)
            : <></>}
            <Box w='full' h='1px' bgColor='tj_dark_blue' mt='16px' mb='12px'></Box>
        </Box>
    );
}


