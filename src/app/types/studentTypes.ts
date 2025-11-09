export type StudentItem = {
  ID: string;
  age: number;
  sex: 'M' | 'F' | 'Undefined';
  surname: string;
  firstName: string;
};

export type RawStudentItem = {
  ID: string;
  age: string;
  sex: string;
  surname: string;
  firstName: string;
};

export type StudentResponse = {
  course: string;
  college: string;
  students: RawStudentItem[];
};
