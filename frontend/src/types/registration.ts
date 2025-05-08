export interface Registration {
  id?: number;
  name: string;
  email: string;
  password: string;
  description: string;
}

export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}