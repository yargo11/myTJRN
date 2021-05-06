import styles from './styles.module.scss';

import { Collapse } from 'react-collapse';
import { FaBars } from 'react-icons/fa';
import { useCallback, useState } from 'react';

export function Menu() {

    const accessibilityIds = {
        checkbox: 'accessible-marker-example1',
        button: 'accessible-marker-example2'
    };

    const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);

    const onClick = useCallback(
        () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
        [isButtonCollapseOpen]
    );

    return (
        <>
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
            <nav className={styles.initialCollapsedState}>
                <button
                    aria-controls={accessibilityIds.button}
                    aria-expanded={isButtonCollapseOpen}
                    onClick={onClick}
                    type="button">
                    <FaBars />
                </button>
                <Collapse
                    isOpened={isButtonCollapseOpen}>
                    <div id={accessibilityIds.button} className={styles.hiddenMenu}>
                        <ul>
                            <li><a href="http://tjrn.jus.br/">
                                <img src="/images/Vector.svg" alt="TJRN" />
                            </a></li>
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
                </Collapse>
            </nav>
        </>
    )
}