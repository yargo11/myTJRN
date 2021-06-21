import { Link, ListItem } from "@chakra-ui/react"

interface FooterListItemProps {
    label: string;
    link: string;
}

export function FooterListItems ({ label, link }: FooterListItemProps) {
    return (
        <ListItem
            as={Link}
            href={link}
            fontWeight='semibold'
            m='10px 0'
            color='#191919'
            transition='color 0.2s'
            _hover={{
                color: 'cyan.500',
                textDecoration: 'none'
            }}>
            {label}
        </ListItem>
    );

}