import { Divider, Flex, Heading, Link, Button, Icon } from "@chakra-ui/react";
import { FiGrid } from 'react-icons/fi'

export function Filters() {
    return (
        <Flex direction="column">
            <Divider />
            <Flex maxW="1120px" w="100%" px="10px" margin="auto">
                <Heading as="h3" fontSize="0.875rem" my="25px" mr="35px"
                    transition="0.2s color"
                    _hover={{
                        color: "cyan.900"
                    }}
                >
                    <Link href="#" >
                        Todas
                    </Link>
                </Heading>
                <Heading as="h6" fontSize=" 0.875rem" my="25px" mr="35px"
                    transition="0.2s color"
                    _hover={{
                        color: "cyan.900"
                    }}
                >
                    <Link href="#" >
                        Decisões judiciais
                    </Link>
                </Heading>
                <Flex ml="auto" align="center">
                    <Button background="#fff">
                        <Icon as={FiGrid} fontSize={32}/>
                    </Button>
                </Flex>


            </Flex>
            <Divider />
        </Flex>
    );
}