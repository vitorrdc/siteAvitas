import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BsFillGeoAltFill } from 'react-icons/bs'

export default function ShowsDesktop() {
    const [screenWidth, setScreenWidth] = useState<number>(1000)

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, [screenWidth])
    return (
        <Flex
            width="90%"
            justifyContent="space-around"
            p="30px"
            display={['none', 'flex', 'flex', 'flex']}
        >
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
                    whiteSpace={'nowrap'}
                >
                    SÃO PAULO/SP
                </Text>
                <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize={['base', 'lg', 'xl', '3xl']}
                    whiteSpace={'nowrap'}
                >
                    MARINGÁ/PR
                </Text>
                <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize={{ base: 'base', md: 'lg', lg: 'xl' }}
                    whiteSpace={'nowrap'}
                >
                    SOROCABA/SP
                </Text>
                <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    whiteSpace={'nowrap'}
                >
                    BOITUVA/SP
                </Text>
                <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    whiteSpace={'nowrap'}
                >
                    ITAPETININGA/SP
                </Text>
                <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    whiteSpace={'nowrap'}
                >
                    PORTO FELIZ/SP
                </Text>
                <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    whiteSpace={'nowrap'}
                >
                    IPERÓ/SP
                </Text>
                <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    whiteSpace={'nowrap'}
                >
                    MAIRINQUE/SP
                </Text>
                <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    whiteSpace={'nowrap'}
                >
                    IBIÚNA/SP
                </Text>
                <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    whiteSpace={'nowrap'}
                >
                    CERQUILHO/SP
                </Text>
                <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize={{ base: 'base', md: 'medium', lg: 'lg' }}
                    whiteSpace={'nowrap'}
                >
                    TATUÍ/SP
                </Text>
            </Box>
        </Flex>
    )
}
