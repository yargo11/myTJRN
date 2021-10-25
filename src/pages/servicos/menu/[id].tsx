import { Flex } from "@chakra-ui/react";
import GrayBorder from "../../../components/Border/GrayBorder";
import ContainerBox from "../../../components/ContainerBox";
import ListenPrintSharePanel from "../../../components/ListenPrintSharePanel";
import PageTitle from "../../../components/PageTitle";
import AreaTitle from "../../../components/Servicos/menu/AreaTitle";

export default function menuServico () {

    return (
        <>
            <PageTitle
                title='Infância, Juventude e Família'
                showTitle={true}
                description='Obtenha informações sobre questões familiares e outras ocasiões em que precisar de ajuda'/>
            <ContainerBox as={Flex} h='53px' justifyContent='end'>
                <ListenPrintSharePanel listOfContentToRead={[]}/>
            </ContainerBox>
            <GrayBorder/>
            <ContainerBox>
                <AreaTitle title='Principais informações'/>
            </ContainerBox>
        </>
    );
}