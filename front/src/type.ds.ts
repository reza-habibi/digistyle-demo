export type TData = {
  products: TProducts;
}[];

export type TProducts = {
  _id: string;
  name: string;
  mainCategory: string;
  category: string;
  image: string;
  price: number;
  countInStock: number;
  brand: string;
  brandFa: string;
  rating: number;
  numReviews: number;
  description: string;
  discount?: string;
};

export type TNavigation = {
  name: string;
  href: string;
}[];

export type TSub = {
  name: string;
  url: string;
};

export type TPState = {
  loading: Boolean;
  product: TProducts[];
  error?: string;
};

export type TCartItem = {
  name: string;
  image: string;
  price: number;
  discount: string;
  countInStock: number;
  product: string;
  brand: string;
  qty: number;
};

export type TCartState = {
  cartItems: TCartItem[];
  subPrice?: number;
  discount?: number;
  itemsPrice?: number;
  shippingAddress?:any
};

export type TOrderState = {
  order?: any;
  loading?: Boolean;
  error?: any;
  success?: Boolean;
};

export type TUserState = {
  userInfo?: {
    _id: any;
    isAdmin: Boolean;
    email: string;
    password: string;
    __v: number;
    createdAt: Date;
    updatedAt: Date;
    fullName: string;
  };
};


export type TUserDetails={
  loading:Boolean;
  error?:any;
  user?:any;
}