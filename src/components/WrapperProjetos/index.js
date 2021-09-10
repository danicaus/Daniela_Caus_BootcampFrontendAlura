import Box from "../foundation/layout/Box"



export default function WrapperProjetos({children}) {

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      padding="0 45px"
      width="100%"
      maxWidth={{
        md: "768px",
        lg: "1160px",
        xl: "1222px",
      }}
    >
      {children}
    </Box>
  )
}
