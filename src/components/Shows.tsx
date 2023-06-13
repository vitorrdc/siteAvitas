'use client'

import {
    Box,
    Flex,
    Img,
    List,
    ListIcon,
    ListItem,
    Text
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { BsFillGeoAltFill } from 'react-icons/bs'
import ShowsTittle from './ShowsTittle'
import { useEffect, useState } from 'react'

export default function Shows() {
    const [screenWidth, setScreenWidth] = useState<number>(1000)

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, [screenWidth])

    return (
        <Flex
            direction="column"
            background="black"
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
            alignItems="center"
            pt={10}
        >
            <ShowsTittle />
            <Flex width="90%" justifyContent="space-around" p="30px">
                <Flex
                    justifyContent="space-around"
                    alignItems="center"
                    p="15px"
                    borderBottom="4px"
                    width="full"
                    borderColor="green.700"
                >
                    {' '}
                    <Img
                        boxSize={['100px', '180px', '300px', '500px']}
                        objectFit={'cover'}
                        src="https://imagepng.org/wp-content/uploads/2017/11/mapa-brasil-em-branco-5.png"
                        alt="Brasil"
                    />{' '}
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {screenWidth <= 1024 ? (
                            <BsFillGeoAltFill color="white" size={60} />
                        ) : (
                            <BsFillGeoAltFill color="white" size={150} />
                        )}

                        <Text
                            color="green.700"
                            fontSize={['base', 'lg', 'xl', '2xl']}
                            fontWeight="semibold"
                        >
                            Localidades
                        </Text>
                    </Flex>
                </Flex>

                <Box
                    border="4px"
                    borderRight="none"
                    borderBottom="none"
                    borderColor="green.700"
                    px="15px"
                    pt="15px"
                    width="40%"
                >
                    <Text
                        color="white"
                        fontWeight="bold"
                        fontSize={['base', 'lg', 'xl', '4xl']}
                    >
                        SÃO PAULO/SP
                    </Text>
                    <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize={['base', 'lg', 'xl', '3xl']}
                    >
                        MARINGÁ/PR
                    </Text>
                    <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize={{ base: 'base', md: 'lg', lg: 'xl' }}
                    >
                        SOROCABA/SP
                    </Text>
                    <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    >
                        BOITUVA/SP
                    </Text>
                    <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    >
                        ITAPETININGA/SP
                    </Text>
                    <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    >
                        PORTO FELIZ/SP
                    </Text>
                    <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    >
                        IPERÓ/SP
                    </Text>
                    <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    >
                        MAIRINQUE/SP
                    </Text>
                    <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    >
                        IBIÚNA/SP
                    </Text>
                    <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    >
                        CERQUILHO/SP
                    </Text>
                    <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    >
                        TATUÍ/SP
                    </Text>
                </Box>
            </Flex>
            <Text color="green.700" fontSize="2xl" fontWeight="semibold">
                Casas de Show
            </Text>
            <Flex justifyContent="space-around" alignItems="center" p="30px">
                <List spacing={3} mr="30px">
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Toca do Leão
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Gamboa
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Suburban Bar'N Grill
                    </ListItem>

                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Madá Bar Brasileiro
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Cervejaria Burgman
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Festival Woodstoca Ufscar{' '}
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Festival Padma
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Mr. Bowls
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Mascavo
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Madá Bar Brasileiro
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Casinha Ocitocina
                    </ListItem>
                </List>
                <List spacing={3} mr="30px">
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Kart Beer
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Donna Ninpha
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Bar 4:20
                    </ListItem>

                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Festival de Rua
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Quintal do Manna
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Coronel Eventos
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Santa Viola
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Pacha Skateboard
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Mumbai
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Trampo Bar
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Salomé
                    </ListItem>
                </List>
                <List spacing={3} mr="30px">
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        In tha House
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Estúdio Palco Avitas
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Quartel Rock Bar
                    </ListItem>

                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Imburanas
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Absurdo
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Centro Nacional de Paraquedismo
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Centro Nacional de Balonismo
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Sound
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Cultura Alternativa
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Kanaloa
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Donna Skina
                    </ListItem>
                </List>
                <List spacing={3} mr="30px">
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Fazenda Cowpig
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Santa Fé Festival
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Terra Brasilis
                    </ListItem>

                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Verdi
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        We Hostel
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Festas Privadas
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Pinno's Boliche
                    </ListItem>
                    <ListItem
                        color="white"
                        fontSize={{ base: 'base', md: 'medium', lg: 'xl' }}
                    >
                        <ListIcon as={StarIcon} color="green.700" />
                        Hangar 393
                    </ListItem>
                </List>
            </Flex>
        </Flex>
    )
}
