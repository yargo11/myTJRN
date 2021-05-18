import styles from './styles.module.scss';

import { Collapse } from 'react-collapse';
import { FaBars } from 'react-icons/fa';
import { useCallback, useState, useEffect } from 'react';

import { MenuInterface } from '../../../interfaces/menuInterface';
import { api } from '../../../../service/api';
import { MenuItem } from './MenuItem';
import MENUJSON from '../../../../test/menu.json';

export function Menu() {
    const [menuItem, setMenuItems] = useState<MenuInterface[]>([]);

    useEffect(() => {
        //api.get('/menu').then(response => console.log(response.data));
        setMenuItems(MENUJSON);
    }, []);

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

                {menuItem
                    .map(menuItemElement => (
                        <li key={menuItemElement.id}><MenuItem menuItem={menuItemElement} /></li>
                    )
                    )}
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
                    <div id={accessibilityIds.button} className="blob">
                        <ul className={styles.hiddenMenu}>
                            <li><a href="http://tjrn.jus.br/">
                                <img src="/images/Vector.svg" alt="TJRN" />
                            </a></li>
                            {menuItem
                                .map(menuItemElement => (
                                    <li key={menuItemElement.id}><MenuItem menuItem={menuItemElement} /></li>
                                )
                                )}
                        </ul>
                    </div>
                </Collapse>
            </nav>
        </>
    )
}