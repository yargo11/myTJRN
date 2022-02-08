import { Flex } from '@chakra-ui/react'
import { PaginationProps } from '..';
import PaginationButtonArray from '../PaginationButtonArray';


export default function SmallDevicesPagination ({ currentPage, numberOfPages, paginationRange, onClickFunction }:
    Pick<PaginationProps, 'currentPage' | 'numberOfPages' | 'paginationRange' | 'onClickFunction'>) {

    let firstButtonValue = 1;

    if (currentPage >= paginationRange - 1) {
        firstButtonValue = numberOfPages - paginationRange + 1;
    }

    if (currentPage >= paginationRange - 1 && currentPage <= numberOfPages - paginationRange) {
        firstButtonValue = currentPage + 1 - Math.floor(paginationRange/2);
    }

    const arrayOfButtons = numberOfPages > paginationRange ?
        Array.from({length: paginationRange}, (_,k:number) => k + firstButtonValue)
        : Array.from({length: numberOfPages}, (_,k:number) => k + 1)
    return (
        <>
            { numberOfPages > currentPage ? 
                <Flex w='full' display={{ base: 'flex', md: 'none' }} justify='end'>
                    <PaginationButtonArray
                        numbers={arrayOfButtons}
                        currentPage={currentPage}
                        onClickFunction={onClickFunction} />
                </Flex>
            :<></>}
        </>
    );
}