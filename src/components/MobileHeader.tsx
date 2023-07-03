import { Box, Flex } from '@chakra-ui/react'
import { FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'

export default function MobileHeader() {
    return (
        <Flex
            justifyContent="space-around"
            alignItems="center"
            bg="green.500"
            px="8px"
            borderRadius="5px"
            py="3px"
        >
            <Box _hover={{ cursor: 'pointer' }} mr="5px">
                <a
                    target="_blank"
                    href="https://open.spotify.com/intl-pt/artist/4M6sY7dTWlsyiaS407HPrK"
                    rel="noreferrer"
                >
                    <FaSpotify color="white" size={18} />
                </a>
            </Box>
            <Box _hover={{ cursor: 'pointer' }} mr="5px">
                <a
                    href="https://www.instagram.com/avitasoficial/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram color="white" size={18} />
                </a>
            </Box>
            <Box _hover={{ cursor: 'pointer' }}>
                <a
                    href="https://www.youtube.com/@Avitasoficial"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaYoutube color="white" size={18} />
                </a>
            </Box>
        </Flex>
    )
}
