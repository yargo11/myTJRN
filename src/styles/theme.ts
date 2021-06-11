import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: 'Raleway',
        body: 'Raleway'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.900'
            }
        }
    }
})