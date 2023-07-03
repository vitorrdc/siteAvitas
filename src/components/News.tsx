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
            px={{ base: '5px', md: '15px', lg: '30px' }}
        >
            <Heading
                lineHeight="tall"
                textAlign="center"
                fontSize={{ base: 'xl', md: '4xl', lg: '5xl' }}
                color="gray.600"
            >
                <Highlight
                    query={['1 música', '45 dias']}
                    styles={{
                        px: '2',
                        py: '0.5',
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
                fontSize={{ base: 'xl', md: '3xl', lg: '5xl' }}
                mt="20px"
                fontWeight="bold"
            >
                MÚSICA 1.
            </Box>

            <Flex
                width="88%"
                mt="35px"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text
                    color="gray.400"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    ml={{ base: '2px', md: '12px', lg: '36px' }}
                    fontWeight="medium"
                    width="50%"
                >
                    MÚSICA.
                </Text>
                <Text
                    color="gray.400"
                    fontSize={{ base: 'sm', md: 'medium', lg: 'lg' }}
                    mb="45px"
                    fontWeight="semibold"
                >
                    MÚSICA.
                </Text>
            </Flex>

            <Text
                color="gray.400"
                fontSize={{ base: 'medium', md: 'lg', lg: 'xl' }}
                mt={{ base: '8px', md: '16px', lg: '24px' }}
                mr={['30px', '50px', '60px', '80px']}
            >
                MÚSICA.
            </Text>
            <Text
                color="gray.400"
                fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
                mt={{ base: '24px', md: '32px', lg: '48px' }}
                ml={['50px', '150px', '250px', '50%']}
            >
                NOME DA MÚSICA.
            </Text>
        </Flex>
    )
}
