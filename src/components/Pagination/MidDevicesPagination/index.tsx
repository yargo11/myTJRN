import { Flex, Spacer } from '@chakra-ui/react'
import { PaginationProps } from '..';
import PaginationButton from "../PaginationButton";
import PaginationButtonArray from '../PaginationButtonArray';

/*skipGap não pode ser maior que paginationRange*/
export default function MidDevicesPagination ({ currentPage, numberOfPages, paginationRange, marginRange, skipGap, breakLabel, nextLabel, previousLabel, onClickFunction }:PaginationProps) {

    const endingRange = numberOfPages - paginationRange;

    const minGap = currentPage - skipGap > 0 ? currentPage - skipGap : 0;

    const maxGap = currentPage + skipGap < numberOfPages - 1 ? currentPage + skipGap : numberOfPages - 1;

    const paginationInitialMargin = Math.min(marginRange, numberOfPages - paginationRange, currentPage - Math.floor(paginationRange/2));

    const initialRangeButtons = currentPage < paginationRange - 1 ?
        Array.from({length: paginationRange}, (_,k:number) => k + 1)
        : Array.from({length: paginationInitialMargin}, (_,k:number) => k + 1);

    const midRangeButtons = currentPage >= paginationRange - 1 && currentPage <= endingRange ?
        Array.from({length: paginationRange}, (_,k:number) => k + currentPage + 1 - Math.floor(paginationRange/2))
        : [];

    const paginationFinalMargin = Math.min(marginRange, (currentPage < paginationRange ? numberOfPages - paginationRange : numberOfPages - (currentPage - Math.floor(paginationRange/2) + paginationRange)));

    const finalRangeButtons = currentPage > endingRange && currentPage >= paginationRange - 1 ?
        Array.from({length: paginationRange}, (_,k:number) => k + endingRange + 1)
        : Array.from({length: paginationFinalMargin}, (_,k:number) => k + numberOfPages - paginationFinalMargin + 1);

    return (
        <>
            { numberOfPages > currentPage ? 
                <Flex w='full' display={{ base: 'none', md: 'flex' }} justify='end'>
                    <PaginationButton
                        display={{ base: 'none', lg: 'inline-flex' }}
                        isDisabled={currentPage === 0}
                        active={false}
                        key={previousLabel}
                        label={previousLabel}
                        onClickFunction={() => onClickFunction(currentPage - 1)}/>
                    <Spacer maxW='4px'/>
                    
                    {numberOfPages > paginationRange ?
                        <>
                            <PaginationButtonArray numbers={initialRangeButtons} currentPage={currentPage} onClickFunction={onClickFunction} />
                            {currentPage >= paginationRange - 1?
                                <PaginationButton
                                    active={false}
                                    key={skipGap.toString + ' anteriores'}
                                    label={breakLabel} onClickFunction={() => onClickFunction(minGap)}/>
                            :<></>}

                            {currentPage >= paginationRange - 1 && currentPage <= endingRange ?
                                <PaginationButtonArray numbers={midRangeButtons} currentPage={currentPage} onClickFunction={onClickFunction} />
                            :<></>}

                            {currentPage <= endingRange || currentPage < paginationRange - 1 ?
                                <PaginationButton
                                    active={false}
                                    key={skipGap.toString + ' próximas'}
                                    label={breakLabel} onClickFunction={() => onClickFunction(maxGap)}/>
                            :<></>}
                            <PaginationButtonArray numbers={finalRangeButtons} currentPage={currentPage} onClickFunction={onClickFunction} />
                        </>
                    : <PaginationButtonArray numbers={Array.from({length: numberOfPages}, (_,k:number) => k + 1)} currentPage={currentPage} onClickFunction={onClickFunction} />}

                    <Spacer maxW='4px'/>
                    <PaginationButton
                        display={{ base: 'none', lg: 'inline-flex' }}
                        isDisabled={currentPage === numberOfPages - 1}
                        active={false}
                        key={nextLabel}
                        label={nextLabel}
                        onClickFunction={() => onClickFunction(currentPage + 1)}/>
                </Flex>
            : <></> }
        </>
    );
}