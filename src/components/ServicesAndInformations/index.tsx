import styles from './styles.module.scss';

import { Cards } from '../Cards/index';

export function ServicesAndInformations() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <p id="title">Informações e serviços</p>
                <p id="legend">Encontre informações e serviços do Poder Judiciario que você precisa</p>
            </div>
            <div className={styles.informationsAndServices}>

                <Cards
                    title="Consultas na Justiça"
                    image="consultasNaJustica"
                    description="Conheça seus direitos, processos legais, tribunais e mais"
                    a="#"
                />

                <Cards
                    title="Produtos do Tribunal"
                    image="produtosDoTribunal"
                    description="Acórdãos, Decisões, Pareceres, Relatórios, Sentenças e mais"
                    a="#"
                />

                <Cards
                    title="Infância, Juventude e Família"
                    image="infanciaJuventudeFamilia"
                    description="Imperdiet vitae volutpat adipiscing elit tellus commodo."
                    a="#"
                />

                <Cards
                    title="Seus direitos e a lei"
                    image="seusDireitoseaLei"
                    description="Aliquet suspendisse neque vulputate sed nunc diam."
                    a="#"
                />
                <Cards
                    title="Transporte, Viagens e Trânsito"
                    image="transporteViagensTransito"
                    description="Massa sit cursus sed sed sit libero non rhoncus."
                    a="#"
                />

                <Cards
                    title="Crime e Punição"
                    image="crimePunicao"
                    description="Nunc et, ac et platea ornare nunc aliquet faucibus."
                    a="#"
                />

                <Cards
                    title="Infância, Juventude e Família"
                    image="infanciaJuventudeFamilia"
                    description="Imperdiet vitae volutpat adipiscing elit tellus commodo."
                    a="#"
                />

                <Cards
                    title="Seus direitos e a lei"
                    image="seusDireitoseaLei"
                    description="Aliquet suspendisse neque vulputate sed nunc diam."
                    a="#"
                />
                <Cards
                    title="Segurança, crimes e prisões"
                    image="segurancaCrimesPrisoes"
                    description="Iaculis amet, mattis dictumst nisi, quis cursus risus mattis velit."
                    a="#"
                />

                <Cards
                    title="Mediação de conflitos e disputa"
                    image="mediacaoConflitosDisputas"
                    description="Nunc et, ac et platea ornare nunc aliquet faucibus."
                    a="#"
                />

                <Cards
                    title="Infância, Juventude e Família"
                    image="infanciaJuventudeFamilia"
                    description="Imperdiet vitae volutpat adipiscing elit tellus commodo."
                    a="#"
                />

            </div>
        </div>
    )
}