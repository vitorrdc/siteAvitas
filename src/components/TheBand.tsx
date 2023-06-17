import { Flex, Text } from '@chakra-ui/react'
import TheBandTittle from './TheBandTittle'
import TheBandMobile from './TheBandMobile'
import TheBandDesktop from './TheBandDesktop'

export default function TheBand() {
    return (
        <>
            <TheBandDesktop />
            <TheBandMobile />
        </>
    )
}
