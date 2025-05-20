// src/components/CommonIcon.tsx
import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { IconType } from "../../../types/iconType";

interface CommonIconProps {
  name?: string ;
  size?: number;
  color?: string;
  style?: ViewStyle | TextStyle;
  type?: IconType;
}

const CommonIcon: React.FC<CommonIconProps> = ({
  name,
  size = 24,
  color = "#000",
  style,
  type = "MaterialIcons",
}) => {
  const IconComponent = {
    AntDesign,
    MaterialCommunityIcons,
    Entypo,
    Ionicons,
    Feather,
    Octicons,
    SimpleLineIcons,
    FontAwesome,
    MaterialIcons
  }[type];

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default CommonIcon;
