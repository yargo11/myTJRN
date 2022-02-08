import { Button, Flex, HStack, Link, Icon, SimpleGrid, Spacer, useDisclosure, Collapse } from "@chakra-ui/react"
import { FiMenu } from "react-icons/fi"

export default function MenuCoord({ linkList, subMenu }) {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Flex w="full" bg="#e1e7eb" direction="column">
            <Flex w="100%" maxW="1296px" m="auto" h="87px" align="center">
                <HStack
                    color="#00384D"
                    fontWeight="500"
                    fontSize="100%"
                    spacing="20px"
                >
                    {linkList.map(link =>
                        <Link key={link.link} href={link.link}>{link.label}</Link>
                    )
                    }
                </HStack>
                <Spacer />
                <Button
                    h="50px"
                    borderRadius="6px"
                    bg="#cfd4d6"
                    onClick={onToggle}
                >
                    <Icon as={FiMenu} w="1rem" h="1rem" mr="1rem" />
                    MENU
                </Button>
            </Flex>
            <Collapse in={isOpen} animateOpacity >
                <SimpleGrid minChildWidth="306px" pb="1rem" spacing="24px" w="100%" maxW="1296px" m="auto">
                    {subMenu.map(option =>
                        <Link
                            key={option.link}
                            href={option.link}
                            display="flex"
                            alignItems="center"
                            bg="#00384D"
                            color="#fff"
                            px="24px"
                            py="20px"
                            height="65px"
                            borderRadius="6px"

                            transition="background 0.2s"
                            _hover={{ bg: "#004e6a" }}
                        >
                            {option.label}
                        </Link>
                    )}
                </SimpleGrid>
            </Collapse>

        </Flex>
    )
}