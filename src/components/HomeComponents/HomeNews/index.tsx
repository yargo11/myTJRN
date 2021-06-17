import styles from './styles.module.scss'
import { useState, useEffect } from 'react';
import { NoticiaInterface } from '../../../interfaces/noticiaInterface';
import { NewsCard } from '../../NewsComponents/NewsCard'
import { api } from '../../../service/api';

export function HomeNews() {
    
    const [news, setNews] = useState<NoticiaInterface[]>([]);

    useEffect(() => {
        api.get('/noticias/listar').then(response => setNews(response.data)).catch(error => console.log(error));
	}, []);

    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <div className={styles.spotlightNew}>
                    <a href="#">
                        <img src="/images/image25.svg" alt="Notícia em Destaque"></img>

                        <div>
                            <p id={styles.p1}>Mérito Legislativo: Des. Vivaldo Pinheiro é homenageado pela ALRN</p>
                            <p id={styles.p2}>
                                solenidade realizada nesta segunda-feira (16) com o objetivo de reconhecer e valorizar
                                personalidades que tem atuação destacada em favor da coletividade. solenidade realizada
                                nesta segunda-feira (16) com o objetivo de reconhecer e valorizar personalidades que tem
                                atuação destacada em favor da coletividade.
                        </p>
                            <p id={styles.p3}>Segunda, 16 Dezembro 2019. </p>
                        </div>
                    </a>
                </div>

                <div className={styles.moreNews}>
                    {news ? news
                        .map(newsElement => (
                            <NewsCard key={newsElement.id} noticia={newsElement}/>
                        )
                    ) : <></>}
                </div>

                <div className={styles.filters}>
                    <ul>
                        <li><a href="">Decisões Judiciais1</a></li>
                        <li><a href="">Decisões Judiciais2</a></li>
                        <li><a href="">Decisões Judiciais3</a></li>
                        <li><a href="">Decisões Judiciais4</a></li>
                        <li>|</li>
                        <li><a href="/noticias">Todas as notícias</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}