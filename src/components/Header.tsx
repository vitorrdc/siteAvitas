import React, { useState } from 'react'
import {
    Box,
    Container,
    Flex,
    IconButton,
    Img,
    Link,
    Text
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import MobileHeader from './MobileHeader'

export default function Header() {
    const [display, setDisplay] = useState<string>('none')

    return (
        <Flex background="InfoText" w="100%">
            <Container maxW={{ base: '90%', md: '85%', lg: '80%' }}>
                <Flex
                    justifyContent="space-between"
                    align="center"
                    direction="row"
                    display={['none', 'flex', 'flex', 'flex']}
                >
                    <Link href="/">
                        <Img
                            boxSize={{ base: '80px', md: '100px', lg: '100px' }}
                            objectFit={'contain'}
                            src="./assets/logo-branco.png"
                            alt="Avitas"
                            maxH="80px"
                        />
                    </Link>
                    <Text
                        color="white"
                        fontSize={{ base: 'sm', md: 'md', lg: '3xl' }}
                        fontWeight="extrabold"
                        display={['none', 'none', 'flex', 'flex']}
                    >
                        #HipRockRoots
                    </Text>

                    <Flex
                        color="white"
                        bg="gray.500"
                        px={{ base: '4px', md: '8px', lg: '12px' }}
                        py={{ base: '2px', md: '4px', lg: '8px' }}
                        borderRadius="lg"
                        _hover={{
                            bg: 'green.600',
                            borderRadius: 'xl',
                            transition: '2s'
                        }}
                        justifyContent="space-around"
                        minWidth={{ base: '100px', md: '250px', lg: '400px' }}
                    >
                        <Link
                            _hover={{
                                color: 'black',
                                transition: '0.5s'
                            }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize={{
                                base: 'smaller',
                                md: 'medium',
                                lg: 'lg'
                            }}
                        >
                            Início
                        </Link>
                        <Link
                            _hover={{ color: 'black', transition: '0.5s' }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize={{
                                base: 'smaller',
                                md: 'medium',
                                lg: 'lg'
                            }}
                        >
                            A Banda
                        </Link>
                        <Link
                            _hover={{ color: 'black', transition: '0.5s' }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize={{
                                base: 'smaller',
                                md: 'medium',
                                lg: 'lg'
                            }}
                        >
                            Highlights
                        </Link>
                        <Link
                            _hover={{ color: 'black', transition: '0.5s' }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize={{
                                base: 'smaller',
                                md: 'medium',
                                lg: 'lg'
                            }}
                        >
                            Hits
                        </Link>
                        <Link
                            _hover={{ color: 'black', transition: '0.5s' }}
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize={{
                                base: 'smaller',
                                md: 'medium',
                                lg: 'lg'
                            }}
                        >
                            Contato
                        </Link>
                    </Flex>
                </Flex>
                <Flex
                    display={['flex', 'none', 'none', 'none']}
                    justifyContent="center"
                >
                    <IconButton
                        aria-label="Open Menu"
                        size="xs"
                        icon={<HamburgerIcon />}
                        display={['flex', 'flex', 'none', 'none']}
                        bg="green.500"
                        onClick={() => setDisplay('flex')}
                        position="absolute"
                        left="10px"
                    />
                    <MobileHeader />
                </Flex>
                <Flex
                    w="100vw"
                    bgColor="green.500"
                    opacity={0.8}
                    zIndex={20}
                    h="100vh"
                    position="fixed"
                    top="0"
                    left="0"
                    overflowY="auto"
                    flexDirection="column"
                    display={display}
                >
                    <Flex justifyContent="flex-end">
                        {' '}
                        <IconButton
                            mt={10}
                            mr={10}
                            aria-label="Close Menu"
                            size="lg"
                            icon={<CloseIcon />}
                            onClick={() => setDisplay('none')}
                        />
                    </Flex>

                    <Flex direction="column" alignItems="center">
                        <Link
                            _hover={{
                                color: 'black',
                                transition: '0.5s',
                                backgroundColor: 'gray.200'
                            }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="bold"
                            fontSize="lg"
                            py={3}
                            width="20%"
                            borderRadius={10}
                            textAlign="center"
                            color="white"
                        >
                            Início
                        </Link>
                        <Link
                            _hover={{
                                color: 'black',
                                transition: '0.5s',
                                backgroundColor: 'gray.200'
                            }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="bold"
                            fontSize="lg"
                            py={3}
                            width="20%"
                            borderRadius={10}
                            textAlign="center"
                            color="white"
                        >
                            A Banda
                        </Link>
                        <Link
                            _hover={{
                                color: 'black',
                                transition: '0.5s',
                                backgroundColor: 'gray.200'
                            }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="bold"
                            fontSize="lg"
                            py={3}
                            width="20%"
                            borderRadius={10}
                            textAlign="center"
                            color="white"
                        >
                            Highlights
                        </Link>
                        <Link
                            _hover={{
                                color: 'black',
                                transition: '0.5s',
                                backgroundColor: 'gray.200'
                            }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="bold"
                            fontSize="lg"
                            py={3}
                            width="20%"
                            borderRadius={10}
                            textAlign="center"
                            color="white"
                        >
                            Hits
                        </Link>
                        <Link
                            _hover={{
                                color: 'black',
                                transition: '0.5s',
                                backgroundColor: 'gray.200'
                            }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="bold"
                            fontSize="lg"
                            py={3}
                            width="20%"
                            borderRadius={10}
                            textAlign="center"
                            color="white"
                        >
                            Contato
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}
