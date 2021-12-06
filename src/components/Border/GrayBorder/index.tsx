import { Box, DividerProps } from "@chakra-ui/react";

export default function GrayBorder ({...attrs}:DividerProps) {
    return (
        <Box w='full' border='1px solid #D8DBDF' {...attrs}/>
    );
}