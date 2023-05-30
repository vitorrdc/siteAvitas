import {
    Button,
    ButtonGroup,
    Divider,
    Flex,
    Heading,
    Image,
    Img,
    Stack,
    Text
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import StreamingTittle from './StreamingTittle'

export default function Hits() {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            bg="black"
            backgroundImage="url('./assets/nuvem.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            py="50px"
        >
            <StreamingTittle />
            <Flex justifyContent="space-around" alignItems="center" mt="40px">
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    p="15px"
                    border="2px"
                    borderColor="green.700"
                    borderRadius="10px"
                    bg="black"
                >
                    <Text
                        fontWeight="medium"
                        fontSize="xl"
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
                        boxSize="250px"
                        objectFit={'contain'}
                        src="./assets/madeInBrasilCard.png"
                        alt="Made in Brasil"
                    />
                    <Text color="gray.300" mt="10px" fontSize="lg">
                        Lançamento: 11/2019
                    </Text>
                    <Text color="gray.300" fontWeight="bold" fontSize="lg">
                        Ouça agora no Spotify
                    </Text>
                </Flex>
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    p="15px"
                    border="2px"
                    borderColor="green.700"
                    borderRadius="10px"
                    bg="black"
                >
                    <Text
                        fontWeight="medium"
                        fontSize="xl"
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
                        boxSize="250px"
                        objectFit={'contain'}
                        src="./assets/pareSeLigue.png"
                        alt="Made in Brasil"
                    />
                    <Text color="gray.300" mt="10px" fontSize="lg">
                        Lançamento: 03/2019
                    </Text>
                    <Text color="gray.300" fontWeight="bold" fontSize="lg">
                        Ouça agora no Spotify
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
