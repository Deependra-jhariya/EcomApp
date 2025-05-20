import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/AppColors/AppColors";

export const WishListStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS?.WhiteColor,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: COLORS?.greenColor,
  },
  rating: {
    fontSize: 12,
    color: '#888',
  },
  removeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  removeText: {
    marginLeft: 4,
    color: COLORS?.redColor,
  },
  empty: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS?.grayColor,
    marginTop: 50,
  },
});
