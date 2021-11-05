import { Center, Spacer, useBreakpointValue } from '@chakra-ui/react'
import PaginationButton from "./PaginationButton";
import PaginationButtonArray from './PaginationButtonArray';

interface PaginationProps {
    currentPage: number;
    numberOfPages: number;
    paginationRange: number;
    marginRange: number;
    skipGap: number;
    breakLabel: string;
    nextLabel: string;
    previousLabel: string;
    onClickFunction: (selectedPage:number) => void;
}

/*skipGap não pode ser maior que paginationRange*/

export default function Pagination ({ currentPage, numberOfPages, paginationRange, marginRange, skipGap, breakLabel, nextLabel, previousLabel, onClickFunction }:PaginationProps) {

    const realRange = Math.min(paginationRange, numberOfPages);

    const endingRange = numberOfPages - paginationRange;

    const endingMargin = numberOfPages - marginRange;

    const minGap = currentPage - skipGap > 0 ? currentPage - skipGap : 0;

    const maxGap = currentPage + skipGap < numberOfPages - 1 ? currentPage + skipGap : numberOfPages - 1;

    const initialRangeButtons = currentPage < realRange - 1 ? Array.from({length: realRange}, (_,k:number) => k + 1) : Array.from({length: marginRange}, (_,k:number) => k + 1);

    const midRangeButtons = currentPage >= realRange - 1 && currentPage <= endingRange ? Array.from({length: paginationRange}, (_,k:number) => k + currentPage + 1 - Math.floor(paginationRange/2)) : [];

    const finalRangeButtons = currentPage > endingRange && currentPage >= realRange - 1 ? Array.from({length: paginationRange}, (_,k:number) => k + endingRange + 1) : Array.from({length: marginRange}, (_,k:number) => k + endingMargin + 1);

    const fullDisplay = useBreakpointValue({ base: 'none', lg: 'inline-flex' })

    const mdDisplay = useBreakpointValue({ base: 'none', md: 'inline-flex' })

    return (
        <>
            { numberOfPages > currentPage ? 
                <Center display={mdDisplay} w='full'>
                    <PaginationButton
                        display={fullDisplay}
                        isDisabled={currentPage === 0}
                        active={false}
                        key={previousLabel}
                        label={previousLabel}
                        onClickFunction={() => onClickFunction(currentPage - 1)}/>
                    
                    <Spacer maxW='4px'/>
                    
                    {endingRange > 0 ?
                        <>
                            <PaginationButtonArray numbers={initialRangeButtons} currentPage={currentPage} onClickFunction={onClickFunction} />
                            {currentPage >= realRange - 1?
                                <>
                                    <PaginationButton active={false} key={skipGap.toString + ' anteriores'} label={breakLabel} onClickFunction={() => onClickFunction(minGap)}/>
                                    <Spacer maxW='4px'/>
                                </>
                            :<></>}

                            {currentPage >= realRange - 1 && currentPage <= endingRange ?
                                <PaginationButtonArray numbers={midRangeButtons} currentPage={currentPage} onClickFunction={onClickFunction} />
                            :<></>}

                            {currentPage <= endingRange || currentPage < realRange - 1 ?
                                <>
                                    <PaginationButton active={false} key={skipGap.toString + ' próximas'} label={breakLabel} onClickFunction={() => onClickFunction(maxGap)}/>
                                    <Spacer maxW='4px'/>
                                </>
                            :<></>}
                            <PaginationButtonArray numbers={finalRangeButtons} currentPage={currentPage} onClickFunction={onClickFunction} />
                        </>
                    : <PaginationButtonArray numbers={Array.from({length: realRange}, (_,k:number) => k + 1)} currentPage={currentPage} onClickFunction={onClickFunction} />}

                    <PaginationButton
                        display={fullDisplay}
                        isDisabled={currentPage === numberOfPages - 1}
                        active={false}
                        key={nextLabel}
                        label={nextLabel}
                        onClickFunction={() => onClickFunction(currentPage + 1)}/>
                </Center>
            : <></> }
        </>
    );
}