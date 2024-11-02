export interface User {
    nombre: string;
    email: {
      username: string;
      domain: string;
    };
    password: string;
  }