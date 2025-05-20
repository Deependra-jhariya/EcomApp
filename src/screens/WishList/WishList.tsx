import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../../themes/AppColors/AppColors'; // adjust path if needed
import CommonIcon from '../../components/Atoms/CommonIcon/CommonIcon';
import {useFocusEffect} from '@react-navigation/native';
import Header from '../../components/Organism/Header/Header';
import { commonStyle } from '../../themes/CommonStyle/CommonStyle';
import { WishListStyle } from './WishListStyle';

const WishList = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  // Load wishlist items from AsyncStorage
  const loadWishlist = async () => {
    try {
      const stored = await AsyncStorage.getItem('wishlist');
      const parsed = stored ? JSON.parse(stored) : [];
      setWishlist(parsed);
    } catch (error) {
      console.error('Failed to load wishlist', error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadWishlist();
    }, []),
  );

  // Remove item from wishlist
  const removeFromWishlist = async (id: number) => {
    try {
      const updated = wishlist.filter(item => item.id !== id);
      await AsyncStorage.setItem('wishlist', JSON.stringify(updated));
      setWishlist(updated);
    } catch (error) {
      console.error('Failed to remove item', error);
    }
  };

  const renderItem = ({item}: {item: any}) => (
    <View style={WishListStyle.card}>
      <Image source={{uri: item.image}} style={WishListStyle.image} />
      <View style={WishListStyle.info}>
        <Text numberOfLines={2} style={WishListStyle.title}>
          {item.title}
        </Text>
        <Text style={WishListStyle.price}>₹ {item.price.toFixed(2)}</Text>
        <Text style={WishListStyle.rating}>
          ⭐ {item.rating.rate} ({item.rating.count})
        </Text>
        <TouchableOpacity
          style={WishListStyle.removeBtn}
          onPress={() => removeFromWishlist(item.id)}>
          <CommonIcon
            type="AntDesign"
            name="delete"
            size={20}
            color={COLORS?.redColor || 'red'}
          />
          <Text style={WishListStyle.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={commonStyle?.mainContainer}>
      <Header tittle="Wish List" />
      <View style={WishListStyle.container}>
        <Text style={WishListStyle.header}>❤️ Wishlist</Text>
        {wishlist.length === 0 ? (
          <Text style={WishListStyle.empty}>Your wishlist is empty.</Text>
        ) : (
          <FlatList
            data={wishlist}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={WishListStyle.listContainer}
          />
        )}
      </View>
    </View>
  );
};

export default WishList;

