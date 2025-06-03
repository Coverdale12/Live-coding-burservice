import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Главная
        </Button>
        <Button color="inherit" component={Link} to="/aboutus">
          О нас
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Месторождения
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header