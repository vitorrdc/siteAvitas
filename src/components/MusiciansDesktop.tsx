import { Box, Flex, Img, Text } from '@chakra-ui/react'
import MusiciansTittle from './MusiciansTittle'

export default function MusiciansDesktop() {
    return (
        <Flex
            direction="column"
            bg="black"
            pt="20px"
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
            display={['none', 'flex', 'flex', 'flex']}
        >
            <Box>
                {' '}
                <MusiciansTittle />
                <Flex
                    mt="20px"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {' '}
                        <Img
                            boxSize={{
                                base: '65px',
                                md: '110px',
                                lg: '150px'
                            }}
                            borderRadius="full"
                            objectFit={'cover'}
                            src="./assets/amadinho.jpeg"
                            alt="Amadei"
                        />
                        <Text
                            color="white"
                            fontWeight="bold"
                            mt="15px"
                            fontSize={{
                                base: '12px',
                                md: '16px',
                                lg: '24px'
                            }}
                        >
                            Guitarrista
                        </Text>
                        <Text
                            color="white"
                            fontWeight="medium"
                            fontSize={{
                                base: '12px',
                                md: '16px',
                                lg: '24px'
                            }}
                        >
                            Du Amadei - @duamadei
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {' '}
                        <Img
                            boxSize={{
                                base: '65px',
                                md: '110px',
                                lg: '150px'
                            }}
                            borderRadius="full"
                            objectFit={'cover'}
                            src="./assets/kaje.JPG"
                            alt="Jake"
                        />
                        <Text
                            color="white"
                            fontWeight="bold"
                            mt="15px"
                            fontSize={{
                                base: '12px',
                                md: '16px',
                                lg: '24px'
                            }}
                        >
                            Guitarrista
                        </Text>
                        <Text
                            color="white"
                            fontWeight="medium"
                            fontSize={{
                                base: '12px',
                                md: '16px',
                                lg: '24px'
                            }}
                        >
                            Jake - @adrielbotequia
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {' '}
                        <Img
                            boxSize={{
                                base: '65px',
                                md: '110px',
                                lg: '150px'
                            }}
                            borderRadius="full"
                            objectFit={'cover'}
                            src="./assets/renan.jpg"
                            alt="Amadei"
                        />
                        <Text
                            color="white"
                            fontWeight="bold"
                            mt="15px"
                            fontSize={{
                                base: '12px',
                                md: '16px',
                                lg: '24px'
                            }}
                        >
                            Baterista
                        </Text>
                        <Text
                            color="white"
                            fontWeight="medium"
                            fontSize={{
                                base: '12px',
                                md: '16px',
                                lg: '24px'
                            }}
                        >
                            Renan - @renangc
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    mt="30px"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {' '}
                        <Img
                            boxSize={{
                                base: '65px',
                                md: '110px',
                                lg: '150px'
                            }}
                            borderRadius="full"
                            objectFit={'cover'}
                            src="./assets/vital.jpg"
                            alt="Amadei"
                        />
                        <Text
                            color="white"
                            fontWeight="bold"
                            mt="15px"
                            fontSize={{
                                base: '12px',
                                md: '16px',
                                lg: '24px'
                            }}
                        >
                            Baixista
                        </Text>
                        <Text
                            color="white"
                            fontWeight="medium"
                            fontSize={{
                                base: '12px',
                                md: '16px',
                                lg: '24px'
                            }}
                        >
                            Vital - @soueuvital
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {' '}
                        <Img
                            boxSize={{
                                base: '65px',
                                md: '110px',
                                lg: '150px'
                            }}
                            borderRadius="full"
                            objectFit={'cover'}
                            src="./assets/leony.png"
                            alt="Amadei"
                        />
                        <Text
                            color="white"
                            fontWeight="bold"
                            mt="15px"
                            fontSize={{
                                base: '12px',
                                md: '16px',
                                lg: '24px'
                            }}
                        >
                            Trompetista
                        </Text>
                        <Text
                            color="white"
                            fontWeight="medium"
                            fontSize={{
                                base: '12px',
                                md: '16px',
                                lg: '24px'
                            }}
                        >
                            Leo - @leonardopedrozo
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}
