import { StarIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'

interface Declaration {
    name: string
    boxSize: number
    fontSize: string
}

export default function GridItem(props: Declaration) {
    return (
        <Flex alignItems="center">
            <StarIcon color="green.700" boxSize={props.boxSize} />
            <Text color="white" fontSize={props.fontSize} ml="4px">
                {props.name}
            </Text>
        </Flex>
    )
}
