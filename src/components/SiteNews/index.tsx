import { Box, Button, Link, List, ListItem, Text } from '@chakra-ui/react'

export default function SiteNews({ linkprops }) {
    return (
        <Box >
            <Text
                fontSize="200%"
                fontWeight="600"
                color="#000000"
                mb="24px"
            >
                Notícias
            </Text>
            <List mb="1.5rem">
                {linkprops.map(link =>
                    <ListItem
                        borderBottom="1px solid #d8d8df"
                        py="1rem"
                    >
                        <Link
                            href={link.link}
                            fontSize="112.5%"
                            fontWeight="600"
                            color="#14697F"
                        >
                            {link.title}
                        </Link>
                        <Text
                            fontSize="75%"
                            fontWeight="500"
                            color="#888889"
                        >
                            {link.lastUpdated}
                        </Text>
                    </ListItem>
                )}
            </List>
            <Button
                as={Link}
                href="#"
                w="165px"
                borderRadius="6px"
                px="16px"
                py="8px"
                mb="1rem"
                ml="auto"
                display="flex"
                bg="#00384D"
                
                fontSize="100%"
                fontWeight="500"
                color="#ffffff"

                _hover={{
                    bg:"#005270"
                }}
            >
                Todas as Notícias
            </Button>
        </Box>
    )
}