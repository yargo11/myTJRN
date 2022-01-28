import { Button, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { RiFacebookBoxFill, RiTwitterFill, RiWhatsappFill } from 'react-icons/ri'
import ShareGrid from "./ShareGrid";
import ShareButton from "./ShareGrid/ShareButton";

interface ShareModalProps {
    isShareModalOpen: boolean;
    handleCloseShareModal: () => void;
}

export default function ShareModal ({ isShareModalOpen, handleCloseShareModal }: ShareModalProps) {

    const [windowUrl, setWindowUrl] = useState('');

    useEffect(() => {
        setWindowUrl(window.location.href);
    },[])

    return (
        <Modal isOpen={isShareModalOpen} onClose={handleCloseShareModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Compartilhar essa página</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <ShareGrid title='Redes sociais' columns={2}>
                        <ShareButton
                            applicationShareLinkCode={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(windowUrl)}`}
                            icon={<Icon as={RiFacebookBoxFill} color='#3a559f' h={35} w={35}/>}
                            label='Facebook'/>
                        <ShareButton
                            applicationShareLinkCode={`https://twitter.com/intent/tweet?url=${encodeURIComponent(windowUrl)}`}
                            icon={<Icon as={RiTwitterFill} color='#2aa9e0' h={35} w={35}/>}
                            label='Twitter'/>
                    </ShareGrid>
                    <ShareGrid title='Mensagens' columns={2}>
                        <ShareButton
                            applicationShareLinkCode={`https://api.whatsapp.com/send?text=${encodeURIComponent(windowUrl)}`}
                            icon={<Icon as={RiWhatsappFill} color='#2fb943' h={35} w={35}/>}
                            label='WhatsApp'/>
                    </ShareGrid>
                    <ShareGrid title='Copiar link' columns={1}>
                    <InputGroup size="md">
                        <Input value={windowUrl}/>
                        <InputRightElement width="80px">
                            <Button h="1.75rem" size="sm" onClick={() => {navigator.clipboard.writeText(windowUrl)}} aria-label={'Copiar Link da página'}>
                                Copiar
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                    </ShareGrid>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}