import { Flex, Text, Icon, Box } from '@chakra-ui/react'
import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { EmailIcon } from '@chakra-ui/icons'

export default function Aside() {
    return (
        <Flex
            h="100vh"
            position="fixed"
            background="black"
            right={0}
            width="45px"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                p={3}
                bg="gray.500"
                borderRadius="lg"
                _hover={{
                    borderRadius: 'xl',
                    transition: '2s',
                    bg: 'green.600'
                }}
                mr={8}
            >
                <Text
                    alignItems="center"
                    color="white"
                    style={{ writingMode: 'vertical-rl' }}
                    mb={1}
                >
                    Ouça agora
                </Text>
                <Flex
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Box mb={1}>
                        <Icon as={ArrowDownIcon} color="white" mb={1} />
                    </Box>
                    <Box mb={2} _hover={{ cursor: 'pointer' }}>
                        <a
                            target="_blank"
                            href="https://open.spotify.com/intl-pt/artist/4M6sY7dTWlsyiaS407HPrK"
                            rel="noreferrer"
                        >
                            <FaSpotify color="white" size={26} />
                        </a>
                    </Box>
                    <Box mb={2} _hover={{ cursor: 'pointer' }}>
                        <a
                            href="https://www.instagram.com/avitasoficial/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram color="white" size={26} />
                        </a>
                    </Box>
                    <Box mb={2} _hover={{ cursor: 'pointer' }}>
                        <a
                            href="https://www.youtube.com/@Avitasoficial"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaYoutube color="white" size={26} />
                        </a>
                    </Box>
                    <Box mb={2} _hover={{ cursor: 'pointer' }}>
                        <Icon as={EmailIcon} color="white" w={6} h={6} />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}
