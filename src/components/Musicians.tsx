import {
    Flex,
    Text,
    Box,
    Avatar,
    AvatarBadge,
    AvatarGroup,
    Wrap,
    WrapItem,
    Img
} from '@chakra-ui/react'
import MusiciansTittle from './MusiciansTittle'

export default function Musicians() {
    return (
        <Flex
            direction="column"
            bg="black"
            pt="20px"
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
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
                            boxSize="150px"
                            borderRadius="full"
                            objectFit={'cover'}
                            src="./assets/amadinho.jpeg"
                            alt="Amadei"
                            backgroundColor="red"
                        />
                        <Text color="white" fontWeight="bold" mt="15px">
                            Guitarrista
                        </Text>
                        <Text color="white" fontWeight="medium">
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
                            boxSize="150px"
                            borderRadius="full"
                            objectFit={'cover'}
                            src="./assets/kaje.JPG"
                            alt="Jake"
                            backgroundColor="red"
                        />
                        <Text color="white" fontWeight="bold" mt="15px">
                            Guitarrista
                        </Text>
                        <Text color="white" fontWeight="medium">
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
                            boxSize="150px"
                            borderRadius="full"
                            objectFit={'cover'}
                            src="./assets/renan.jpg"
                            alt="Amadei"
                            backgroundColor="red"
                        />
                        <Text color="white" fontWeight="bold" mt="15px">
                            Baterista
                        </Text>
                        <Text color="white" fontWeight="medium">
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
                            boxSize="150px"
                            borderRadius="full"
                            objectFit={'cover'}
                            src="./assets/vital.jpg"
                            alt="Amadei"
                            backgroundColor="red"
                        />
                        <Text color="white" fontWeight="bold" mt="15px">
                            Baixista
                        </Text>
                        <Text color="white" fontWeight="medium">
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
                            boxSize="150px"
                            borderRadius="full"
                            objectFit={'cover'}
                            src="./assets/leony.png"
                            alt="Amadei"
                            backgroundColor="red"
                        />
                        <Text color="white" fontWeight="bold" mt="15px">
                            Trompetista
                        </Text>
                        <Text color="white" fontWeight="medium">
                            Leo - @leonardopedrozo
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}
