export interface Users {
  fullName: string;
  email: string;
  id: number;
  password: string;
  image?: string;
  speciality?: string;
  description?: string;
  passwordConfirm?: string;
  phone?: number;
  company?: string;
  location?: string;
}

export interface Medicalhistory {
  id: string;
  fullname: string;
  image: string;
  appointment: string;
  date: string;
  time: string;
  status: boolean;
  address?: string;
}
