import { Link, Text } from "@chakra-ui/layout";

interface ShareButtonProps {
    applicationShareLinkCode: string,
    icon: JSX.Element,
    label: string
}

export default function ShareButton ({applicationShareLinkCode, icon, label}: ShareButtonProps) {
    return (
        <Link
            href={applicationShareLinkCode}
            target="_blank"
            display='flex'
            alignItems='center'
            p='4px'
            borderRadius='lg'
            _hover={{bgColor: '#fafbfc'}}>
            {icon}
            <Text ml='20px'>{label}</Text>
        </Link>
    );
}