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

export default function Mobile ({ currentPage, numberOfPages, paginationRange }: PaginationProps) {


    const initialRange = currentPage + 1 - Math.floor(paginationRange/2) < 0;
    const endingRange = currentPage + 1 + Math.floor(paginationRange/2) > numberOfPages;

    return (
        <></>
    );
}