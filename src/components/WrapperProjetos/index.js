import Box from "../foundation/layout/Box"



export default function WrapperProjetos({children}) {

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      padding={{
        xs: "0 40px",  
        md: "0 45px"
      }}
      gap={{
        xs: "32px",
        md: "18px 30px",
      }}
      margin="0 auto 50px"
      width="100%"
      maxWidth={{
        md: "685px",
        lg: "1020px",
      }}
    >
      {children}
    </Box>
  )
}
