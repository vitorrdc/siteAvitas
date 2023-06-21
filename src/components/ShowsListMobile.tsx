import { StarIcon } from '@chakra-ui/icons'
import { Flex, Grid, List, ListIcon, ListItem } from '@chakra-ui/react'
import GridItem from './GridItem'

export default function ShowsListMobile() {
    return (
        <Grid
            templateColumns="repeat(2, 10fr)"
            gap={1}
            justifyContent="center"
            alignItems="center"
            display={['grid', 'none', 'none', 'none']}
            mt="10px"
            px="10px"
        >
            <GridItem boxSize={2} fontSize="12px" name="Toca do Leão" />
            <GridItem boxSize={2} fontSize="12px" name="Gamboa" />
            <GridItem boxSize={2} fontSize="12px" name="Suburban Bar" />
            <GridItem boxSize={2} fontSize="12px" name="Cervejaria Burgman" />
            <GridItem boxSize={2} fontSize="12px" name=" Festival Padma" />
            <GridItem boxSize={2} fontSize="12px" name=" Mr. Bowls" />
            <GridItem boxSize={2} fontSize="12px" name="Mascavo" />
            <GridItem boxSize={2} fontSize="12px" name="Madá Bar Brasileiro" />
            <GridItem boxSize={2} fontSize="12px" name="Casinha Ocitocina" />
            <GridItem boxSize={2} fontSize="12px" name="Kart Beer" />
            <GridItem boxSize={2} fontSize="12px" name="Donna Ninpha" />
            <GridItem boxSize={2} fontSize="12px" name="Bar 4:20" />
            <GridItem boxSize={2} fontSize="12px" name="Quintal do Manna" />
            <GridItem boxSize={2} fontSize="12px" name="Coronel Eventos" />
            <GridItem boxSize={2} fontSize="12px" name="Santa Viola" />
            <GridItem boxSize={2} fontSize="12px" name="Pacha " />
            <GridItem boxSize={2} fontSize="12px" name="Mumbai" />
            <GridItem boxSize={2} fontSize="12px" name="Trampo Bar" />
            <GridItem boxSize={2} fontSize="12px" name="Salomé" />
            <GridItem boxSize={2} fontSize="12px" name="In tha House" />
            <GridItem boxSize={2} fontSize="12px" name="Palco Avitas" />
            <GridItem boxSize={2} fontSize="12px" name="Quartel Rock Bar" />
            <GridItem boxSize={2} fontSize="12px" name="Imburanas" />
            <GridItem boxSize={2} fontSize="12px" name="Absurdo" />
            <GridItem boxSize={2} fontSize="12px" name="CNP" />
            <GridItem boxSize={2} fontSize="12px" name=" CNB" />
            <GridItem boxSize={2} fontSize="12px" name="Sound" />
            <GridItem boxSize={2} fontSize="12px" name="Cultura Alternativa" />
            <GridItem boxSize={2} fontSize="12px" name="Kanaloa" />
            <GridItem boxSize={2} fontSize="12px" name=" Donna Skina" />
            <GridItem boxSize={2} fontSize="12px" name="Kanaloa" />
            <GridItem boxSize={2} fontSize="12px" name="Fazenda Cowpig" />
            <GridItem boxSize={2} fontSize="12px" name="Santa Fé Festival" />
            <GridItem boxSize={2} fontSize="12px" name="Terra Brasilis" />
            <GridItem boxSize={2} fontSize="12px" name="Verdi" />
            <GridItem boxSize={2} fontSize="12px" name="We Hostel" />
            <GridItem boxSize={2} fontSize="12px" name=" Festas Privadas" />
            <GridItem boxSize={2} fontSize="12px" name="Pinno's Boliche" />
            <GridItem boxSize={2} fontSize="12px" name="Hangar 393" />
        </Grid>
    )
}
