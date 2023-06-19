import { Img } from '@chakra-ui/react'

interface Declaration {
    src: string
    alt: string
}

export default function Avatar(props: Declaration) {
    return (
        <Img
            boxSize="55px"
            borderRadius="full"
            objectFit={'cover'}
            src={props.src}
            alt={props.alt}
        />
    )
}
