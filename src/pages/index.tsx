import { Flex, Img } from '@chakra-ui/react'
import Header from 'components/Header'
import Aside from 'components/Aside'
import TheBand from 'components/TheBand'
import Highlights from 'components/Highlights'

import Musicians from 'components/Musicians'
import News from 'components/News'
import Shows from 'components/Shows'
import ShowsFormat from 'components/ShowsFormat'
import Hits from 'components/Hits'
import Contact from 'components/Contact'
import OtherBands from 'components/OtherBands'

export default function Home() {
    return (
        <Flex direction="column">
            <Header />
            <Img
                src="./assets/avitas2.jpg"
                alt="Banda Avitas"
                objectFit="fill"
            />
            <Aside />
            <TheBand />
            <News />
            <Musicians />
            <Shows />

            <ShowsFormat />
            <Highlights />
            <OtherBands />
            <Hits />

            <Contact />
        </Flex>
    )
}
