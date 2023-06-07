import React from 'react'
import { Container, Flex, Img, Link, Text } from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex background="InfoText" w="100%">
            <Container maxW={{ base: '90%', md: '85%', lg: '80%' }}>
                <Flex
                    justifyContent="space-between"
                    align="center"
                    direction="row"
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
            </Container>
        </Flex>
    )
}
