import { Flex, Img, Text } from '@chakra-ui/react'

import StreamingTittle from './StreamingTittle'
import Link from 'next/link'
import HitsMobile from './HitsMobile'

export default function Hits() {
    return (
        <>
            <Flex
                direction="column"
                justifyContent="center"
                bg="black"
                backgroundImage="url('./assets/nuvem.png')"
                bgRepeat="no-repeat"
                bgSize="cover"
                py="50px"
                display={['none', 'flex', 'flex', 'flex']}
            >
                <StreamingTittle />
                <Flex
                    justifyContent="space-around"
                    alignItems="center"
                    mt="40px"
                >
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        p="10px"
                        border="2px"
                        borderColor="green.700"
                        borderRadius="10px"
                        bg="black"
                    >
                        <Text
                            fontWeight="medium"
                            fontSize={{ base: 'base', md: 'lg', lg: 'xl' }}
                            color="white"
                            border="2px"
                            borderColor="green.700"
                            borderTop="none"
                            borderRight="none"
                            borderLeft="none"
                            mb="10px"
                        >
                            Made in Brasil
                        </Text>
                        <Img
                            boxSize={{ base: '83px', md: '166px', lg: '250px' }}
                            objectFit={'contain'}
                            src="./assets/madeInBrasilCard.png"
                            alt="Made in Brasil"
                        />
                        <Text
                            color="gray.300"
                            mt="10px"
                            fontSize={{ base: '10px', md: '16px', lg: '24px' }}
                        >
                            Lançamento: 11/2019
                        </Text>
                        <Text
                            color="green.500"
                            fontWeight="bold"
                            fontSize={{ base: '10px', md: '20px', lg: '24px' }}
                        >
                            <a
                                target="_blank"
                                href="https://open.spotify.com/intl-pt/track/1toEd4ad1MYpzWgFhdeMJ9"
                                rel="noreferrer"
                            >
                                {' '}
                                Ouça agora no Spotify!
                            </a>
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        p="10px"
                        border="2px"
                        borderColor="green.700"
                        borderRadius="10px"
                        bg="black"
                    >
                        <Text
                            fontWeight="medium"
                            fontSize={{ base: 'base', md: 'lg', lg: 'xl' }}
                            color="white"
                            border="2px"
                            borderColor="green.700"
                            borderTop="none"
                            borderRight="none"
                            borderLeft="none"
                            mb="10px"
                        >
                            Pare, Se Ligue
                        </Text>
                        <Img
                            boxSize={{ base: '83px', md: '166px', lg: '250px' }}
                            objectFit={'contain'}
                            src="./assets/pareSeLigue.png"
                            alt="Made in Brasil"
                        />
                        <Text
                            color="gray.300"
                            mt="10px"
                            fontSize={{ base: '10px', md: '16px', lg: '24px' }}
                        >
                            Lançamento: 03/2019
                        </Text>
                        <Text
                            color="green.500"
                            fontWeight="bold"
                            fontSize={{ base: '10px', md: '20px', lg: '24px' }}
                        >
                            <a
                                target="_blank"
                                href="https://open.spotify.com/intl-pt/track/3jKwxDGKXDoGuaUcnWNnhN"
                                rel="noreferrer"
                            >
                                Ouça agora no Spotify!
                            </a>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <HitsMobile />
        </>
    )
}
