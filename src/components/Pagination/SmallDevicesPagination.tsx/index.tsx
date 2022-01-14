import { Center } from '@chakra-ui/react'
import { PaginationProps } from '..';
import PaginationButtonArray from '../PaginationButtonArray';


export default function SmallDevicesPagination ({ currentPage, numberOfPages, paginationRange, onClickFunction }:Pick<PaginationProps, 'currentPage' | 'numberOfPages' | 'paginationRange' | 'onClickFunction'>) {
    let firstButtonValue = 1;

    if (currentPage >= paginationRange - 1) {
        firstButtonValue = numberOfPages - paginationRange + 1;
    }

    if (currentPage >= paginationRange - 1 && currentPage <= numberOfPages - paginationRange) {
        firstButtonValue = currentPage + 1 - Math.floor(paginationRange/2);
    }

    return (
        <>
            { numberOfPages > currentPage ? 
                <Center w='full' display={{ base: 'flex', md: 'none' }}>
                    { numberOfPages > paginationRange ?
                        <PaginationButtonArray numbers={Array.from({length: paginationRange}, (_,k:number) => k + firstButtonValue)} currentPage={currentPage} onClickFunction={onClickFunction} />
                    :<PaginationButtonArray numbers={Array.from({length: numberOfPages}, (_,k:number) => k + 1)} currentPage={currentPage} onClickFunction={onClickFunction} />}
                </Center>
            :<></>}
        </>
    );
}