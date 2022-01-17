import { AspectRatio, Flex } from "@chakra-ui/react";
import GrayBorder from "../../components/Border/GrayBorder";
import CardList from "../../components/CardList";
import ContainerBox from "../../components/ContainerBox";
import ImageCard from "../../components/ImageCard";
import ListenPrintSharePanel from "../../components/ListenPrintSharePanel";
import PageTitle from "../../components/PageTitle";

export default function Plenario() {
    const desList = [des0, des1, des2, des3, des4, des5, des6, des7, des8, des9, des10, des11, des12, des13, des14]
    return (
        <>
            <PageTitle
                title='Membros do Plenário'
                description='Informações sobre o que é o poder judiciário, sua história, como se estrutura e seu funionamento etc etc etc etc etc etc etcetcetcetcetcetcetcetcetc etc'
                showTitle={true} />
            <ContainerBox as={Flex} py='18px' justifyContent='end'>
                <ListenPrintSharePanel listOfContentToRead={[]} />
            </ContainerBox>
            <GrayBorder />
            <ContainerBox mt='80px' mb='100px'>
                <CardList columns={[1, 1, 2]}>
                    {desList ? desList.map(des =>
                        <AspectRatio ratio={1}>
                            <ImageCard key={des.link} description={des.description} image={des.image} label={des.label} link={des.link} />
                        </AspectRatio>
                    ) : <></>}
                </CardList>
            </ContainerBox>
        </>
    );
}

const des0 = { label: 'Des. Vivaldo Pinheiro', description: 'Presidente', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des1 = { label: 'Desa. Maria Zeneide Bezerra', description: 'Vice-Presidente', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des2 = { label: 'Des. Dilermando Mota', description: 'Corregedor de Justiça', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des3 = { label: 'Des. Amílcar Maia', description: 'Ouvidor Geral', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des4 = { label: 'Des. Amaury Moura Sobrinho', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des5 = { label: 'Desa. Judite Nunes', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des6 = { label: 'Des. Claudio Santos', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des7 = { label: 'Des. Expedito Ferreira de Souza', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des8 = { label: 'Des. João Rebouças', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des9 = { label: 'Des. Saraiva Sobrinho', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des10 = { label: 'Des. Virgílio Macêdo Jr.', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des11 = { label: 'Des. Ibanez Monteiro', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des12 = { label: 'Des. Glauber Rêgo', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des13 = { label: 'Des. Gilson Barbosa', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }
const des14 = { label: 'Des. Cornélio Alves', description: 'Membro do Plenário', link: '#', image: '/image/Maria_Zeneide_Bezerra.png' }