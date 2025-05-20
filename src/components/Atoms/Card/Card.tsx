import {StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {CardStyle} from './CradStyle';
import DividerLine from '../DividerLine/DividerLine';

// componets

interface CardProps {
  style?:StyleProp<ViewStyle>;
  tittle?: String;
  subTittle?: String;
  Divider?: boolean;
  cardChildren?: React.ReactNode;
  tittleTestStyle?: TextStyle;
  subTittleTestStyle?: TextStyle;
}

const Card: React.FC<CardProps> = props => {
  const {
    style,
    tittle,
    subTittle,
    Divider,
    cardChildren,
    tittleTestStyle,
    subTittleTestStyle,
  } = props;
  return (
    <View style={[CardStyle?.cardContainer, style]}>
      {tittle && (
        <Text style={[CardStyle?.cardHeading, tittleTestStyle]}>{tittle}</Text>
      )}
      {Divider && <DividerLine thickness={1} />}
      {subTittle && (
        <Text style={[CardStyle?.cardSubHeading, subTittleTestStyle]}>
          {subTittle}
        </Text>
      )}
      {cardChildren && <View>{cardChildren}</View>}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
