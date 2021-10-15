import { Divider, DividerProps } from "@chakra-ui/layout";

export default function GrayBorder ({...attrs}:DividerProps) {
    return (
        <Divider border='1px solid #D8DBDF' {...attrs}/>
    );
}