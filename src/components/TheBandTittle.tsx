import { Flex, Text } from '@chakra-ui/react'

export default function TheBandTittle() {
    return (
        <Flex justifyContent="center" alignItems="center" mb="10px">
            <Text
                color="white"
                fontFamily="body"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                p={2}
            >
                b
            </Text>
            <Text
                color="white"
                fontFamily="body"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                p={2}
            >
                a
            </Text>
            <Text
                color="white"
                fontFamily="body"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                p={2}
            >
                n
            </Text>
            <Text
                color="white"
                fontFamily="body"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                p={2}
            >
                d
            </Text>
            <Text
                color="white"
                fontFamily="body"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                p={2}
            >
                a
            </Text>
        </Flex>
    )
}
