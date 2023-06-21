'use client'

import {
    Box,
    Flex,
    Img,
    List,
    ListIcon,
    ListItem,
    Text
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { BsFillGeoAltFill } from 'react-icons/bs'
import ShowsTittle from './ShowsTittle'
import { useEffect, useState } from 'react'
import ShowsMobile from './ShowsMobile'
import ShowsDesktop from './ShowsDesktop'
import ShowsListMobile from './ShowsListMobile'
import { FaCloudShowersHeavy } from 'react-icons/fa'
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
            pt={10}
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
