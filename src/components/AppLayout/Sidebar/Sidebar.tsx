import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <Box sx={{ width: "256px", height: "100vh", 
          padding: "1rem", boxSizing: "border-box", 
          border: "1px solid rgba(0, 0, 0, 0.12)",
          backgroundColor: "#FCFBFA"}}>
        <Box sx={{ display: "flex", gap: "0.25rem"}} component="header">
          <Link to="/">
            <img src="/north-pole-factory-logo-icon.svg" alt="Blue star" />
            <img src="/north-pole-factory-logo-text.svg" alt="North Pole Factory" />
          </Link>
        </Box>
        {children}
    </Box>
  )
}

export default Sidebar