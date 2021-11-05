import { Spacer } from '@chakra-ui/react';
import PaginationButton from "../PaginationButton";

interface PaginationButtonArrayProps {
    numbers: number[];
    currentPage: number;
    onClickFunction: (selectedPage:number) => void;
}

export default function PaginationButtonArray ({ numbers, currentPage, onClickFunction }:PaginationButtonArrayProps) {
    return (
        <>
        {numbers.map(buttonValue =>
            <>
                <PaginationButton
                    active={currentPage + 1 === buttonValue}
                    key={buttonValue}
                    label={buttonValue.toString()}
                    onClickFunction={() => onClickFunction(buttonValue - 1)}/>
                    <Spacer maxW='4px'/>
            </>)}
        </>
    );
}