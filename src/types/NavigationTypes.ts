import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  MenuBar: undefined;
  Service: undefined;
  BannerList: undefined;
  Notification: undefined;
  FAQ: undefined;
  Contact: undefined;
  Search: undefined;
};

export type BottomTabParamList = {
  Menu: undefined;
  Like: undefined;
  Home: undefined;
  MyPage: undefined;
  Plan: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
