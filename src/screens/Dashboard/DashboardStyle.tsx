import {StyleSheet} from 'react-native';

export const DashboardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 12,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
  },
  categoryText: {
    marginTop: 6,
    fontSize: 14,
    color: '#333',
  },
  bannerContainer: {
    width: '100%',
    height: 180,
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  productCard: {
    width: 150,
    marginRight: 15,
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 100,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 13,
    color: 'green',
    marginTop: 4,
  },
});
