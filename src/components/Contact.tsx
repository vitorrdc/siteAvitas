import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Img,
    Input,
    Text
} from '@chakra-ui/react'
import ContactTittle from './ContactTittle'

export default function Contact() {
    return (
        <Flex
            backgroundImage="url('./assets/paredeVerde.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            direction="column"
            justifyContent="center"
            alignItems="center"
            p="30px"
        >
            <ContactTittle />

            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                minW="50%"
            >
                <FormControl isRequired bg="black" p="20px" borderRadius="10px">
                    <FormLabel color="white">Nome</FormLabel>
                    <Input bg="gray.800" mb="20px" />
                    <FormLabel color="white">E-mail</FormLabel>
                    <Input bg="gray.800" mb="20px" />
                    <FormLabel color="white">Mensagem</FormLabel>
                    <Input bg="gray.800" minHeight="100px" />
                    <Button
                        loadingText="Submitting"
                        colorScheme="green"
                        variant="solid"
                        minW="30%"
                        mt="15px"
                    >
                        Enviar
                    </Button>
                </FormControl>
            </Flex>
        </Flex>
    )
}
