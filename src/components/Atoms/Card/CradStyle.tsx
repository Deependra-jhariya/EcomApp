import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/AppColors/AppColors";

export const CardStyle = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: COLORS?.lightWhiteColor,
    backgroundColor: COLORS?.WhiteColor,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: COLORS?.grayColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  cardHeading: {
    fontSize: 25,
    // fontWeight: 'bold',
    color: COLORS?.WhiteColor,
    textAlign: "center",
    // letterSpacing: 1.5,
  },
  cardSubHeading: {
    fontSize: 18,
    color: COLORS?.WhiteColor,
    textAlign: "center",
    // letterSpacing: 1.5,
  },
});
