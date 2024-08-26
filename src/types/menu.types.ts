export interface ICategorySlice {
  loading: boolean;
  category?: ICategory[];
}

export type ICategory = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export interface IMenuSlice {
  selectedCategoryId?: string;
}

export type IDish = {
  _id: string;
  name: string;
  description: string;
  restaurant: string;
  dishCategory: ICategory;
  image: string;
  price?: number;
  createdAt: string;
  updatedAt: string;
};
