import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react'
import { FaRegFilePdf } from "react-icons/fa";
import { FiDownload } from 'react-icons/fi';

interface FileInterface {
    title: string;
    anchor: string;
    description?: string;
};

export default function FilePdf({ title, anchor, description }: FileInterface) {
    return (
        <Box w='100%' h='auto' px='24px' py='17px' my='1rem'
            borderLeft='5px solid #008a9d'
            boxShadow='2px 2px 4px rgba(0, 0, 0, 0.15)'
            transition='transform 0.2s'
            _hover={{
                boxShadow: '2px 2px 4px #005763',
                transform: 'translateX(5px)'
            }}
        >
            <Flex align='center'>
                <Icon as={FaRegFilePdf} w='2rem' h='2rem' />
                <Text color='gray.900'>{title}</Text>
                <Text >{description}</Text>
            </Flex>
            <Flex align='center' mt='1rem'>
                <Link href={anchor} target="_blank"
                    bg='#008a9d'
                    color='#f1f5e4'
                    px='28px' py='9px'
                    fontWeight='600' fontSize='1rem'
                    display='flex'
                    align='center'

                    transtion='background 0.2s'
                    _hover={{
                        background: '#005763'
                    }}
                >
                    <Icon as={FiDownload} w='1.5rem' h='1.5rem' />Baixar Arquivo
                </Link>
            </Flex>
        </Box>
    );
}