import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import IntroductionScreen from '@screens/menu/IntroductionScreen';
import BannerListScreen from '@screens/menu/BannerListScreen';
import NotificationScreen from '@screens/menu/NotificationScreen';
import FAQScreen from '@screens/menu/FAQScreen';
import ContactScreen from '@screens/menu/ContactScreen';
import SearchScreen from '@screens/SearchScreen';
import ContentScreen from '@screens/ContentScreen';
import ContentHeaderRightIcons from '@components/molecules/Header/ContentHeaderRightIcons';
import ContentHeaderLeftIcon from '@components/molecules/Header/ContentHeaderLeftIcon';
import { RootStackParamList } from '@/types/NavigationTypes';
import BottomNavBar from './BottomNavBar';
import CategoryScreen from '@/screens/CategoryScreen';
import Colors from '@/styles/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='MenuBar'
          component={BottomNavBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Service'
          component={IntroductionScreen}
          options={{
            title: 'CultureX',
          }}
        />
        <Stack.Screen
          name='BannerList'
          component={BannerListScreen}
          options={{
            title: 'Events',
          }}
        />
        <Stack.Screen name='Notification' component={NotificationScreen} />
        <Stack.Screen name='FAQ' component={FAQScreen} />
        <Stack.Screen name='Contact' component={ContactScreen} />
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen
          name='Category'
          component={CategoryScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: Colors.main,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Montserrat-ExtraBold',
              fontSize: 20,
            },
          })}
        />
        <Stack.Screen
          name='Content'
          component={ContentScreen}
          options={{
            title: '',
            headerRight: () => <ContentHeaderRightIcons />,
            headerLeft: () => <ContentHeaderLeftIcon />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
