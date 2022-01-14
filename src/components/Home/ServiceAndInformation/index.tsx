import { Flex, Select } from "@chakra-ui/react";
import AreaTitle from "../AreaTitle";
import { SelectIcon } from './SelectIcon';
import ContainerBox from "../../ContainerBox";
import ServiceAndInformationCard, { TopicBoxInterface } from "./ServiceAndInformationCard";
import CardList from "../../CardList";

interface ServiceAndInformationProps {
    serviceList: Array<TopicBoxInterface>
}

export default function ServiceAndInformation ({ serviceList }:ServiceAndInformationProps) {

    return (
        <ContainerBox py='64px'>
            <Flex justifyContent='space-between' wrap='wrap'>
                <AreaTitle title='Informações e serviços' subtitle='Encontre informações e serviços do Poder Judiciário'/>
                <Select mt='16px' placeholder="Seu perfil" borderColor='tj_dark_blue' icon={SelectIcon} iconSize='34' w='160px' _hover={{ borderColor: 'tj_dark_blue'}}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
            </Flex>

            <CardList mt='40px' columns={[1,2,3,4]}>
                {serviceList ? serviceList.map(service =>
                    <ServiceAndInformationCard key={service.link} label={service.label} description={service.description} link={service.link}/>
                ) : <></>}
            </CardList>
        </ContainerBox>
    );
}


