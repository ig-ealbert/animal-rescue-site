"use client";

import { detailsProps } from "@/types/detailsProps";

export default function Details(props: detailsProps) {
  return (
    <>
      <div id="petDetailsContainer" className="modal">
        <div className="pet-details">
          <div id="petPhoto" className="pet-details-left">
            <img src={props.pet.image} />
          </div>
          <div className="pet-details-right">
            <h1 id="petName">{props.pet.name}</h1>
            <p id="petDescription">{props.pet.bio}</p>
            <div id="petRestrictions">
              {props.pet.noDogs && (
                <img src="images/no-dogs.png" title="No dogs"></img>
              )}
              {props.pet.noCats && (
                <img src="images/no-cats.png" title="No cats"></img>
              )}
              {props.pet.noKids && (
                <img src="images/no-kids.png" title="No kids"></img>
              )}
              {props.pet.specialNeeds && (
                <img
                  src="images/special-needs.png"
                  title="Has special needs"
                ></img>
              )}
            </div>
            <div>
              <a
                href={`mailto:FurChildrenAnimalRescue@gmail.com?Subject=${props.pet.name}`}
              >
                Contact us
              </a>
              &nbsp;to meet {props.pet.name}!
            </div>
          </div>
          <div className="close-button" onClick={props.close}>
            X
          </div>
        </div>
      </div>
    </>
  );
}
