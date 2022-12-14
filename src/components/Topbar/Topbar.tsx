import Box from "@mui/system/Box";
import UserInfo from "./UserInfo";

interface TopBarProps {
    children: React.ReactNode;
}

const Topbar = ({children}: TopBarProps) => {
  return (
    <Box sx={{
        boxSizing: "border-box",
        height: "60px", padding: "0 1rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        backgroundColor: "#FCFBFA", boxShadow: "box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)"
      }}>
      {children}
      <UserInfo />
    </Box>
  )
}

export default Topbar;