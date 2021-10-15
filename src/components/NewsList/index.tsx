import NewsCard, { NewsCardProps } from "./NewsCard";
import CardList from "../CardList";
import getColumnNumber from "../CardList/DefaultColumnNumber";

interface NewsListProps {
    newsList: Array<NewsCardProps>;
}

export default function NewsList ({ newsList }:NewsListProps) {
    return (
        <CardList columnNumber={getColumnNumber}>
            {newsList ? newsList.map(news =>
                <NewsCard key={news.link} date={news.date} title={news.title} link={news.link}/>
            ) : <></>}
        </CardList>
    );
}