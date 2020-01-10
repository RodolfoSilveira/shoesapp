import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createSwitchNavigator(
  {
    Home,
    Cart,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Routes);
