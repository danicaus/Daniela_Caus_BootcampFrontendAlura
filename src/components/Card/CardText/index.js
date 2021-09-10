import Box from "../../foundation/layout/Box";
import Text from "../../foundation/Text";

export default function CardText({ description }) {
  return (
    <Box
      padding="0 30px"
      display={{
        xs: "none",
        md: "block"
      }}
    >
      <Text
        as="p"
        variant="paragraph"
        color="tertiary.main"
      >
        {description}
      </Text>
    </Box>
  )
}