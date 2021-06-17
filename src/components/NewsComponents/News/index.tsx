import { useState, useEffect } from 'react';
import { NoticiaInterface } from '../../../interfaces/noticiaInterface';
import styles from './styles.module.scss';
import { NewsCard } from '../NewsCard'
import { api } from '../../../../src/service/api';

export function News() {
    
    const [news, setNews] = useState<NoticiaInterface[]>([]);

    useEffect(() => {
        api.get('/noticias/listar').then(response => setNews(response.data)).catch(error => console.log(error));
	}, []);

    return (
        <div className={styles.Container}>
            <div className={styles.AllNews}>
                <div className={styles.NewsFeed}>
                    <h1>Notícias</h1>
                    <p>
                        Molestie elementum pulvinar leo tincidunt molestie at ultrices morbi ornare. Nulla diam diam ut
                        dignissim. Justo, velit nunc nunc consectetur nunc nec dui. Purus quam at amet a arcu amet, erat.
                    </p>
                    <p>
                        <img src="/images/icons/bell.svg" alt="Notificações" />
                        <a href="#">
                            Inscreva-se para receber atualizações desta página
                        </a>
                    </p>
                </div>
                {news ? news
                    .map(newsElement => (
                        <NewsCard key={newsElement.id} noticia={newsElement}/>
                    )
                ): <></>}
            </div>
        </div>

    )
}