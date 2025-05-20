import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateTo = (screen: keyof RootStackParamList, params?: any) => {
    navigation.navigate(screen, params);
  };
  const replaceTo = (screen: keyof RootStackParamList, params?: any) => {
    navigation.reset({
      index: 0,
      routes: [{ name: screen, params }],
    });
  };

  const goBack = () => {
    navigation.goBack();
  };

  return { navigateTo, replaceTo, goBack };
};
