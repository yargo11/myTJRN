import { Wrap, WrapItem } from "@chakra-ui/layout";
import NewsCard, { NewsCardProps } from "../NewsCard";

interface NewsListProps {
    newsList: Array<NewsCardProps>;
}

export default function NewsList ({ newsList }:NewsListProps) {
    return (
        <Wrap mt='2.5rem' spacing='1.5rem' justify='center'>
            {newsList.map(news =>
                <WrapItem key={news.link}>
                    <NewsCard date={news.date} title={news.title} link={news.link}/>
                </WrapItem>)}
        </Wrap>
    );
}