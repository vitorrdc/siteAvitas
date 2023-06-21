import { StarIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    Img,
    List,
    ListIcon,
    ListItem,
    Text
} from '@chakra-ui/react'
import { BsFillGeoAltFill } from 'react-icons/bs'

export default function ShowsMobile() {
    return (
        <Flex
            width="98%"
            py="30px"
            px="10px"
            display={['flex', 'none', 'none', 'none']}
        >
            <Flex
                justifyContent="space-around"
                alignItems="center"
                borderBottom="4px"
                width="full"
                borderColor="green.700"
            >
                {' '}
                <Img
                    boxSize="70px"
                    objectFit={'cover'}
                    src="https://imagepng.org/wp-content/uploads/2017/11/mapa-brasil-em-branco-5.png"
                    alt="Brasil"
                />{' '}
            </Flex>

            <Box
                border="2px"
                borderRight="none"
                borderBottom="none"
                borderColor="green.700"
                px="5px"
                pt="5px"
                minWidth="auto"
            >
                <Text
                    color="white"
                    fontWeight="bold"
                    fontSize="16px"
                    whiteSpace="nowrap"
                >
                    SÃO PAULO/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="12px">
                    MARINGÁ/PR
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="10px">
                    SOROCABA/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="8px">
                    BOITUVA/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="8px">
                    ITAPETININGA/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="8px">
                    PORTO FELIZ/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="8px">
                    IPERÓ/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="8px">
                    MAIRINQUE/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="8px">
                    IBIÚNA/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="8px">
                    CERQUILHO/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="8px">
                    TATUÍ/SP
                </Text>
            </Box>
        </Flex>
    )
}
