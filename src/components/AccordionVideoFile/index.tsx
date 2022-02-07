import { Box, Text, Link, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, ListItem, UnorderedList } from '@chakra-ui/react'

interface AllFilesAndVideosProps {
    allfilesandvideos: Array<FileAndVideoProps>
}

interface FileAndVideoProps {
    category: string;
    videofiles: Array<TitleAndLinkProps>
}

interface TitleAndLinkProps {
    title: string;
    link: string
}

export default function AccordionVideoFile({ allfilesandvideos }: AllFilesAndVideosProps) {
    return (
        <Accordion allowToggle>
            {
                allfilesandvideos.map(filevideo =>
                    <>
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    <Text
                                        fontSize='200%'
                                        fontWeight='600'
                                    >
                                        {filevideo.category}
                                    </Text>
                                    <Text
                                        fontSize='112.5%'
                                        fontWeight='400'
                                        display='flex'
                                        alignItems='center'
                                    >
                                        Mostrar mais <AccordionIcon />
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <UnorderedList color='#336699'>
                                    {filevideo.videofiles.map(data =>
                                        <ListItem key={data.link}>
                                            <Link
                                                href={data.link}
                                                fontSize='112.5%'
                                                fontWeight='400'

                                            >
                                                {data.title}
                                            </Link>
                                        </ListItem>
                                    )}
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </>
                )
            }
        </Accordion>
    );
}