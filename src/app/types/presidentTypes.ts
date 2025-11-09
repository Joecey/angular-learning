export type PresidentItem = {
  surname: string;
  termEnd: number; // convert string years to number
  firstName: string;
  termStart: number;
};

export type RawPresidentItem = {
  surname: string;
  termEnd: string; // raw data is string
  firstName: string;
  termStart: string;
};

export type PresidentResponse = {
  title: string;
  country: string;
  residence: string;
  presidents: RawPresidentItem[];
};
