import Box from "../../foundation/layout/Box";
import Text from "../../foundation/Text";
import PropTypes from 'prop-types';


function CardImage({ highlight, image }) {

  const hightlightProjectImage = (
    <Box
      position="relative"
      overflow="hidden"
      backgroundImage={image}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      width={{
        xs: "288px",
        md: "593px",
      }}
      height={{
        xs: "177px",
        md: "320px"
      }}
    >
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
    </Box>
  )

  const normalProjectImage = (
    <Box
      position="relative"
      overflow="hidden"
      backgroundImage={image}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      width="288px"
      height={{
        xs: "177px",
        md: "390px"
      }}
    >

    </Box>
  )

  return (
    highlight ? hightlightProjectImage : normalProjectImage
  )
};

CardImage.propType = { 
  highlight: PropTypes.bool.isRequired, 
  image: PropTypes.string.isRequired,
};

export default CardImage;