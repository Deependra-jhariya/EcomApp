import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  View,
} from "react-native";
import React from "react";
import CommonText from "../CommonText/CommonText";
import CommonIcon from "../CommonIcon/CommonIcon";
import { COLORS } from "../../../themes/AppColors/AppColors";
import { AppFontFamily } from "../../../themes/AppFontFamily/AppFontFamily";

interface ThemesButtonProps {
  text: String;
  style?: ViewStyle;
  onSubmit?: () => void;
  disabled?: boolean;
  showNumber?: boolean;
  ButtonTextStyle?: TextStyle;
  isButtonIcon?: React.ReactNode;
  isRightIcon?: React.ReactNode;
}

const ThemesButton: React.FC<ThemesButtonProps> = (props) => {
  const {
    text,
    style,
    onSubmit,
    disabled,
    showNumber,
    ButtonTextStyle,
    isButtonIcon,
    isRightIcon
  } = props;

  return (
    <TouchableOpacity
      style={[styles?.buttonView, style]}
      onPress={onSubmit}
      disabled={showNumber ? true : false}
    >
      <View style={styles?.textViewStyle}>
        {isButtonIcon && (
          <View style={styles?.iconViewStyle}>
            {isButtonIcon}
          </View>
        )}
        <CommonText text={text} style={[styles?.textStyle, ButtonTextStyle]} />
        {isRightIcon && (
          <View style={styles?.iconViewStyle}>
            {isRightIcon}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ThemesButton;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: COLORS?.AppColor,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 10,
  },
  textViewStyle: {
    flexDirection: "row",
    alignSelf: "center",
  },
  textStyle: {
    textAlign: "center",
    color: COLORS?.WhiteColor,
    fontFamily: AppFontFamily?.Medium,
    justifyContent: "center",
    alignSelf:"center"
  },
  iconViewStyle: {
    alignSelf: "center",
    marginHorizontal: 5,
    justifyContent: "center",
  },
});
