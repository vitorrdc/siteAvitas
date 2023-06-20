import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { BsFillGeoAltFill } from 'react-icons/bs'

export default function ShowsMobile() {
    return (
        <Flex
            width="98%"
            justifyContent="space-around"
            p="30px"
            display={['flex', 'flex', 'none', 'none']}
        >
            <Flex
                justifyContent="space-around"
                alignItems="center"
                p="15px"
                borderBottom="4px"
                width="full"
                borderColor="green.700"
                bg="red"
            >
                {' '}
                <Img
                    boxSize="85px"
                    objectFit={'cover'}
                    src="https://imagepng.org/wp-content/uploads/2017/11/mapa-brasil-em-branco-5.png"
                    alt="Brasil"
                />{' '}
            </Flex>

            <Box
                border="4px"
                borderRight="none"
                borderBottom="none"
                borderColor="green.700"
                px="15px"
                pt="15px"
                bg="blue"
                minWidth="50%"
            >
                <Text color="white" fontWeight="bold" fontSize="16px">
                    SÃO PAULO/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="14px">
                    MARINGÁ/PR
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="12px">
                    SOROCABA/SP
                </Text>
                <Text color="white" fontWeight="semibold" fontSize="10px">
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
