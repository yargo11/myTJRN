import styles from './styles.module.scss';

import { FiSearch } from 'react-icons/fi';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div>
                    <div>
                        <a href="http://tjrn.jus.br/">
                            <img src="/images/Vector.svg" alt="TJRN" />
                        </a>
                        {/* <div>
                            <span>
                                Tribunal de Justiça
                            </span>
                            <span>
                                Rio Grande do Norte
                            <hr />
                            </span>
                        </div> */}
                    </div>
                    <div>
                        <form>
                            <input type="text" placeholder="Buscar em todo site, processos, jurisprudência..."></input>
                            <button type="submit"><FiSearch size={18}/></button>
                        </form>
                    </div>
                </div>
                <hr />
                <ul>
                    <li><a href="">Ínicio</a></li>
                    <li><a href="">Institucional</a></li>
                    <li><a href="">Legislação</a></li>
                    <li><a href="">Judicial</a></li>
                    <li><a href="">Administrativo</a></li>
                    <li><a href="">Precatórios</a></li>
                    <li><a href="">Planejamento</a></li>
                    <li><a href="">TIC</a></li>
                    <li><a href="">Comunicação</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </div>
        </header>
    )
}