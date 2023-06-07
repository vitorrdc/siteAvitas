import { Flex, Img, Text } from '@chakra-ui/react'
import ShowsFormatTittle from './ShowsFormatTittle'

export default function ShowsFormat() {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            background="black"
        >
            <Img
                src="./assets/fotoPB2.jpg"
                alt="Banda Avitas"
                boxSize="100%"
                objectFit="contain"
            />
            <ShowsFormatTittle />
            <Flex
                width="full"
                px="15%"
                backgroundImage="url('./assets/skyandstars.png')"
                bgRepeat="repeat"
                bgSize="cover"
                direction="column"
            >
                <Text
                    color="black"
                    fontWeight="bold"
                    fontSize={35}
                    textAlign="center"
                    mt="30px"
                    bg="green.700"
                    borderRadius="full"
                >
                    Casa de Shows
                </Text>
                <Text color="gray.300" fontSize={20} mt="15px">
                    Nessa modalidade a banda se apresenta em seu formato palco.
                    Este show conta com um repertório misto contando com covers,
                    entre eles os maiores sucessos do país, indo do rap ao rock,
                    passando pelo reggae, e também traz, como grande marca, as
                    músicas autorais.
                </Text>
                <Text fontWeight="bold" fontSize={20} color="gray.300">
                    Duração: 1:30 a 2h.
                </Text>
            </Flex>
            <Flex
                width="full"
                px="15%"
                backgroundImage="url('./assets/skyandstars.png')"
                bgRepeat="repeat"
                bgSize="cover"
                direction="column"
            >
                <Text
                    color="black"
                    fontWeight="bold"
                    fontSize={35}
                    textAlign="center"
                    mt="30px"
                    bg="green.700"
                    borderRadius="full"
                >
                    Bares/Festas Privadas
                </Text>
                <Text color="gray.300" fontSize={20} mt="15px">
                    Para apresentações em bares e/ou festas privadas, a Banda
                    Avitas conta com um formato de show adaptado para a ocasião.
                    O repertório para essas finalidades possui uma gama maior de
                    estilos musicais, variando entre sucessos do Rock, Reggae,
                    Mpb, Dance, Rap e mais.
                </Text>
                <Text fontWeight="bold" fontSize={20} color="gray.300">
                    Duração: 1:30 a 3h (com pausa de 20 min).
                </Text>
            </Flex>
        </Flex>
    )
}
