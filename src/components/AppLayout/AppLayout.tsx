import { Outlet, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Star from '@mui/icons-material/Star';
import { paths } from '../../paths';
import Sidebar from './Sidebar';
import ModalPackage from '../ModalPackage';


const AppLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar> 
        <List component="nav">
          {paths.map(({ path, label, iconComponent }) => (
            <ListItem component={Link} key={path} to={path}>
              <ListItemIcon sx={{ minWidth: "36px"}}>{iconComponent ? iconComponent : <Star />}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Sidebar>
      <Box sx={{ flexGrow: 1 , display: "flex", flexDirection: "column" }}>
        <ModalPackage/>
      </Box>
    </Box>
  )
}

export default AppLayout