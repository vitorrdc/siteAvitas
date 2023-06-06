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
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    function sendEmail(e: any) {
        e.preventDefault()
        if (name === '' || email === '' || message === '') {
            alert('É Necessário preencher todos os campos.')
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs
            .send(
                'service_gvsltyg',
                'template_9bg41do',
                templateParams,
                '-MkUVZeH2juynUUWu'
            )
            .then(
                (response) => {
                    console.log('Email enviado', response.status, response.text)
                    setName('')
                    setEmail('')
                    setMessage('')
                },
                (err) => {
                    console.log('ERRO ', err)
                }
            )
    }

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
                <Img
                    boxSize="100px"
                    objectFit={'contain'}
                    src="./assets/logo-branco.png"
                    alt="Avitas"
                />
                <FormControl isRequired bg="black" p="20px" borderRadius="10px">
                    <FormLabel color="white">Nome</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        bg="gray.400"
                        mb="20px"
                    />
                    <FormLabel color="white">E-mail</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        bg="gray.400"
                        mb="20px"
                    />
                    <FormLabel color="white">Mensagem</FormLabel>
                    <Input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        bg="gray.400"
                        minHeight="100px"
                    />
                    <Button
                        loadingText="Submitting"
                        colorScheme="green"
                        variant="solid"
                        minW="30%"
                        mt="15px"
                        type="submit"
                        onClick={sendEmail}
                    >
                        Enviar
                    </Button>
                </FormControl>
            </Flex>
        </Flex>
    )
}
