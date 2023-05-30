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
                py={4}
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
                    <Box
                        _hover={{
                            background: 'green.700',
                            borderRadius: '3px',
                            cursor: 'pointer'
                        }}
                        mb={2}
                    >
                        {' '}
                        <FaSpotify color="white" size={26} />
                    </Box>
                    <Box
                        _hover={{
                            background: 'green.700',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            width: 'full'
                        }}
                        mb={2}
                    >
                        <FaInstagram color="white" size={26} />
                    </Box>
                    <Box
                        _hover={{
                            background: 'green.700',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            width: 'full'
                        }}
                        mb={2}
                    >
                        <FaYoutube color="white" size={26} />
                    </Box>
                    <Box
                        _hover={{
                            background: 'green.700',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            width: 'full'
                        }}
                        mb={2}
                    >
                        <Icon as={EmailIcon} color="white" w={6} h={6} />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}
