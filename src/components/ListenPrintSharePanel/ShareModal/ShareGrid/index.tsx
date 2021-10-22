import { SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ShareGridProps {
    title:string,
    children: ReactNode;
    columns: number;
}

export default function ShareGrid ({ title, children, columns }: ShareGridProps) {
    return (
        <>
            <Text mb='8px'>{title}</Text>
            <SimpleGrid columns={columns}>
                {children}
            </SimpleGrid>
        </>
    );
}