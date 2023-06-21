import { Flex, Text } from '@chakra-ui/react'
import TheBandTittle from './TheBandTittle'

export default function TheBandMobile() {
    return (
        <Flex
            bg="black"
            px={3}
            pt={5}
            pb={5}
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
            display={['flex', 'none', 'none', 'none']}
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            {' '}
            <TheBandTittle />
            <Text color="white" fontSize="12px" textAlign="justify">
                Avitas é uma banda autoral formada em 2013, na cidade de
                Boituva-SP, à partir da junção de amigos que decidiram tocar um
                som sincero. No ano de 2017 a banda teve um hiato, e retomou as
                atividades no ano de 2018, momento o qual iniciou os lançamentos
                nas plataformas de Stream. O grupo já esteve ao lado de grandes
                nomes do cenário alternativo, como Cidade Verde Sounds, Maskavo,
                Nazireu Rupestre, Mato Seco, Luccas Carlos, Maneva, Neto
                Trindade Vitão e Ventania. Neste ano de 2023, o foco do grupo
                será a retomada das músicas autorais. Em processo de
                pré-produção, a Avitas conta com 5 singles que serão lançados
                após o meio do ano.
            </Text>
            <Text
                width="90%"
                textAlign="center"
                fontSize="28px"
                color="white"
                fontWeight="bold"
                mt="20px"
            >
                #HipRockRoots
            </Text>
        </Flex>
    )
}
