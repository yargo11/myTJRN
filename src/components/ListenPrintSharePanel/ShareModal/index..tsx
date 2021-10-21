import { Button, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { GrFacebook } from 'react-icons/gr'

interface ShareModalProps {
    isShareModalOpen: boolean;
    handleCloseShareModal: () => void;
}

export default function ShareModal ({ isShareModalOpen, handleCloseShareModal }: ShareModalProps) {

    const router = useRouter();
    const { asPath } = router; //asPath,route, try with one of them, if the actual does not work


    return (
        <Modal isOpen={isShareModalOpen} onClose={handleCloseShareModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Compartilhar essa página</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Text>Redes sociais</Text>
                <SimpleGrid columns={2}>
                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.PROJECT_URL}${asPath}`} target="_blank" display='flex' alignItems='center' maxW='110px'>
                        <GrFacebook color='#3a559f' size={32}/>
                        <Spacer />
                        <Text>Facebook</Text>
                    </Link>
                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.PROJECT_URL}${asPath}`} target="_blank" display='flex' alignItems='center' maxW='110px'>
                        <GrFacebook color='#3a559f' size={32}/>
                        <Spacer />
                        <Text>Facebook</Text>
                    </Link>
                </SimpleGrid>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                        Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}