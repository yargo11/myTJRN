import { Link, ListItem } from '@chakra-ui/react';
interface TopSearchLink {
    name: string;
    link: string;
}
export function TopSearchItems({name, link}: TopSearchLink) {
    return (
        <ListItem
            float='left'
            m='0px 5px'
            _notFirst={{
                _before: { content: '"/ "'}
            }}>
            <Link
                href={link}>
                {name}
            </Link>
        </ListItem>
    );
}