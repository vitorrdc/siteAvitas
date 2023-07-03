import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Img,
    Input
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
            p={{ base: '15px', md: '20px', lg: '30px' }}
        >
            <ContactTittle />

            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                minW="75%"
            >
                <Img
                    boxSize="100px"
                    objectFit={'contain'}
                    src="./assets/logo-branco.png"
                    alt="Avitas"
                />
                <FormControl
                    isRequired
                    bg="black"
                    p={{ base: '10px', md: '20px', lg: '20px' }}
                    borderRadius="10px"
                >
                    <FormLabel
                        color="white"
                        fontSize={{ base: '10px', md: '12px', lg: '16px' }}
                    >
                        Nome
                    </FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        bg="gray.400"
                        mb="20px"
                        height={{ base: '20px', md: '30px', lg: '30px' }}
                    />
                    <FormLabel
                        color="white"
                        fontSize={{ base: '10px', md: '12px', lg: '16px' }}
                    >
                        E-mail
                    </FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        bg="gray.400"
                        mb="20px"
                        height={{ base: '20px', md: '30px', lg: '30px' }}
                    />
                    <FormLabel
                        color="white"
                        fontSize={{ base: '10px', md: '12px', lg: '16px' }}
                    >
                        Mensagem
                    </FormLabel>
                    <Input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        bg="gray.400"
                        minHeight="100px"
                        height={{ base: '20px', md: '30px', lg: '30px' }}
                    />
                    <Button
                        loadingText="Submitting"
                        colorScheme="green"
                        variant="solid"
                        mt="15px"
                        type="submit"
                        onClick={sendEmail}
                        fontSize={{ base: '10px', md: '12px', lg: '16px' }}
                        width="100%"
                        height={{ base: '24px', md: '32px', lg: '40px' }}
                    >
                        Enviar
                    </Button>
                </FormControl>
            </Flex>
        </Flex>
    )
}
