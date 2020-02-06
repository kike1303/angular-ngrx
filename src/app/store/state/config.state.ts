import { IConfig } from "../../models/config.interface";

export interface IConfigState {
  adminName: string;
  permission?: string[];
}

export const initialConfigState: IConfigState = {
  adminName: null,
  permission: []
};
