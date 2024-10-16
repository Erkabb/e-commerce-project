export type Product = {
  _id: string;
  name: string;
  description: string;
  size?: string;
  images: [string];
  isBrandNew: boolean;
  quantity?: number;
  discount: number;
  category: Category;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Category = {
  _id: string;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Cart = {
  products: {
    product: Product;
    quantity: number;
  };
};
