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
            <Image w='full' mb='8px' borderRadius='8px' src={imgPath ?? '/image/NewsTmpImage.png'}/>
            <Text my='8px' fontSize='75%' fontWeight='medium' lineHeight='141.66%' color='#888889'>
                {date.substr(8,2) + '/' + date.substr(5,2) + '/' + date.substr(0,4)}
            </Text>
            <Text fontSize='112.5%' fontWeight='medium' lineHeight='138.88%' color='tj_light_blue'>{title}</Text>
        </Link>
    );
}