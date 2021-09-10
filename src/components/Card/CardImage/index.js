import Box from "../../foundation/layout/Box";
import Text from "../../foundation/Text";

export default function CardImage({ highlight, image, description}) {

  return (
    <Box
      position="relative"
    >
      <img 
        alt={description} 
        src={image}  
      />
      {highlight ? 
        (
          <Box
          position="absolute"
          border="1px solid"
          borderColor="borders.tertiary"
          backgroundColor="background.light"
          padding={{
            xs: "2px 30px",
            md: "2px 40px",
          }}
          top={{
            xs: "5px",  
            md: "12px"
          }}
          left={{
            xs: "5px",
            md: "12px"
          }}
          >
            <Text
              as="p"
              variant="cardHighlight"
              color="primary.main"
            >
              Destaque
            </Text>
          </Box>
        ) : ''
      }
    </Box>
  )
}