import NewsCard, { NewsCardProps } from './NewsCard';
import CardList from '../CardList';

interface NewsListProps {
    categoryFilterLabel?: string;
    categoryFilterDescription?: string;
    newsList: Array<NewsCardProps>;
}

export default function NewsList ({ categoryFilterLabel, categoryFilterDescription, newsList }:NewsListProps) {
    return (
        <CardList categoryFilterLabel={categoryFilterLabel} categoryFilterDescription={categoryFilterDescription} columns={[1,2,3,4]}>
            {newsList ? newsList.map(news =>
                <NewsCard
                    key={news.id}
                    id={news.id}
                    dataPublicacao={news.dataPublicacao}
                    titulo={news.titulo}
                    tituloUrl={news.tituloUrl}
                    urlImg={news.urlImg}/>
            ) : <></>}
        </CardList>
    );
}