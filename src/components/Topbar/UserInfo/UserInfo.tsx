import Star from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import useUser from "../../../auth/useUser";


const UserInfo = () => {
  const {profileImg} = useUser();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
      <Box>
        {[1,2,3,4,5].map(() => <Star sx={{ color: "gray", padding: "0.15rem"}} />)}
      </Box>
      <Box component="div" sx={{
        border: "1px solid black",
        borderRadius: "50%", backgroundSize: "cover",
        width: '40px', height: '40px', backgroundImage: `url(${profileImg})`
      }}/>
    </Box>
  )
}

export default UserInfo
