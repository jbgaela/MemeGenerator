import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    DankMemes: HomeScreen,
  },
  {
    initialRouteName: 'DankMemes',
  }
);

export default createAppContainer(navigator);
