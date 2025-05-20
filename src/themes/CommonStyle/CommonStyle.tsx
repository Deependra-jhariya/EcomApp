import { StyleSheet } from "react-native";
import { COLORS } from "../AppColors/AppColors";

export const commonStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS?.WhiteColor,
  },
  heading: {
    fontSize: 20,
    color: COLORS?.WhiteColor,
  },
  subHeading: {
    fontSize: 18,
    color: COLORS?.WhiteColor,
  },
});
