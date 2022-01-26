import NewsCard, { NewsCardProps } from './NewsCard';
import CardList from '../CardList';

export interface NewsListProps {
    categoryFilterLabel?: string;
    categoryFilterDescription?: string;
    newsList?: Array<NewsCardProps>;
}

export default function NewsList ({ categoryFilterLabel, categoryFilterDescription, newsList }:NewsListProps) {
    return (
        <>
            {newsList ?
                <CardList
                    categoryFilterLabel={categoryFilterLabel}
                    categoryFilterDescription={categoryFilterDescription}
                    columns={[1,2,3,4]}>
                    {newsList.map(news =>
                        <NewsCard
                            key={news.id}
                            id={news.id}
                            dataPublicacao={news.dataPublicacao}
                            titulo={news.titulo}
                            tituloUrl={news.tituloUrl}
                            urlImg={news.urlImg}/>
                    )}
                </CardList>
            : <></>}
        </>
    );
}