import { Text } from "@chakra-ui/layout";

interface areaTitleProps {
    title: string;
    subtitle: string;
}

export default function AreaTitle ({title, subtitle}:areaTitleProps) {
    return (
        <>
            <Text fontSize='2.25rem' fontWeight='bold' color='#00384D' lineHeight='2.87rem'>{title}</Text>
            <Text fontSize='1.125rem' color='#555555' lineHeight='1.563rem'>{subtitle}</Text>
        </>
    );
}