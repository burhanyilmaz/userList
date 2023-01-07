export interface Company {
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  department: string;
  name: string;
  title: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  image: string;
  company: Company;
}

export type UsersState = {
  users: User[];
  selectedUser?: User;
};
