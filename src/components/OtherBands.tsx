import { Flex, Img, Text } from '@chakra-ui/react'
import OtherBandsTittle from './OtherBandsTittle'

export default function OtherBands() {
    return (
        <Flex
            direction="column"
            backgroundColor="black"
            justifyContent="center"
            alignItems="center"
            pt={10}
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
        >
            <OtherBandsTittle />
            <Flex
                justifyContent="space-around"
                alignItems="center"
                width="full"
            >
                <Img
                    boxSize="150px"
                    objectFit={'contain'}
                    src="./assets/matosecocerto.png"
                    alt="Logo Mato Seco"
                />

                <Img
                    boxSize="200px"
                    objectFit={'contain'}
                    src="./assets/maneva.png"
                    alt="Logo Maneva"
                />
                <Img
                    boxSize="150px"
                    objectFit={'contain'}
                    src="./assets/CVS.png"
                    alt="Logo Cidade Verde Sounds"
                />
                <Img
                    boxSize="150px"
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
                {' '}
                <Img
                    boxSize="180px"
                    objectFit={'contain'}
                    src="./assets/netotrindade.png"
                    alt="Logo Neto Trindade"
                />
                <Text color="white" fontSize="7xl" fontWeight="bold">
                    VITÃO
                </Text>
                <Img
                    boxSize="250px"
                    objectFit={'contain'}
                    src="./assets/maskavo.png"
                    alt="Logo Maskavo"
                />
                <Img
                    boxSize="150px"
                    objectFit={'contain'}
                    src="./assets/ventania.png"
                    alt="Logo Ventania"
                    borderRadius="full"
                />
            </Flex>
            <Flex
                justifyContent="space-around"
                alignItems="center"
                width="full"
            >
                <Img
                    boxSize="120px"
                    objectFit={'contain'}
                    src="./assets/pedroangi.png"
                    alt="Logo Pedro Angi"
                />
                <Img
                    boxSize="180px"
                    objectFit={'contain'}
                    src="./assets/luccascarlos.png"
                    alt="Logo Luccas Carlos"
                />
            </Flex>
        </Flex>
    )
}
