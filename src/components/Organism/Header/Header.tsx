import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// Style
import { HeaderStyle } from "./HeaderStyle";
// Themes
import { DrawerActions, useNavigation } from "@react-navigation/native";
import CommonIcon from "../../Atoms/CommonIcon/CommonIcon";
import { COLORS } from "../../../themes/AppColors/AppColors";
import CommonText from "../../Atoms/CommonText/CommonText";
import { useAppNavigation } from "../../../utils/navigationHelper";

interface HeaderProps {
  isMenuIcon?: Boolean;
  isBackIcon?: Boolean;
  isLogo?: Boolean;
  tittle?: string;
  openDrawer?: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { isMenuIcon, isLogo, tittle, openDrawer,isBackIcon } = props;
  const navigation = useNavigation();
  const {goBack} = useAppNavigation()
  return (
    <View style={HeaderStyle?.headerContainer}>
      <View style={HeaderStyle?.headerView}>
        {isMenuIcon ? (
          <TouchableOpacity
            style={HeaderStyle?.menuIconView}
            // onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            onPress={openDrawer}
          >
            <CommonIcon
              type="AntDesign"
              name="menufold"
              size={30}
              color={COLORS?.WhiteColor}
            />
          </TouchableOpacity>
        ) : isBackIcon ? (
          <TouchableOpacity
            style={HeaderStyle?.menuIconView}
            onPress={() => {
              goBack()
            }}
          >
            <CommonIcon
              type="AntDesign"
              name="arrowleft"
              size={30}
              color={COLORS?.WhiteColor}
            />
          </TouchableOpacity>
        ) : null}
        <View style={HeaderStyle?.logoView}>
          <CommonText text={tittle} style={HeaderStyle?.tittleStyle} />
        </View>
      </View>
    </View>
  );
};

export default Header;
