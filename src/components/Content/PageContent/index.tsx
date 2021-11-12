import { Divider, Flex, Link, Text } from '@chakra-ui/react';

interface PageContentProps {
    headers: Array<string>;
}



export default function PageContent ({ headers }:PageContentProps) {
    console.log(headers);
    return (
        <>
            <Flex flexDir='column'>
                <Text>Nesta Página</Text>
                <Divider />
                {headers.map((header, index) => 
                    <Link href={`#${index}`}>{header}</Link>
                )}
            </Flex>
        </>
    );
}