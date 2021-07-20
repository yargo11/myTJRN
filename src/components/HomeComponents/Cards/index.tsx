import { Link, Box, Image, Text, useMediaQuery } from "@chakra-ui/react"

interface CardProps {
    title: string;
    image: string;
    description: string;
    a: string;
}

export function Cards({ title, image, description, a }: CardProps) {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    return (
        <Link
            href={a}
            isExternal
            textDecoration="none"
        >
            <Box
                display="block"
                flexDirection="column"
                maxW="275px"
                w='100%'
                h="298px"
                m='auto'
                py={isLargerThan768 ? 10 : 4} px={5}
                border="1px solid #d8dbdf"
                borderRadius="6px"
                box-shadow="0 2px 30px rgba(0,0,0,0.02)"
                transition="border 0.2s, transform 0.2s, color 0.2s"
                _hover={{
                    transform: "translateY(-5px)",
                    border: "1px solid cyan.500",
                    p:{
                        color: "cyan.500",
                    }
                }}
            >

                <Image src={`/images/${image}.svg`} alt="Seus Direitos e a Lei" />

                <Text
                    mt="30px"
                    mb="10px"
                    fontWeight="500"
                    fontSize="1.313rem"
                    lineHeight="1.75rem"
                    color="#2c2f2f"
                    transition="0.2s color"
                >
                    {title}
                </Text>

                <Text
                    fontSize="1rem"
                    fontWeight="400"
                    lineHeight="1.25rem"
                    color="#333333"
                    transition="0.2s color"
                >
                    {description}
                </Text>

            </Box>
        </Link >
    )
}