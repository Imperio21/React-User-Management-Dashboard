export interface Address {
  street: string;
  suite: string;
  city: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
