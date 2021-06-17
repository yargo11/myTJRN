import Link from 'next/link';
import { MenuInterface } from '../../../../interfaces/menuInterface';

interface MenuItemProps {
    menuItem: MenuInterface;
}

export function MenuItem(props: MenuItemProps) {
	return (<a href="#">{props.menuItem.nome}</a>);
}