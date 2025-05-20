export type Product = {
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

export type RootStackParamList = {
  Dashboard: undefined;
  BottomNav: undefined;
  ProductList: undefined;
  ProductDetails: {product: Product};
};
