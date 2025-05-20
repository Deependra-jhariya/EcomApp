import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AppImages} from '../../themes/AppImages/AppImages';
import Header from '../../components/Organism/Header/Header';
import {useAppNavigation} from '../../utils/navigationHelper';
import {categories, productList, topItems} from '../../constant/Constant';
import {DashboardStyle} from './DashboardStyle';
import {commonStyle} from '../../themes/CommonStyle/CommonStyle';

const HomeScreen = () => {
  const {navigateTo} = useAppNavigation();
  return (
    <View style={commonStyle?.mainContainer}>
      <Header tittle="Home" />
      <ScrollView style={DashboardStyle.container}>
        <Text style={DashboardStyle.sectionTitle}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          renderItem={({item}) => (
            <TouchableOpacity style={DashboardStyle.categoryItem}>
              <Image source={item.icon} style={DashboardStyle.categoryImage} />
              <Text style={DashboardStyle.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        {/* Product Banner */}
        <View style={DashboardStyle.bannerContainer}>
          <Image
            source={AppImages?.Dashboard}
            style={DashboardStyle.bannerImage}
            resizeMode="cover"
          />
        </View>

        {/* Top Items */}
        <Text style={DashboardStyle.sectionTitle}>Top Items</Text>
        <FlatList
          horizontal
          data={topItems}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          renderItem={({item}) => (
            <View style={DashboardStyle.productCard}>
              <Image source={item.image} style={DashboardStyle.productImage} />
              <Text style={DashboardStyle.productName}>{item.name}</Text>
              <Text style={DashboardStyle.productPrice}>{item.price}</Text>
            </View>
          )}
        />
        <Text style={DashboardStyle.sectionTitle}>Products</Text>
        <FlatList
          horizontal
          data={productList}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={DashboardStyle.productCard}
              onPress={() => {
                navigateTo('ProductList');
              }}>
              <Image source={item.icon} style={DashboardStyle.productImage} />
              <Text style={DashboardStyle.productName}>{item.name}</Text>
              <Text style={DashboardStyle.productPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
