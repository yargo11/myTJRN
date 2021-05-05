import styles from './styles.module.scss';

import { FiMoreHorizontal } from 'react-icons/fi'
import { useState } from 'react';

export function SearchBanner() {
    const [type, setType] = useState('buscarNoSite');

    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <div className={styles.categoryButtons}>
                    <button
                        type="button"
                        className={type === 'buscarNoSite' ? `${styles.activeButton}` : ''}
                        onClick={() => { setType('buscarNoSite') }}>
                        Buscar no Site
                    </button>
                    <button
                        type="button"
                        className={type === 'consultaProcessual' ? `${styles.activeButton}` : ''}
                        onClick={() => { setType('consultaProcessual') }}>
                        Consulta Processual
                    </button>
                    <button
                        type="button"
                        className={type === 'pesquisaDeJurisprudencia' ? `${styles.activeButton}` : ''}
                        onClick={() => { setType('pesquisaDeJurisprudencia') }}>
                        Pesquisa de Jurisprudência
                    </button>
                    <button>...</button>
                </div>
                <div className={styles.searchBar}>
                    <div>
                        <input type="text" placeholder="Buscar no TJRN..."></input>
                        <button type="submit">PESQUISAR</button>
                    </div>
                    <div className={styles.topSearched}>
                        Mais buscados:
                        <ul>
                            <li><a href="">Precatorios</a></li>
                            <li><a href="">Consulta processual</a></li>
                            <li><a href="">Estagio</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}