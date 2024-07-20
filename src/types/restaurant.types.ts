export interface IRestaurantSlice {
  loading: boolean;
  restaurant?: IRestaurant;
}

export interface IRestaurant {
  _id: string;
  name: string;
  address: string;
  openAt: string;
  closeAt: string;
  image: string;
  tag: string[];
  minimum: number;
  deliveryCharge: number;
  contact: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
