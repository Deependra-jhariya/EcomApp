import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/AppColors/AppColors';

export const ProductListStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS?.WhiteColor,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: COLORS?.WhiteColor,
    width: '100%',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    color: COLORS?.greenColor,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  rating: {
    fontSize: 12,
    color: COLORS?.grayColor,
  },
  wishListIconView: {
    position: 'absolute',
    alignSelf: 'flex-end',
    margin: 10,
  },
  description: {
    fontSize: 16,
    padding: 10,
    color: '#555',
  },
  detailsView: {
    margin: 10,
  },
});
