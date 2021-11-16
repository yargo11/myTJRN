import { Flex } from '@chakra-ui/react';
import AccordionDisplay from './AccordionDisplay';
import GridDisplay from './GridDisplay';

export interface PageContentProps {
    headers: Array<string>;
}

export default function PageContentList ({ headers }:PageContentProps) {
    return (
        <>
            {headers? <Flex flexDir='column' bgColor='#FAFBFC' borderRadius='6px' p='24px'>
                <GridDisplay headers={headers} />
                <AccordionDisplay headers={headers} />
            </Flex> : <></>}
        </>
    );
}