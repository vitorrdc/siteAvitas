import { Flex, Text, Box } from '@chakra-ui/react'
import MusiciansTittle from './MusiciansTittle'
import Avatar from './Avatar'

export default function MusiciansMobile() {
    return (
        <Flex
            direction="column"
            bg="black"
            pt="20px"
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
            display={['flex', 'none', 'none', 'none']}
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
                        <Avatar src="./assets/amadinho.jpeg" alt="Amadinho" />
                        <Text
                            color="white"
                            fontWeight="bold"
                            mt="15px"
                            fontSize="12px"
                        >
                            Guitarrista
                        </Text>
                        <Text color="white" fontWeight="medium" fontSize="12px">
                            Du Amadei
                        </Text>
                        <Text
                            color="green.500"
                            fontWeight="medium"
                            fontSize={{ base: '12px', md: '16px', lg: '24px' }}
                        >
                            @duamadei
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {' '}
                        <Avatar src="./assets/kaje.JPG" alt="Jake" />
                        <Text
                            color="white"
                            fontWeight="bold"
                            mt="15px"
                            fontSize="12px"
                        >
                            Guitarrista
                        </Text>
                        <Text color="white" fontWeight="medium" fontSize="12px">
                            Jake
                        </Text>
                        <Text
                            color="green.500"
                            fontWeight="medium"
                            fontSize="12px"
                        >
                            @adrielbotequia
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
                        <Avatar src="./assets/vital.jpg" alt="Vital" />
                        <Text
                            color="white"
                            fontWeight="bold"
                            mt="15px"
                            fontSize="12px"
                        >
                            Baixista
                        </Text>
                        <Text color="white" fontWeight="medium" fontSize="12px">
                            Vital
                        </Text>
                        <Text
                            color="green.500"
                            fontWeight="medium"
                            fontSize="12px"
                        >
                            @soueuvital
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
                        <Avatar src="./assets/renan.jpg" alt="Renan" />
                        <Text
                            color="white"
                            fontWeight="bold"
                            mt="15px"
                            fontSize="12px"
                        >
                            Baterista
                        </Text>
                        <Text color="white" fontWeight="medium" fontSize="12px">
                            Renan
                        </Text>
                        <Text
                            color="green.500"
                            fontWeight="medium"
                            fontSize="12px"
                        >
                            @renangc
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {' '}
                        <Avatar src="./assets/leony.png" alt="Leony" />
                        <Text
                            color="white"
                            fontWeight="bold"
                            mt="15px"
                            fontSize="12px"
                        >
                            Trompetista
                        </Text>
                        <Text color="white" fontWeight="medium" fontSize="12px">
                            Léo
                        </Text>
                        <Text
                            color="green.500"
                            fontWeight="medium"
                            fontSize="12px"
                        >
                            @leonardopedrozo
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}
