import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";
import { Box, Text } from "@chakra-ui/layout";
import ContainerBox from "../ContainerBox";
import GradientBorder from "../GradientBorder";


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
            <Box bgColor='tj_dark_blue' color='tj_light_gray' py='1rem'>
                <ContainerBox>
                    <Breadcrumb separator='>' fontWeight='normal' fontSize='0.875rem' lineHeight='1.25rem'>
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
                    {showTitle === true ? <Text fontWeight='bold' fontSize='2.25rem' lineHeight='2.875rem' mt='2rem' mb='1rem'>{title}</Text> : <></>}
                    {description ? <Text fontWeight='normal' fontSize='1.125rem' lineHeight='1.563rem' mb='2rem'>{description}</Text>:<></> }
                </ContainerBox>
            </Box>
        </>
    );
}