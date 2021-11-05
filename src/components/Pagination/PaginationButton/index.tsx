import { Button } from '@chakra-ui/react';

interface PaginationButtonProps {
    label: string;
    active: boolean;
    display?: string;
    onClickFunction: () => void;
    isDisabled?: boolean;
}

export default function PaginationButton ({ label, active, display, onClickFunction, isDisabled }:PaginationButtonProps) {
    return (
        <Button disabled={isDisabled} display={display} variant='outline' color={active? 'white' : 'tj_dark_blue'} bgColor={active? 'tj_dark_blue' : 'white'} borderColor='tj_dark_blue' onClick={onClickFunction} transition='color 0s'>{label}</Button>
    );
}