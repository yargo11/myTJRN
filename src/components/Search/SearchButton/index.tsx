import { Button, ButtonProps } from '@chakra-ui/react';

interface SearchButtonProps extends ButtonProps {
    name: string;
    actualFunction: string;
}

export default function SearchButton ({ name, actualFunction, ...others }: SearchButtonProps) {
    return (
        <Button
                bgColor='#ffffff'
                h='3.06rem'
                p='1rem'
                m='0.25rem'
                fontFamily='Inter'
                fontSize='0.875rem'
                lineHeight='6,94px'
                borderRadius='5px 5px 0 0'
                boxShadow={actualFunction === name ?'0 10px #ffffff, 0 -3px #C9E880' : ''}
                {...others}>
            {name}
        </Button>
    );
}