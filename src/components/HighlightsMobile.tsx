import { Box, Flex, Img } from '@chakra-ui/react'
import HighlightsTittle from './HighlightsTittle'

export default function HighlightsMobile() {
    return (
        <Flex
            direction="column"
            bg="black"
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
            display={['flex', 'none', 'none', 'none']}
        >
            <HighlightsTittle />
            <Flex
                alignItems="center"
                justifyContent="center"
                width="95%"
                direction="column"
            >
                <Box position="relative" mb="25px">
                    <Img
                        boxSize="50px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        left="80%"
                    />{' '}
                    <Img
                        boxSize="50px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top="80%"
                        left="-10%"
                    />
                    <Img
                        boxSize="160px"
                        objectFit={'contain'}
                        src="./assets/revista.jpeg"
                        alt="Avitas"
                    />{' '}
                </Box>
                <Box position="relative" mb="35px">
                    <Img
                        boxSize="50px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        left="80%"
                    />{' '}
                    <Img
                        boxSize="50px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top="70%"
                        left="-9%"
                    />
                    <Img
                        boxSize="160px"
                        objectFit={'contain'}
                        src="./assets/mocao.jpeg"
                        alt="Avitas"
                    />{' '}
                </Box>
                <Box position="relative">
                    <Img
                        boxSize="50px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top="80%"
                        left="-9%"
                    />{' '}
                    <Img
                        boxSize="50px"
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top="-5%"
                        left="80%"
                    />
                    <Img
                        boxSize="160px"
                        objectFit={'contain'}
                        src="./assets/jornal.jpeg"
                        alt="Avitas"
                    />{' '}
                </Box>
            </Flex>
        </Flex>
    )
}
