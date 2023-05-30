import { Box, Flex, Img, Text } from '@chakra-ui/react'
import Revista from '../assets/revista.jpeg'
import HighlightsTittle from './HighlightsTittle'

export default function Highlights() {
    return (
        <Flex
            direction="column"
            bg="black"
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
        >
            <HighlightsTittle />
            <Flex alignItems="center" justifyContent="space-around">
                <Box position="relative">
                    <Img
                        boxSize="100px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        left="80%"
                    />{' '}
                    <Img
                        boxSize="100px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top="80%"
                        left="-15%"
                    />
                    <Img
                        boxSize="300px"
                        objectFit={'contain'}
                        src="./assets/revista.jpeg"
                        alt="Avitas"
                    />{' '}
                </Box>
                <Box position="relative">
                    <Img
                        boxSize="100px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        left="80%"
                    />{' '}
                    <Img
                        boxSize="100px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top="70%"
                        left="-10%"
                    />
                    <Img
                        boxSize="360px"
                        objectFit={'contain'}
                        src="./assets/mocao.jpeg"
                        alt="Avitas"
                    />{' '}
                </Box>
                <Box position="relative">
                    <Img
                        boxSize="100px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        left="70%"
                        top="-10%"
                    />{' '}
                    <Img
                        boxSize="100px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top="80%"
                        left="-15%"
                    />
                    <Img
                        boxSize="300px"
                        objectFit={'contain'}
                        src="./assets/jornal.jpeg"
                        alt="Avitas"
                    />{' '}
                </Box>
            </Flex>
        </Flex>
    )
}
