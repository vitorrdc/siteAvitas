import { Flex, Text } from '@chakra-ui/react'
import TheBandTittle from './TheBandTittle'
import Tittles from './TheBandTittle'

export default function TheBand() {
    return (
        <Flex
            bg="black"
            px={10}
            pt={5}
            pb={20}
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
        >
            <Flex direction="column" w="50%">
                {' '}
                <TheBandTittle />
                <Text color="white">
                    Avitas é uma banda autoral formada em 2013, na cidade de
                    Boituva-SP, à partir da junção de amigos que decidiram tocar
                    um som sincero. No ano de 2017 a banda teve um hiato, e
                    retomou as atividades no ano de 2018, momento o qual iniciou
                    os lançamentos nas plataformas de Stream. O grupo já esteve
                    ao lado de grandes nomes do cenário alternativo, como Cidade
                    Verde Sounds, Maskavo, Nazireu Rupestre, Mato Seco, Luccas
                    Carlos, Maneva, Neto Trindade Vitão e Ventania. Neste ano de
                    2023, o foco do grupo será a retomada das músicas autorais.
                    Em processo de pré-produção, a Avitas conta com 5 singles
                    que serão lançados após o meio do ano.
                </Text>
            </Flex>
            <Text
                width="50%"
                textAlign="center"
                fontSize={60}
                color="white"
                fontWeight="bold"
                mt="auto"
                mb="auto"
            >
                #HipRockRoots
            </Text>
        </Flex>
    )
}
