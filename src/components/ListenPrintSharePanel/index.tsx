import { Flex, Button, Image, Divider } from "@chakra-ui/react";
import { useState } from "react";
import ShareModal from "./ShareModal";

interface ListenPrintSharePanelProps {
    listOfContentToRead: Array<string>;
}

export default function ListenPrintSharePanel({ listOfContentToRead }: ListenPrintSharePanelProps) {
    const [shareModalOpenState, setShareModalOpenState] = useState(false);

    function handleOpenShareModal() {
        setShareModalOpenState(true);
    }

    function handleCloseShareModal() {
        setShareModalOpenState(false);
    }

    function handleListenFunction() {
        if (!speechSynthesis.speaking) {
            listOfContentToRead.map(contentToRead => {
                speechSynthesis.speak(new SpeechSynthesisUtterance(contentToRead))
            });
        } else {
            speechSynthesis.cancel();
        }
    }

    return (
        <>
            <Flex className='no-print' alignItems='center' fontWeight='bold'>
                <Button fontSize='87.5%' fontWeight='normal' lineHeight='121%' variant='link' rightIcon={<Image src='/icons/Share.svg' w='1rem' h='1rem'/>} onClick={handleOpenShareModal}>
                    Compartilhar
                </Button>
                <Divider orientation='vertical' border='1px solid #D8DBDF' mx='8px' h='50%' />
                <Button fontSize='87.5%' fontWeight='normal' lineHeight='121%' variant='link' rightIcon={<Image src='/icons/Print.svg' w='1rem' h='1rem'/>} onClick={() => { window.print(); }}>
                    Imprimir
                </Button>
                <Divider orientation='vertical' border='1px solid #D8DBDF' mx='8px' h='50%' />
                <Button fontSize='87.5%' fontWeight='normal' lineHeight='121%' variant='link' rightIcon={<Image src='/icons/Listen.svg' w='1rem' h='1rem'/>} onClick={handleListenFunction}>
                    Ouvir
                </Button>
            </Flex>
            <ShareModal isShareModalOpen={shareModalOpenState} handleCloseShareModal={handleCloseShareModal} />
        </>
    );
}