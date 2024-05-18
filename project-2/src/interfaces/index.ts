interface Category {
  name: string;
  imageUrl: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  colors: string[];
  category: Category;
}
