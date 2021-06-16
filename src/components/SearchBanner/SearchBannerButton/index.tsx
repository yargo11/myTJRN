import { Button, ButtonProps } from "@chakra-ui/react";

interface SearchBannerButtonProps extends ButtonProps {
    name: string;
    actualFunction: string;
}

export function SearchBannerButton({name, actualFunction, ...others }: SearchBannerButtonProps) {
    return (
        name !== actualFunction ? 
            <Button
                type='button'
                p='12px 10px'
                h='14'
                border='none'
                fontSize='md'
                fontWeight='medium'
                bg='white'
                transition='box-shadow 0.2s'
                { ...others }
                _hover={{
                    boxShadow: '0px 5px #ffffff, inset 0 3px #b8d272'
                }}>
                {name}
            </Button>: <></>
    );
}