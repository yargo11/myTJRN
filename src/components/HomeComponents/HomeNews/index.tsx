import styles from './styles.module.scss'

export function HomeNews() {
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
                    <div>
                        <img src="/images/image6.svg" alt="Mais Notícias" />
                        <p>Segunda, 28 Dezembro 2019 </p>
                        <p>CEJAI encessa ano de 2019 com recorde de adoções internacionais</p>
                    </div>
                    <div>
                        <img src="/images/image3.svg" alt="Mais Notícias" />
                        <p>Segunda, 20 Janeiro  2020</p>
                        <p>Comarca de Touros seleciona estagiário de pós-graduação em Direito </p>
                    </div>
                    <div>
                        <img src="/images/image4.svg" alt="Mais Notícias" />
                        <p>Sexta, 17 Janeiro 2020 </p>
                        <p>TJRN divulga edital de seleção temporária com 33 vagas para área de Tecnologia da Informação</p>
                    </div>
                    <div>
                        <img src="/images/image5.svg" alt="Mais Notícias" />
                        <p>Segunda, 16 Dezembro 2019 </p>
                        <p>Mérito Legislativo: Des. Vivaldo Pinheiro é homenageado pela ALRN</p>
                    </div>
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