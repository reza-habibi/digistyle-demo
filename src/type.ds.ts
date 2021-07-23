export type TData={
  products:TProducts
}[]

export type TProducts = {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  countInStock: number;
  brand: string;
  rating: number;
  numReviews: number;
  description: string;
};


export type TNavigation={
  name: string;
  href: string;
  current: boolean;
}[]