import { Button, ButtonProps } from '@chakra-ui/react';

interface SearchButtonProps extends ButtonProps {
    name: string;
    actualFunction: string;
}

export default function SearchButton ({ name, actualFunction, ...others }: SearchButtonProps) {
    return (
        <Button
                bgColor='white'
                h='3.06rem'
                p='1rem'
                mr='0.5rem'
                mb='0.5rem'
                fontWeight='normal'
                fontSize='0.875rem'
                lineHeight='1.059rem'
                overflowWrap='break-word'
                whiteSpace='normal'
                borderRadius={actualFunction === name ? '6px 6px 0 0' : 'md'}
                boxShadow={actualFunction === name ?'0 10px #ffffff, 0 -3px #C9E880' : ''}
                {...others}>
            {name}
        </Button>
    );
}