import { Center } from '@chakra-ui/react'
import MidDevicesPagination from './MidDevicesPagination.tsx';
import SmallDevicesPagination from './SmallDevicesPagination.tsx';

export interface PaginationProps {
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

export default function Pagination ({ currentPage, numberOfPages, paginationRange, marginRange, skipGap, breakLabel, nextLabel, previousLabel, onClickFunction }:PaginationProps) {
    return (
        <Center w='full'>
            <MidDevicesPagination
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                marginRange={marginRange}
                skipGap={skipGap}
                paginationRange={paginationRange}
                breakLabel={breakLabel}
                nextLabel={nextLabel}
                previousLabel={previousLabel}
                onClickFunction={onClickFunction} />
            <SmallDevicesPagination
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                paginationRange={paginationRange}
                onClickFunction={onClickFunction} />
        </Center>
    );
}