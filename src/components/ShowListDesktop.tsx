import { StarIcon } from '@chakra-ui/icons'
import { Flex, Grid, List, ListIcon, ListItem } from '@chakra-ui/react'
import GridItem from './GridItem'

export default function ShowsListDesktop() {
    return (
        <Grid
            templateColumns="repeat(4, 20fr)"
            gap={2}
            justifyContent="center"
            alignItems="center"
            display={['none', 'grid', 'grid', 'grid']}
            mt="10px"
            px="10px"
        >
            <GridItem boxSize={2} fontSize="20px" name="Toca do Leão" />
            <GridItem boxSize={2} fontSize="20px" name="Gamboa" />
            <GridItem boxSize={2} fontSize="20px" name="Suburban Bar" />
            <GridItem boxSize={2} fontSize="20px" name="Cervejaria Burgman" />
            <GridItem boxSize={2} fontSize="20px" name=" Festival Padma" />
            <GridItem boxSize={2} fontSize="20px" name=" Mr. Bowls" />
            <GridItem boxSize={2} fontSize="20px" name="Mascavo" />
            <GridItem boxSize={2} fontSize="20px" name="Madá Bar Brasileiro" />
            <GridItem boxSize={2} fontSize="20px" name="Casinha Ocitocina" />
            <GridItem boxSize={2} fontSize="20px" name="Kart Beer" />
            <GridItem boxSize={2} fontSize="20px" name="Donna Ninpha" />
            <GridItem boxSize={2} fontSize="20px" name="Bar 4:20" />
            <GridItem boxSize={2} fontSize="20px" name="Quintal do Manna" />
            <GridItem boxSize={2} fontSize="20px" name="Coronel Eventos" />
            <GridItem boxSize={2} fontSize="20px" name="Santa Viola" />
            <GridItem boxSize={2} fontSize="20px" name="Pacha " />
            <GridItem boxSize={2} fontSize="20px" name="Mumbai" />
            <GridItem boxSize={2} fontSize="20px" name="Trampo Bar" />
            <GridItem boxSize={2} fontSize="20px" name="Salomé" />
            <GridItem boxSize={2} fontSize="20px" name="In tha House" />
            <GridItem boxSize={2} fontSize="20px" name="Palco Avitas" />
            <GridItem boxSize={2} fontSize="20px" name="Quartel Rock Bar" />
            <GridItem boxSize={2} fontSize="20px" name="Imburanas" />
            <GridItem boxSize={2} fontSize="20px" name="Absurdo" />
            <GridItem boxSize={2} fontSize="20px" name="CNP" />
            <GridItem boxSize={2} fontSize="20px" name=" CNB" />
            <GridItem boxSize={2} fontSize="20px" name="Sound" />
            <GridItem boxSize={2} fontSize="20px" name="Cultura Alternativa" />
            <GridItem boxSize={2} fontSize="20px" name="Kanaloa" />
            <GridItem boxSize={2} fontSize="20px" name=" Donna Skina" />
            <GridItem boxSize={2} fontSize="20px" name="Kanaloa" />
            <GridItem boxSize={2} fontSize="20px" name="Fazenda Cowpig" />
            <GridItem boxSize={2} fontSize="20px" name="Santa Fé Festival" />
            <GridItem boxSize={2} fontSize="20px" name="Terra Brasilis" />
            <GridItem boxSize={2} fontSize="20px" name="Verdi" />
            <GridItem boxSize={2} fontSize="20px" name="We Hostel" />
            <GridItem boxSize={2} fontSize="20px" name=" Festas Privadas" />
            <GridItem boxSize={2} fontSize="20px" name="Pinno's Boliche" />
            <GridItem boxSize={2} fontSize="20px" name="Hangar 393" />
        </Grid>
    )
}
