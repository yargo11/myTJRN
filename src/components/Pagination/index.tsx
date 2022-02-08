import { BoxProps, Center } from '@chakra-ui/react'
import MidDevicesPagination from './MidDevicesPagination';
import SmallDevicesPagination from './SmallDevicesPagination';

export interface PaginationProps extends BoxProps {
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

export default function Pagination ({ currentPage, numberOfPages, paginationRange, marginRange, skipGap, breakLabel, nextLabel, previousLabel, onClickFunction, ...attrs }:PaginationProps) {
    return (
        <Center w='full' {...attrs}>
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