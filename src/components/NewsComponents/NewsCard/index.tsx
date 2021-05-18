import styles from './styles.module.scss';
import { NoticiaInterface } from '../../../interfaces/noticiaInterface';

interface NoticiaProps {
    noticia: NoticiaInterface;
}

export function NewsCard(props: NoticiaProps) {
	return (
        <a href="#">
            <div className={styles.NewsCards}>
                {/*<img src="../../../../public/images/image4.svg" alt="Notícia" />*/}
                <span>{new Date(props.noticia.dataPublicacao).toLocaleString()}</span>
                <p>{props.noticia.titulo}</p>
            </div>
        </a>
	);
}