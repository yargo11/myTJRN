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
    },
    styles: {
        global: {
            'body, input, textarea, select, button': {
                bg: 'white',
                fontSize: {
                    'base': 'md',
                    '720p':'87.5%',
                    '1080p': '93.75%'
                },
                fontWeight: 'normal',
                button: {
                    cursor: 'pointer'
                }
            },
            a: {
                color: 'inherit',
                textDecoration: 'none'
            }
        }
    }
});