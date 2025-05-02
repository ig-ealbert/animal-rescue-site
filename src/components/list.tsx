import { listProps } from "@/types/listProps";
import NoPets from "./noPets";

export default function List(props: listProps) {
  return (
    <>
      {props.pets.length < 1 && <NoPets></NoPets>}
      <div className="pet-listing">
        {props.pets.map((pet) => (
          <span className="pet-photo" key={pet.name}>
            <img
              src={pet.image}
              alt={pet.name}
              onClick={() => props.showDetails(pet)}
            ></img>
          </span>
        ))}
      </div>
    </>
  );
}
