import { Flex, Text } from '@chakra-ui/react'

export default function TheBandTittle() {
    return (
        <Flex justifyContent="center" alignItems="center" mb="10px">
            <Text
                color="white"
                fontFamily="body"
                fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                p={{ base: '4px', md: '8px', lg: '8px' }}
            >
                b
            </Text>
            <Text
                color="white"
                fontFamily="body"
                fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                p={{ base: '4px', md: '8px', lg: '8px' }}
            >
                a
            </Text>
            <Text
                color="white"
                fontFamily="body"
                fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                p={{ base: '4px', md: '8px', lg: '8px' }}
            >
                n
            </Text>
            <Text
                color="white"
                fontFamily="body"
                fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                p={{ base: '4px', md: '8px', lg: '8px' }}
            >
                d
            </Text>
            <Text
                color="white"
                fontFamily="body"
                fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                p={{ base: '4px', md: '8px', lg: '8px' }}
            >
                a
            </Text>
        </Flex>
    )
}
