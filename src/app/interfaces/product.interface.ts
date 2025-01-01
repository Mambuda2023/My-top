export interface ProductCharacteristic {
  value: string;
  name: string;
}

export interface ReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  creditAt: Date;
}

export interface ProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics: ProductCharacteristic[];
  creditAt: Date;
  updateAt: Date;
  __v: number;
  image: string;
  initialRating: number;
  reviews: ReviewModel[];
  reviewCount: number;
  reviewAwg?: number;
  advantages: string;
}
