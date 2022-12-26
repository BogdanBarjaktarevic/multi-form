export type PersonalInfoDataKeys = keyof PersonalInfoData;

export interface PersonalInfoData {
  name: string;
  phone: string;
  email: string;
}

export interface PersonalInfoActionPayload {
  name: string;
  value: string;
}
