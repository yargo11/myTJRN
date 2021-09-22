import { Box, Text } from "@chakra-ui/react";
import PagesList from "./PagesList";
import FuncionalityList from './FuncionalityList'

//Precisa melhorar responsividade
export default function Header() {
    return (
        <Box
            maxW='82.5rem'
            minH='11.1rem'
            mx='auto'
            pt='4rem'
            px='0.75rem'>
            <Text
                float='left'
                fontFamily='Inter'
                fontWeight='bold'
                fontSize='2.5rem'
                color='#14697F'
                lineHeight='55px'
                as='a'
                href='/'>TJRN.jus.br</Text>
                <PagesList />
                <FuncionalityList />
        </Box>
    );
}