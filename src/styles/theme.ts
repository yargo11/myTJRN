import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        tj_dark_blue: '#00384D',
        tj_light_blue: '#14697F',
        tj_navy_blue: '#336699',
        tj_light_gray: '#FAFBFC'
    },
    components:{
        Link:{
            baseStyle:{
                _focus: {
                    boxShadow: '0 0 0 4px #FFC000'
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
                    boxShadow: '0 0 0 4px #FFC000',
                }
            }
        },
        Input: {
            defaultProps:{
                focusBorderColor:'#FFC000',
            }
        },
        Select: {
            defaultProps:{
                focusBorderColor:'#FFC000',
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
                fontSize: { base: "10px", sm:"12px", md: "14px", lg: "16px" },
                colorAdjust:'exact'
            },
            '.no-print': {
                '@media print': {
                    display: 'none !important'
                }
            },
        }
    }
});
