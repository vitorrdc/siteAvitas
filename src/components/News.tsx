import { Flex, Text, Box, Heading, Highlight } from '@chakra-ui/react'

export default function News() {
    return (
        <Flex
            direction="column"
            backgroundColor="black"
            justifyContent="center"
            alignItems="center"
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
            p="30px"
        >
            <Heading lineHeight="tall" textAlign="center" width="100%">
                <Highlight
                    query={['1 música', '45 dias']}
                    styles={{
                        px: '2',
                        py: '1',
                        rounded: 'full',
                        bg: 'green.500',
                        textAlign: 'center'
                    }}
                >
                    Ainda em 2023, 1 música à cada 45 dias.
                </Highlight>
            </Heading>

            <Box
                color="gray.400"
                fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
                mt="20px"
                fontWeight="bold"
            >
                ILUMINAR.
            </Box>

            <Flex
                width="88%"
                mt="35px"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text
                    color="gray.400"
                    fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
                    ml={{ base: '16px', md: '12px', lg: '36px' }}
                    fontWeight="medium"
                    width="50%"
                >
                    CABEÇA À TOA.
                </Text>
                <Text
                    color="gray.400"
                    fontSize="2xl"
                    mb="45px"
                    fontWeight="semibold"
                >
                    SERÁ.
                </Text>
            </Flex>

            <Text
                color="gray.400"
                fontSize="3xl"
                mt={{ base: '8px', md: '16px', lg: '24px' }}
                ml={['24px', '40px', '60px', '80px']}
            >
                DIZ QUE GOSTA QUANDO.
            </Text>
            <Text
                color="gray.400"
                fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
                mt={{ base: '8px', md: '16px', lg: '24px' }}
                ml={['24px', '40px', '250px', '650px']}
            >
                FLOR DO PÉ.
            </Text>
        </Flex>
    )
}
