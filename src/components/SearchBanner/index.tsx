import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { SearchBannerButton } from './SearchBannerButton';

export function SearchBanner() {
    const [type, setType] = useState('buscarNoSite');

    return (
        <Flex h='80' w='100%' maxW='1120px' m='auto' p='73px 0px' bgImage="url('/images/background.svg')">
            <SearchBannerButton
                actualFunction={type}
                name='Buscar no Site'
                definedFunction='buscarNoSite' />
        </Flex>
    )
}