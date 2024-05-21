// types.ts

// Define the Preferences interface
export interface Preferences {
  theme: string;
  language: string;
}

// Define the User interface
export interface User<T> {
  id: string;
  username: string;
  email: string;
  preferences: T;
}
