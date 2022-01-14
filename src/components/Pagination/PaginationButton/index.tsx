import { Button, ButtonProps } from '@chakra-ui/react';

interface PaginationButtonProps extends ButtonProps {
    label: string;
    active: boolean;
    onClickFunction: () => void;
    isDisabled?: boolean;
}

export default function PaginationButton ({ label, active, onClickFunction, isDisabled, ...attrs }:PaginationButtonProps) {
    return (
        <Button
            disabled={isDisabled}
            
            variant='outline'
            color={active? 'white' : 'tj_dark_blue'}
            bgColor={active? 'tj_dark_blue' : 'white'}
            borderColor='tj_dark_blue'
            onClick={onClickFunction} transition='color 0s'
            {...attrs}>
                {label}
            </Button>
    );
}