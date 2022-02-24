import { Button, ButtonProps } from '@chakra-ui/react';

interface SearchButtonProps extends ButtonProps {
    name: string;
    actualFunction: string;
}

export default function SearchButton({ name, actualFunction, ...others }: SearchButtonProps) {
    return (
        <Button
            bgColor='white'
            px='16px'
            py='24px'
            mr='4px'
            mb='4px'
            fontWeight={actualFunction === name ? '700' : '400'}
            fontSize='87.5%'
            lineHeight='121%'
            overflowWrap='break-word'
            whiteSpace='normal'
            borderRadius={actualFunction === name ? '6px 6px 0 0' : 'md'}
            boxShadow={actualFunction === name ? '0 15px #ffffff, 0 -3px #C9E880' : ''}
            _focus={{
                boxShadow: "0 10px #ffffff, 0 -3px #C9E880",
                outline: "4px solid #FFC000",
                outlineOffset: "0px"
            }}

            {...others}>
            {name}
        </Button>
    );
}