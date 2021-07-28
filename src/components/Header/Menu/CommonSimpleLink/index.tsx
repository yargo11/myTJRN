import { Link } from "@chakra-ui/react";
import { MenuInterface } from "../../../../interfaces/menuInterface";

interface CommonSimpleLinkProps {
    menu: MenuInterface
}

export function CommonSimpleLink({ menu }: CommonSimpleLinkProps) {
    return (
        <Link
            fontSize='1rem'
            fontWeight='semibold'
            href={menu.link}>
            {menu.nome}
        </Link>
    );
}