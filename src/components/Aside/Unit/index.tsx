import { Box, Image } from "@chakra-ui/react";
import ListenPrintSharePanel from "../../ListenPrintSharePanel";

interface UnitProps {
    image: string
}

export default function Unit ({ image }:UnitProps) {
    return (
        <>
            <Image src={image}/>
            <Box w='full' h='1px' bgColor='tj_dark_blue' mt='32px' mb='12px'></Box>
            <ListenPrintSharePanel listOfContentToRead={[]} />
        </>
    );
}