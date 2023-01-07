import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainNavigatorParamList } from 'navigators/MainNavigator';
import { useNavigation } from '@react-navigation/native';

type NavigationProps = NativeStackNavigationProp<MainNavigatorParamList>;

export const useAppNavigation = () => useNavigation<NavigationProps>();
