import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    components:{
        Link:{
            baseStyle:{
                _focus: {
                    boxShadow: '0'
                },
                _hover: {
                    textDecoration: "none",
                    boxShadow: '0'
                }
            }
        },
        Button: {
            baseStyle: {
                _focus: {
                    boxShadow: '0'
                }
            }
        }
    },
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
