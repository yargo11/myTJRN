import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        white: '#fff',
        gray: {
            '100': '#e1e1e6',
            '200': '#cbcbcf',
            '800': '#29292e',
            '900': '#121214'
        },
        cyan: {
            '500': '#61C5EC'
        },
        yellow: {
            '500': '#eba417'
        }
    },
    fonts: {
        heading: 'Inter, Raleway',
        body: 'Inter, Raleway'
    }
});