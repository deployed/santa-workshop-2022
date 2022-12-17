export interface PackageHeadersValues {
  headers: string[];
}

export interface Packages {
  id: number;
  wishListId: number;
  name: string;
  kindness: number;
  status: string;
  country: string;
  city: string;
  createdAt: string;
}


export interface DeliveryStatus{
  id: number
  wish_list_id: number
  name: string
  kindness: number
  status: string
  country: string
  city: string
  created_at: string
}
