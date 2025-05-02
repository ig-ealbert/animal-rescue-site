import { petInfo } from "./petInfo";

export type listProps = {
  pets: petInfo[];
  showDetails: (pet: petInfo) => void;
};
