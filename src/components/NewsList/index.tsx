import { Flex, SimpleGrid } from "@chakra-ui/react";
import NewsCard, { NewsCardProps } from "./NewsCard";
import { useMediaQuery } from '@chakra-ui/react'


interface NewsListProps {
    newsList: Array<NewsCardProps>;
}

export default function NewsList ({ newsList }:NewsListProps) {

    const [isThinnerThan330] = useMediaQuery("(max-width: 661px)")
    const [isThinnerThan660] = useMediaQuery("(max-width: 991px)")
    const [isThinnerThan990] = useMediaQuery("(max-width: 1321px)")

    function getActualWidth () {
        if(isThinnerThan330) {
            return 1;
        } else if (isThinnerThan660) {
            return 2;
        } else if (isThinnerThan990) {
            return 3;
        } else {
            return 4;
        }
    }

    return (
        <Flex w='full' justifyContent='center'>
            <SimpleGrid spacing='1.5rem' columns={getActualWidth()}>
                {newsList.map(news =>
                        <NewsCard key={news.link} date={news.date} title={news.title} link={news.link}/>)}
            </SimpleGrid>
        </Flex>
    );
}