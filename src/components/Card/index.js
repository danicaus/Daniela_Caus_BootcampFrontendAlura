import Box from "../foundation/layout/Box"
import CardImage from "./CardImage"
import CardTitle from "./CardTitle"
import CardText from "./CardText"



export default function Card({ infoProjeto }) {
  
  const highlightProject = (
    <Box
    display="flex"
    flexDirection={{
      xs: "column",
      md: "row"
    }}
    border="1px solid"
    borderColor="borders.main"
  >
    <CardImage 
      highlight={infoProjeto.highlight} 
      image={infoProjeto.image}
      description={infoProjeto.description}
    />
    <Box
      display="flex"
      flexDirection="column"
    >
      <CardTitle 
        title={infoProjeto.title}
        highlight={infoProjeto.highlight} 
      />
      <CardText 
        description={infoProjeto.description}
      />
    </Box>
  </Box>
  )

  const normalProject = (
    <Box
    display="flex"
    flexDirection="column"
    border="1px solid"
    borderColor="borders.main"
  >
    <CardImage 
      highlight={infoProjeto.highlight} 
      image={infoProjeto.image}
      description={infoProjeto.description}
    />
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CardTitle 
        title={infoProjeto.title}
      />
    </Box>
  </Box>
  )

  return (
    infoProjeto.highlight ? highlightProject : normalProject
  )
}