import { Center, useBreakpointValue } from '@chakra-ui/react'
import PaginationButton from "./PaginationButton";

interface PaginationProps {
    currentPage: number;
    numberOfPages: number;
    paginationRange: number;
    marginRange: number;
    skipGap: number;
    breakLabel?: string;
    nextLabel?: string;
    previousLabel?: string;
    onClickFunction: (selectedPage:number) => void;
}

/*skipGap não pode ser maior que paginationRange*/

export default function Pagination ({ currentPage, numberOfPages, paginationRange, marginRange, skipGap, onClickFunction }:PaginationProps) {

    const realRange = Math.min(paginationRange, numberOfPages);

    const endingRange = numberOfPages - paginationRange;

    const endingMargin = numberOfPages - marginRange;

    const minGap = currentPage - skipGap > 0 ? currentPage - skipGap : 0;

    const maxGap = currentPage + skipGap < numberOfPages - 1 ? currentPage + skipGap : numberOfPages - 1;

    const fullDisplay = useBreakpointValue({ base: 'none', lg: 'inline-flex' })

    const mdDisplay = useBreakpointValue({ base: 'none', md: 'inline-flex' })

    return (
        <>
            { numberOfPages > currentPage ? 
                <Center>
                    <PaginationButton
                        display={fullDisplay}
                        isDisabled={currentPage === 0}
                        active={false}
                        key={'Página Anterior'}
                        label={'Página Anterior'}
                        onClickFunction={() => onClickFunction(currentPage - 1)}/>
                    
                    <Center display={mdDisplay}>
                        {currentPage < realRange - 1 ?
                            <>{Array.from({length: realRange}, (_,k:number) => k + 1).map(buttonValue =>
                                <PaginationButton
                                    active={currentPage + 1 === buttonValue}
                                    key={buttonValue}
                                    label={buttonValue.toString()}
                                    onClickFunction={() => onClickFunction(buttonValue - 1)}/>)}
                            </>
                            : <>{Array.from({length: marginRange}, (_,k:number) => k + 1).map(buttonValue =>
                                <PaginationButton
                                    active={currentPage + 1 === buttonValue}
                                    key={buttonValue}
                                    label={buttonValue.toString()}
                                    onClickFunction={() => onClickFunction(buttonValue - 1)}/>)}
                                <PaginationButton
                                    active={false}
                                    key={skipGap.toString + ' anteriores'}
                                    label={'...'}
                                    onClickFunction={() => onClickFunction(minGap)}/>
                            </> 
                        }
                    </Center>

                    {currentPage >= realRange - 1 && currentPage <= endingRange ?
                        <>{Array.from({length: paginationRange}, (_,k:number) => k + currentPage + 1 - Math.floor(paginationRange/2)).map(buttonValue =>
                            <PaginationButton
                                active={currentPage + 1 === buttonValue}
                                key={buttonValue}
                                label={buttonValue.toString()}
                                onClickFunction={() => onClickFunction(buttonValue - 1)}/>)}
                        </>
                    :<></>}

                    <Center display={mdDisplay}>
                        {endingRange > 0 ?
                            <>
                                {currentPage > endingRange ?
                                    <>{Array.from({length: paginationRange}, (_,k:number) => k + endingRange + 1).map(buttonValue =>
                                        <PaginationButton
                                            active={currentPage + 1 === buttonValue}
                                            key={buttonValue}
                                            label={buttonValue.toString()}
                                            onClickFunction={() => onClickFunction(buttonValue - 1)}/>)}
                                    </>
                                    : <>
                                        <PaginationButton
                                            active={false}
                                            key={skipGap.toString + ' próximas'}
                                            label={'...'}
                                            onClickFunction={() => onClickFunction(maxGap)}/>
                                        {Array.from({length: marginRange}, (_,k:number) => k + endingMargin + 1).map(buttonValue =>
                                            <PaginationButton
                                                active={currentPage + 1 === buttonValue}
                                                key={buttonValue}
                                                label={buttonValue.toString()}
                                                onClickFunction={() => onClickFunction(buttonValue - 1)}/>)}
                                    </> 
                                }
                            </>
                        : <></>}

                        <PaginationButton
                            display={fullDisplay}
                            isDisabled={currentPage === numberOfPages - 1}
                            active={false}
                            key={'Próxima Página'}
                            label={'Próxima Página'}
                            onClickFunction={() => onClickFunction(currentPage + 1)}/>
                    </Center>
                </Center>
            : <></> }
        </>
    );
}