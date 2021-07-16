import React from 'react';
import { List, ListItem, Link } from '@chakra-ui/react'

export function ButtonFilters(props) {
    return (
        <ListItem
            mx='15px'
            h='100%'
            display='flex'
            alignItems='center'
            transition='0.2s box-shadow'
            _hover={{
                boxShadow: 'inset 0 -3px #b8d272',
                color: 'cyan.500'
            }}
        ><Link
        textDecoration="none"
        
            href={props.link}
        >{props.text}</Link></ListItem>
    )
}