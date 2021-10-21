import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";
import { Box, Text } from "@chakra-ui/react";
import ContainerBox from "../ContainerBox";
import GradientBorder from "../Border/GradientBorder";


export interface BreadCrumbProps {
    label: string;
    link: string;
};

interface PageTitleProps {
    breadCrumbArray?: Array<BreadCrumbProps>;
    title: string;
    showTitle: boolean;
    description?: string;
}

export default function PageTitle ({breadCrumbArray, description, showTitle, title}:PageTitleProps) {
    return (
        <>
            <GradientBorder />
            <Box bgColor='tj_dark_blue' color='tj_light_gray' py='16px'>
                <ContainerBox>
                    <Breadcrumb separator='>' fontWeight='normal' fontSize='87.5%' lineHeight='20px'>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Início</BreadcrumbLink>
                        </BreadcrumbItem>
                        {breadCrumbArray? breadCrumbArray.map(breadcrumb =>
                        <BreadcrumbItem key={breadcrumb.label}>
                            <BreadcrumbLink href={breadcrumb.link}>{breadcrumb.label}</BreadcrumbLink>
                        </BreadcrumbItem>) : 
                        <></>}
                        <BreadcrumbItem>
                            <BreadcrumbLink isCurrentPage>{title}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    {showTitle === true ? <Text fontWeight='bold' fontSize='225%' lineHeight='46px' mt='32px' mb='16px'>{title}</Text> : <></>}
                    {description ? <Text maxW='856px' fontWeight='normal' fontSize='112.5%' lineHeight='25px' mb='32px'>{description}</Text>:<></> }
                </ContainerBox>
            </Box>
        </>
    );
}