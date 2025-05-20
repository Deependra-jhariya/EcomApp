import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ProductListStyle} from './ProductListStyle';
import Header from '../../components/Organism/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectAllProducts,
  selectProductLoading,
} from '../../redux/features/ProductList/ProductSelector';
import ActivityLoader from '../../components/Atoms/ActivityLoader/ActivityLoader';
import {COLORS} from '../../themes/AppColors/AppColors';
import {fetchProducts} from '../../redux/features/ProductList/ProductListApi';
import CommonIcon from '../../components/Atoms/CommonIcon/CommonIcon';
import {useAppNavigation} from '../../utils/navigationHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeInput from '../../components/Atoms/ThemeInput/ThemeInput';


const ProductList = () => {
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [searchText, setSearchText] = useState('');
  const {navigateTo} = useAppNavigation();
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectProductLoading);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await dispatch(fetchProducts() as any).unwrap();
        console.log('res..', res);
      } catch (err: any) {
        console.log('Something went wrong');
      }
    };

    loadProducts();
  }, [dispatch]);

  useEffect(() => {
    const loadWishlist = async () => {
      const stored = await AsyncStorage.getItem('wishlist');
      const parsed = stored ? JSON.parse(stored) : [];
      setWishlistItems(parsed);
    };

    loadWishlist();
  }, []);

  const saveToWishlist = async (item: any) => {
    try {
      const existing = await AsyncStorage.getItem('wishlist');
      const wishlist = existing ? JSON.parse(existing) : [];

      const alreadyExists = wishlist.some((i: any) => i.id === item.id);
      if (!alreadyExists) {
        const updated = [...wishlist, item];
        await AsyncStorage.setItem('wishlist', JSON.stringify(updated));
        setWishlistItems(updated);
        console.log('Item saved to wishlist:', item.title);
      } else {
        console.log('Item already in wishlist');
      }
    } catch (error) {
      console.error('Error saving to wishlist', error);
    }
  };

  const filteredProducts = products.filter(item => {
    const priceMatch = item.price
      .toString()
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const ratingMatch = item.rating.rate
      .toString()
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return priceMatch || ratingMatch;
  });

  if (loading) {
    return <ActivityLoader size="large" color={COLORS?.BlackColor} />;
  }

  const renderItem = ({item}) => {
    const isWishlisted = wishlistItems.some(w => w.id === item.id);

    return (
      <TouchableOpacity
        style={ProductListStyle.card}
        onPress={() => {
          navigateTo('ProductDetails', {product: item});
        }}>
        <Image source={{uri: item.image}} style={ProductListStyle.image} />
        <Text numberOfLines={2} style={ProductListStyle.title}>
          {item.title}
        </Text>
        <Text style={ProductListStyle.price}>₹ {item.price.toFixed(2)}</Text>
        <Text style={ProductListStyle.rating}>
          ⭐ {item.rating.rate} ({item.rating.count})
        </Text>
        <TouchableOpacity
          style={ProductListStyle?.wishListIconView}
          onPress={() => saveToWishlist(item)}>
          <CommonIcon
            type="AntDesign"
            name={isWishlisted ? 'heart' : 'hearto'}
            size={30}
            color={isWishlisted ? COLORS?.redColor : COLORS?.grayColor}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={ProductListStyle.container}>
      <Header tittle="Products List" isBackIcon />
      <Text style={ProductListStyle.header}>🛍️ Products</Text>

      {/* 🔍 Search Input */}
      <ThemeInput
        placeholder="Search by price or rating"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholderColors={COLORS?.grayColor}
        inputContainerStyle={{
          borderColor: COLORS.grayColor,
          marginHorizontal: 15,
          marginBottom: 10,
          
        }}
      />

      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={ProductListStyle.listContainer}
        ListEmptyComponent={
          <Text style={{textAlign: 'center', marginTop: 20}}>
            No products found.
          </Text>
        }
      />
    </View>
  );
};

export default ProductList;
