import React from 'react'
import { Container, Flex, Img, Link, Text } from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex background="InfoText" w="100%">
            <Container maxW="container.lg">
                <Flex
                    justifyContent="space-between"
                    align="center"
                    direction="row"
                >
                    <Link href="/">
                        <Img
                            boxSize="100px"
                            objectFit={'contain'}
                            src="./assets/logo-branco.png"
                            alt="Avitas"
                        />
                    </Link>
                    <Text color="white" fontSize={20} fontWeight="extrabold">
                        #HipRockRoots
                    </Text>

                    <Flex color="white">
                        <Link
                            _hover={{ color: 'green.700' }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize="lg"
                        >
                            Início
                        </Link>
                        <Link
                            _hover={{ color: 'green.700' }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize="lg"
                        >
                            A Banda
                        </Link>
                        <Link
                            _hover={{ color: 'green.700' }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize="lg"
                        >
                            Highlights
                        </Link>
                        <Link
                            _hover={{ color: 'green.700' }}
                            mr={4}
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize="lg"
                        >
                            Hits
                        </Link>
                        <Link
                            _hover={{ color: 'green.700' }}
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize="lg"
                        >
                            Contato
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}
