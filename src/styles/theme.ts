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
    fonts: {
        heading: 'Inter, Raleway',
        body: 'Inter, Raleway'
    }
});
