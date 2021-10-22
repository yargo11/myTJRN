import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        tj_dark_blue: '#00384D',
        tj_light_blue: '#14697F',
        tj_light_gray: '#FAFBFC'
    },
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
    fonts: {
        heading: 'Inter, Raleway',
        body: 'Inter, Raleway'
    },

    styles: {
        global: {
            body: {
                fontSize: { base: "12px", sm:"14px", md: "16px", lg: "16px" },
                'color-adjust':'exact'
            },
            '.no-print': {
                '@media print': {
                    'display': 'none !important'
                }
            }
        }
    }
});
