import styles from './styles.module.scss';

import { FiSearch } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';

import { useCallback, useState } from 'react';

import { Collapse } from 'react-collapse';
import TESTE from '../../tests/headertest.json';

export function Header() {
    console.log(TESTE);


    const accessibilityIds = {
        checkbox: 'accessible-marker-example1',
        button: 'accessible-marker-example2'
    };

    const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);

    const onClick = useCallback(
        () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
        [isButtonCollapseOpen]
    );

    if (typeof window !== "undefined") {
        const screenSize = window.screen.width;
    }


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
                            <button type="submit"><FiSearch size={18} /></button>
                        </form>
                    </div>
                </div>
                <hr />

                <ul className={styles.initialUlState}>
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
                {/* <div className={styles.initialCollapsedState}>
                    <button
                        aria-controls={accessibilityIds.button}
                        aria-expanded={isButtonCollapseOpen}
                        onClick={onClick}
                        type="button">
                        <FaBars />
                    </button>
                    <Collapse
                        isOpened={isButtonCollapseOpen}>
                        <div id={accessibilityIds.button} className="blob">
                            oidfspoifpos
                            </div>
                    </Collapse>
                </div> */}

            </div>
        </header>
    )
}
