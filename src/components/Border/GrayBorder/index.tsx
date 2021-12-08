import { Box, DividerProps } from "@chakra-ui/react";

export default function GrayBorder ({...attrs}:DividerProps) {
    return (
        <Box w='full' h='1px' bg='#D8DBDF' {...attrs}/>
    );
}