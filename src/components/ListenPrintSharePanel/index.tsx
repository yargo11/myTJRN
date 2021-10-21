import { Flex, Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import GrayBorder from "../Border/GrayBorder";
import ShareModal from "./ShareModal/index.";

export default function ListenPrintSharePanel () {
    const [shareModalOpenState, setShareModalOpenState] = useState(false);

    function handleOpenShareModal () {
        setShareModalOpenState(true);
    }

    function handleCloseShareModal () {
        setShareModalOpenState(false);
    }
    return (
        <>
            <Flex>
                <Button fontSize='87.5%' fontWeight='normal' lineHeight='16.94px' variant='link' rightIcon={<Image src='/icons/Share.svg'/>} onClick={handleOpenShareModal}>
                    Compartilhar
                </Button>
                <GrayBorder orientation='vertical' mx='8px'/>
                <Button fontSize='87.5%' fontWeight='normal' lineHeight='16.94px' variant='link' rightIcon={<Image src='/icons/Print.svg'/>}>
                    Imprimir
                </Button>
                <GrayBorder orientation='vertical' mx='8px'/>
                <Button fontSize='87.5%' fontWeight='normal' lineHeight='16.94px' variant='link' rightIcon={<Image src='/icons/Listen.svg'/>}>
                    Ouvir
                </Button>
            </Flex>
        <ShareModal isShareModalOpen={shareModalOpenState} handleCloseShareModal={handleCloseShareModal}/>
        </>
    );
}