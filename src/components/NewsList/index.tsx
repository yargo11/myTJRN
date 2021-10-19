import NewsCard, { NewsCardProps } from "./NewsCard";
import CardList from "../CardList";

interface NewsListProps {
    newsList: Array<NewsCardProps>;
}

export default function NewsList ({ newsList }:NewsListProps) {
    return (
        <CardList>
            {newsList ? newsList.map(news =>
                <NewsCard key={news.link} date={news.date} title={news.title} link={news.link}/>
            ) : <></>}
        </CardList>
    );
}