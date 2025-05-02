import { petInfo } from "./petInfo";

export type detailsProps = {
  pet: petInfo;
  close: () => void;
};
