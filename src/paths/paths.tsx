import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Distribution from './pages/Distribution';
import Letters from './pages/Letters';
import Packages from './pages/Packages';

interface PathType {
    /** You will find the route in http://localhost:3000/${path} */
    path: string;
    /** Content of the page */ 
    pageComponent: React.ReactNode;
    /** Visible in the sidebar navigation */
    label: string;
    /** Visible in the sidebar navigation */
    iconComponent?: React.ReactNode;
  }

/**
  * Adding an object to that array will add a new route in the app. 
  * It will also automatically display the route in a sidebar navigation
*/
export const paths: PathType[] = [{
    path: "letters",
    label: "Listy",
    iconComponent: <MailOutlineIcon />,
    pageComponent: <Letters />
  },
  {
    path: "packages",
    label: "Pakowanie",
    pageComponent: <Packages />
  },
  {
    path: "distribution",
    label: "Dystrybucja",
    pageComponent: <Distribution />
  }
];
