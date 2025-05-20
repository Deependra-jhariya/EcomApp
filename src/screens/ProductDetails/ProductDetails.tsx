
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProductListStyle} from '../ProductList/ProductListStyle'; 
import {RootStackParamList} from '../../navigation/types';
import {commonStyle} from '../../themes/CommonStyle/CommonStyle';
import Header from '../../components/Organism/Header/Header';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type RouteParams = {
  ProductDetails: {
    product: Product;
  };
};

const ProductDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();
  const product = route.params?.product;
  console.log('product', product);

  return (
    <View style={commonStyle?.mainContainer}>
      <Header tittle="Product Details" isBackIcon/>
      <View style={ProductListStyle?.detailsView}>
        <View style={[ProductListStyle.card]}>
          <Image source={{uri: product.image}} style={ProductListStyle.image} />
          <Text style={ProductListStyle.title}>{product.title}</Text>
          <Text style={ProductListStyle.price}>
            ₹ {product.price.toFixed(2)}
          </Text>
          <Text style={ProductListStyle.rating}>
            ⭐ {product.rating.rate} ({product.rating.count})
          </Text>
          <Text style={ProductListStyle.description}>
            {product.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
