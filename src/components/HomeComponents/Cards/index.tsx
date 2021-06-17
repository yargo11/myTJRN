import styles from './styles.module.scss';

import { Link, Box, Image, Text } from "@chakra-ui/react"

interface CardProps {
    title: string;
    image: string;
    description: string;
    a: string;
}

export function Cards({ title, image, description, a }: CardProps) {
    return (
        <Link
            href={a}
            isExternal
            textDecoration="none"
        >
            <Box
                display="block"
                flexDirection="column"
                w="276px"
                h="288px"
                m={[3.5, 1]}
                py={10} px={5}
                border="1px solid #d8dbdf"
                borderRadius="6px"
                box-shadow="0 2px 30px rgba(0,0,0,0.02)"
                transition="border 0.2s, transform 0.2s, color 0.2s"
                _hover={{
                    color: "var(--cyan-500)",
                    transform: "translateY(-5px)",
                    border: "1px solid var(--cyan-500)"
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
                    _hover={{
                        color: "var(--cyan-500)",
                    }}
                >
                    {title}
                </Text>

                <Text
                    fontSize="1rem"
                    fontWeight="400"
                    lineHeight="1.25rem"
                    color="#333333"
                    transition="0.2s color"
                    _hover={{
                        color: "var(--cyan-500)",
                    }}
                >
                    {description}
                </Text>

            </Box>
        </Link >
    )
}