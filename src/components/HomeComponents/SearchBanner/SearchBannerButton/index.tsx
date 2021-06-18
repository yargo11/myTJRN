import { Button, ButtonProps } from "@chakra-ui/react";

interface SearchBannerButtonProps extends ButtonProps {
    name: string;
    actualFunction: string;
}

export function SearchBannerButton({name, actualFunction, ...others }: SearchBannerButtonProps) {
    return (
        <Button
            type='button'
            p='12px 10px'
            h='53px'
            borderRadius='0'
            fontSize='md'
            fontWeight='medium'
            overflowWrap='break-word'
            whiteSpace='normal'
            bg='white'
            transition='box-shadow 0.2s'
            boxShadow={actualFunction === name ? '0 5px #ffffff, inset 0 3px #82a81a' : ''}
            { ...others }
            _hover={{
                boxShadow: '0px 5px #ffffff, inset 0 3px #b8d272'
            }}>
                {name}
        </Button>
    );
}