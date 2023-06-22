import { Box, Flex, Img } from '@chakra-ui/react'
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
            <Flex alignItems="center" justifyContent="space-around" width="95%">
                <Box position="relative">
                    <Img
                        boxSize={{ base: '33px', md: '66px', lg: '100px' }}
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        left={{ base: '26%', md: '80%', lg: '80%' }}
                    />{' '}
                    <Img
                        boxSize={{ base: '33px', md: '66px', lg: '100px' }}
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top={{ base: '26%', md: '80%', lg: '80%' }}
                        left={{ base: '-5%', md: '-10%', lg: '-15%' }}
                    />
                    <Img
                        boxSize={{ base: '100px', md: '200px', lg: '300px' }}
                        objectFit={'contain'}
                        src="./assets/revista.jpeg"
                        alt="Avitas"
                    />{' '}
                </Box>
                <Box position="relative">
                    <Img
                        boxSize={{ base: '33px', md: '66px', lg: '100px' }}
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        left={{ base: '26%', md: '80%', lg: '80%' }}
                    />{' '}
                    <Img
                        boxSize={{ base: '33px', md: '66px', lg: '100px' }}
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top={{ base: '26%', md: '70%', lg: '75%' }}
                        left={{ base: '-3%', md: '-9%', lg: '-12%' }}
                    />
                    <Img
                        boxSize={{ base: '100px', md: '200px', lg: '360px' }}
                        objectFit={'contain'}
                        src="./assets/mocao.jpeg"
                        alt="Avitas"
                    />{' '}
                </Box>
                <Box position="relative">
                    <Img
                        boxSize={{ base: '33px', md: '66px', lg: '100px' }}
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top={{ base: '26%', md: '70%', lg: '75%' }}
                        left={{ base: '-3%', md: '-9%', lg: '-12%' }}
                    />{' '}
                    <Img
                        boxSize={{ base: '33px', md: '66px', lg: '100px' }}
                        objectFit={'contain'}
                        src="./assets/fita.png"
                        alt="fita"
                        position="absolute"
                        top={{ base: '-3%', md: '-5%', lg: '-5%' }}
                        left={{ base: '26%', md: '70%', lg: '75%' }}
                    />
                    <Img
                        boxSize={{ base: '100px', md: '150px', lg: '300px' }}
                        objectFit={'contain'}
                        src="./assets/jornal.jpeg"
                        alt="Avitas"
                    />{' '}
                </Box>
            </Flex>
        </Flex>
    )
}
