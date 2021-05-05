import styles from './styles.module.scss';

interface CardProps {
    title: string;
    image: string;
    description: string;
    a: string;
}

export function Cards({ title, image, description, a }: CardProps) {
    return (
        <a href="#">
            <div className={styles.cards}>

                <img src={`/images/${image}.svg`} alt="Seus Direitos e a Lei" />

                <p>{title}</p>

                <text>
                    {description}
                </text>

            </div>
        </a>
    )
}