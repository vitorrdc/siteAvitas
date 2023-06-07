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
            <Heading lineHeight="tall">
                <Highlight
                    query={['1 música', '45 dias']}
                    styles={{
                        px: '2',
                        py: '1',
                        rounded: 'full',
                        bg: 'green.500'
                    }}
                >
                    Ainda em 2023, 1 música à cada 45 dias.
                </Highlight>
            </Heading>

            <Box color="gray.400" fontSize="6xl" mt="20px" fontWeight="bold">
                ILUMINAR.
            </Box>

            <Flex width="full" mt="35px">
                <Text
                    color="gray.400"
                    fontSize="4xl"
                    ml="36"
                    fontWeight="medium"
                >
                    CABEÇA À TOA.
                </Text>
                <Text
                    color="gray.400"
                    fontSize="2xl"
                    mb="45px"
                    ml="96"
                    fontWeight="semibold"
                >
                    SERÁ.
                </Text>
            </Flex>

            <Text color="gray.400" fontSize="3xl" mr="100px">
                DIZ QUE GOSTA QUANDO.
            </Text>
            <Text color="gray.400" fontSize="5xl" ml="700px">
                FLOR DO PÉ.
            </Text>
        </Flex>
    )
}
