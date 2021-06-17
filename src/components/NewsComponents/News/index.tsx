import { useState, useEffect } from 'react';
import { Noticia } from '../../../interfaces/noticia';
import styles from './styles.module.scss';
import moment from 'moment';

import TESTE from '../../../../test/newsIndexTest.json';

export function News() {
    const [news, setNews] = useState<Noticia[]>([]);

    useEffect(() => {
		setNews(TESTE);
	}, []);

    return (
        <div className={styles.Container}>
            <div className={styles.AllNews}>
                <div className={styles.NewsFeed}>
                    <h1>Notítcias</h1>
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
                {news
                    .map(newsElement => (
                        <a href="#">
                        <div className={styles.NewsCards}>
                            <img src={newsElement.caminhoImagemDoTitulo} alt="Notícia 4" />
                            <span>{new Date(newsElement.publicacao).toLocaleString()}</span>
                            <p>{newsElement.titulo}</p>
                        </div>
                    </a>
                    )
                )}
            </div>
        </div>

    )
}