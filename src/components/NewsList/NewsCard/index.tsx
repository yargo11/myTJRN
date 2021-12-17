import { Image, Text, Link } from '@chakra-ui/react';

export interface NewsCardProps {
    imgPath?: string;
    date: string;
    title: string;
    link: string;
}

export default function NewsCard ({imgPath, date, title, link}:NewsCardProps) {
    return (
        <Link href={link} w='full' mb='14px'>
            <Image w='full' borderRadius='8px' src={imgPath ?? '/image/NewsTmpImage.png'}/>
            <Text mt='16px' mb='8px' fontSize='75%' fontWeight='medium' lineHeight='141.66%' color='#888889'>
                {date.substring(8) + '/' + date.substring(5,7) + '/' + date.substring(0,4)}
            </Text>
            <Text fontSize='112.5%' fontWeight='medium' lineHeight='138.88%' color='tj_light_blue'>{title}</Text>
        </Link>
    );
}