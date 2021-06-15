import { Button, InputProps } from "@chakra-ui/react";

interface SearchBannerButtonProps extends InputProps {
    name: string;
    definedFunction: string;
    actualFunction: string;
}

export function SearchBannerButton({name, definedFunction, actualFunction }: SearchBannerButtonProps) {
    return (
        <>
        {definedFunction === actualFunction ? 
            <Button
                type='button'
                p='12px 10px'
                h='14'
                border='none'
                fontSize='4'
                fontWeight='medium'
                bg='white'
                transition='box-shadow 0.2s'
                _hover={{
                    boxShadow: '0px 5px #ffffff, inset 0 3px #b8d272'
                }}>
                {name}
            </Button>: ''}
        </>
    );
}