import { Image, Text, Link } from "@chakra-ui/react";

export interface NewsCardProps {
    imgPath?: string;
    date: string;
    title: string;
    link: string;
}

export default function NewsCard ({imgPath, date, title, link}:NewsCardProps) {
    return (
        <Link href={link} w='19.125rem' mb='0.875rem'>
            <Image h='12.75rem' mb='0.5rem' borderRadius='0.5rem' src={imgPath ?? '/image/NewsTmpImage.png'}/>
            <Text my='0.5rem' fontSize='0.75rem' fontWeight='medium' lineHeight='1.063rem' color='#888889'>
                {date.substr(8,2) + '/' + date.substr(5,2) + '/' + date.substr(0,4)}
            </Text>
            <Text fontSize='1.125rem' fontWeight='medium' lineHeight='1.563rem' color='tj_light_blue'>{title}</Text>
        </Link>
    );
}