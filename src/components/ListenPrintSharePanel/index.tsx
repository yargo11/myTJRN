import { Flex, Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import GrayBorder from "../Border/GrayBorder";
import ShareModal from "./ShareModal/index.";

interface ListenPrintSharePanelProps {
    listOfContentToRead: Array<string>;
}

export default function ListenPrintSharePanel ({ listOfContentToRead } :ListenPrintSharePanelProps) {
    const [shareModalOpenState, setShareModalOpenState] = useState(false);

    function handleOpenShareModal () {
        setShareModalOpenState(true);
    }

    function handleCloseShareModal () {
        setShareModalOpenState(false);
    }

    function handleListenFunction () {
        listOfContentToRead.map(contentToRead => {
            speechSynthesis.speak(new SpeechSynthesisUtterance(contentToRead))
        });
    }

    return (
        <>
            <Flex className='no-print'>
                <Button fontSize='87.5%' fontWeight='normal' lineHeight='121%' variant='link' rightIcon={<Image src='/icons/Share.svg'/>} onClick={handleOpenShareModal}>
                    Compartilhar
                </Button>
                <GrayBorder orientation='vertical' mx='8px'/>
                <Button fontSize='87.5%' fontWeight='normal' lineHeight='121%' variant='link' rightIcon={<Image src='/icons/Print.svg'/>} onClick={() => {window.print();}}>
                    Imprimir
                </Button>
                <GrayBorder orientation='vertical' mx='8px'/>
                <Button fontSize='87.5%' fontWeight='normal' lineHeight='121%' variant='link' rightIcon={<Image src='/icons/Listen.svg'/>} onClick={handleListenFunction}>
                    Ouvir
                </Button>
            </Flex>
        <ShareModal isShareModalOpen={shareModalOpenState} handleCloseShareModal={handleCloseShareModal}/>
        </>
    );
}