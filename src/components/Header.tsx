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
                        <Link _hover={{ color: 'green.700' }} mr={4}>
                            Inicio
                        </Link>
                        <Link _hover={{ color: 'green.700' }} mr={4}>
                            A Banda
                        </Link>
                        <Link _hover={{ color: 'green.700' }} mr={4}>
                            Highlights
                        </Link>
                        <Link _hover={{ color: 'green.700' }} mr={4}>
                            Hits
                        </Link>
                        <Link _hover={{ color: 'green.700' }}>Contato</Link>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}
