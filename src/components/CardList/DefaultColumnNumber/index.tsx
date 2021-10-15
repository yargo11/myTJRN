import { useMediaQuery } from '@chakra-ui/react'

export default function getColumnNumber () {
    const [isThinnerThan330] = useMediaQuery("(max-width: 661px)")
    const [isThinnerThan660] = useMediaQuery("(max-width: 991px)")
    const [isThinnerThan990] = useMediaQuery("(max-width: 1321px)")

    if(isThinnerThan330) {
        return 1;
    } else if (isThinnerThan660) {
        return 2;
    } else if (isThinnerThan990) {
        return 3;
    } else {
        return 4;
    }
}