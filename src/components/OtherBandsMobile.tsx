import { Flex, Img, Text } from '@chakra-ui/react'
import OtherBandsTittle from './OtherBandsTittle'

export default function OtherBandsMobile() {
    return (
        <Flex
            direction="column"
            backgroundColor="black"
            justifyContent="center"
            alignItems="center"
            pt={{ base: '10px', md: '20px', lg: '30px' }}
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
            display={['flex', 'none', 'none', 'none']}
        >
            <OtherBandsTittle />
            <Flex
                justifyContent="space-around"
                alignItems="center"
                width={{ base: '100%', md: '88%', lg: '88%' }}
                mb="5px"
            >
                <Img
                    boxSize={{ base: '45px', md: '100px', lg: '150px' }}
                    objectFit={'contain'}
                    src="./assets/matosecocerto.png"
                    alt="Logo Mato Seco"
                />

                <Img
                    boxSize={{ base: '55px', md: '130px', lg: '200px' }}
                    objectFit={'contain'}
                    src="./assets/maneva.png"
                    alt="Logo Maneva"
                />
                <Img
                    boxSize={{ base: '45px', md: '100px', lg: '150px' }}
                    objectFit={'contain'}
                    src="./assets/CVS.png"
                    alt="Logo Cidade Verde Sounds"
                />
            </Flex>
            <Flex
                justifyContent="space-around"
                alignItems="center"
                width={{ base: '100%', md: '88%', lg: '88%' }}
                mb="5px"
            >
                {' '}
                <Img
                    boxSize={{ base: '55px', md: '120px', lg: '180px' }}
                    objectFit={'contain'}
                    src="./assets/netotrindade.png"
                    alt="Logo Neto Trindade"
                />
                <Text
                    color="white"
                    fontSize={{ base: 'xl', md: '4xl', lg: '7xl' }}
                    fontWeight="bold"
                >
                    VITÃO
                </Text>
                <Img
                    boxSize={{ base: '50px', md: '166px', lg: '250px' }}
                    objectFit={'contain'}
                    src="./assets/luccascarlos.png"
                    alt="Logo Maskavo"
                />
            </Flex>
            <Flex
                justifyContent="space-around"
                alignItems="center"
                width="full"
            >
                <Img
                    boxSize={{ base: '40px', md: '80px', lg: '120px' }}
                    objectFit={'contain'}
                    src="./assets/pedroangi.png"
                    alt="Logo Pedro Angi"
                />
                <Img
                    boxSize={{ base: '60px', md: '120px', lg: '180px' }}
                    objectFit={'contain'}
                    src="./assets/maskavo.png"
                    alt="Logo Luccas Carlos"
                />
                <Img
                    boxSize={{ base: '45px', md: '100px', lg: '150px' }}
                    objectFit={'contain'}
                    src="./assets/nazireu.png"
                    alt="Logo Nazireu Rupestre"
                />
            </Flex>
            <Flex
                justifyContent="space-around"
                alignItems="center"
                width="full"
            >
                <Img
                    boxSize={{ base: '50px', md: '100px', lg: '150px' }}
                    objectFit={'contain'}
                    src="./assets/ventania.png"
                    alt="Logo Ventania"
                    borderRadius="full"
                />
            </Flex>
        </Flex>
    )
}
