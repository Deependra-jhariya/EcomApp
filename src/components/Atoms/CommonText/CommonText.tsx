import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { COLORS } from "../../../themes/AppColors/AppColors";

interface CommonTextProps {
  text?: String;
  highlightedText?: string;
  style?: StyleProp<TextStyle>;
  hightlightStyle?: StyleProp<TextStyle>;
  onHighlightPress?: () => void;
}

const CommonText: React.FC<CommonTextProps> = (props) => {
  const { text, style, highlightedText, hightlightStyle, onHighlightPress } =
    props;
  return (
    <View>
      <Text style={[styles?.textStyle, style]}>
        {text}
        {highlightedText && (
          <>
            <Text
              style={[styles.highlightedText, hightlightStyle]}
              onPress={onHighlightPress}
            >
              {highlightedText}
            </Text>
          </>
        )}
      </Text>
    </View>
  );
};

export default CommonText;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: COLORS?.BlackColor,
  },
  highlightedText: {
    fontSize: 18,
    color: COLORS?.BlackColor,
  },
});
