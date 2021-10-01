import { Link, Flex } from '@chakra-ui/react';

export default function AreaList () {
    return (
        <Flex
            h='35px'
            fontFamily='Inter'
            fontWeight='medium'
            lineHeight='1.21rem'
            marginTop='15px'
            pl='2rem'
            mx='0'>
            <Link
                href='#'
                mr='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}>Início</Link>
            <Link
                as={Link}
                href='#'
                mx='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}>Institucional</Link>
            <Link
                as={Link}
                href='#'
                mx='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}>Legislação</Link>
            <Link
                as={Link}
                href='#'
                ml='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}>Transparência</Link>
        </Flex>
    );
}