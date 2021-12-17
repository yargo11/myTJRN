import { Button, ButtonProps } from '@chakra-ui/react';

interface SearchButtonProps extends ButtonProps {
    name: string;
    actualFunction: string;
}

export default function SearchButton ({ name, actualFunction, ...others }: SearchButtonProps) {
    return (
        <Button
            bgColor='white'
            px='16px'
            py='24px'
            mr='8px'
            mb='8px'
            fontWeight='normal'
            fontSize='87.5%'
            lineHeight='121%'
            overflowWrap='break-word'
            whiteSpace='normal'
            borderRadius={actualFunction === name ? '6px 6px 0 0' : 'md'}
            boxShadow={actualFunction === name ?'0 10px #ffffff, 0 -3px #C9E880' : ''}
            {...others}>
                {name}
        </Button>
    );
}