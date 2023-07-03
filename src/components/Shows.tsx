'use client'

import { Flex, Text } from '@chakra-ui/react'

import ShowsTittle from './ShowsTittle'

import ShowsMobile from './ShowsMobile'
import ShowsDesktop from './ShowsDesktop'
import ShowsListMobile from './ShowsListMobile'
import ShowsListDesktop from './ShowListDesktop'

export default function Shows() {
    return (
        <Flex
            direction="column"
            background="black"
            backgroundImage="url('./assets/skyandstars.png')"
            bgRepeat="repeat"
            bgSize="contain"
            alignItems="center"
            pt={{ base: '10px', md: '20px', lg: '20px' }}
        >
            <ShowsTittle />
            <ShowsDesktop />
            <ShowsMobile />
            <Text
                color="green.700"
                fontSize={{ base: 'lg', md: 'xl', lg: '3xl' }}
                fontWeight="semibold"
            >
                Casas de Show
            </Text>
            <ShowsListDesktop />
            <ShowsListMobile />
        </Flex>
    )
}
