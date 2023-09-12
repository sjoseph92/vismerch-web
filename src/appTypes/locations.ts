export interface Location {
  id: number;
  name: string;
  brand: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  zipCode: string;
  coordinate: string;
  createdAt: string;
}
