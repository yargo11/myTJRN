import { Divider, Link, Text } from '@chakra-ui/react';

interface ItemProps {
    link: string,
    label: string,
    type: string
}

export default function Item ({link, label, type}: ItemProps) {
    return (
        <>
            <Link href={link}>
                <Text fontWeight='bold' fontSize='112.5%' lineHeight='138.89%' color='tj_dark_blue'>{label}</Text>
                <Text fontSize='87.5%' lineHeight='142.86%' color='#888889'>{type}</Text>
            </Link>
            <Divider/>
        </>
    );
}