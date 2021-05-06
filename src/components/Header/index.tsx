import styles from './styles.module.scss';

import { FiSearch } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';

import { useCallback, useState } from 'react';

import { Collapse } from 'react-collapse';
import { Menu } from './Menu';

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
                            <button type="submit"><FiSearch size={18} /></button>
                        </form>
                    </div>
                </div>
                <hr />


            </div>
            <Menu />
        </header>
    )
}
