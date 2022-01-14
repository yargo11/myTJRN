import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function RightMenuMobile() {
    return (
        <Menu>
            <MenuButton
                as={Button}
                color='tj_light_blue'
                fontSize='14px'
                fontWeight='medium'
                lineHeight='20px'
                w='102px'
                backgroundColor='rgba(216, 216, 216, 0.05)'
                borderRadius='none'
                display={{base: 'flex', sm: 'none'}}
                leftIcon={<ChevronDownIcon />}>
                Menu
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    );
}