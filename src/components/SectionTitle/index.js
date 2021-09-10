import Text from "../foundation/Text";


export default function SectionTitle(content) {
  return (
    <Text
      as="h2"
      variant="sectionTitle"
      textAlign="center"
      color="primary.main"
      marginTop={{
        xs: "32px",
        md: "64px",
      }}
      marginBottom={{
        xs: "33px",
        md: "85px",
      }}
    >
      {content.content}
    </Text>
  )
}