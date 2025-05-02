"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Details from "@/components/details";
import Donate from "@/components/donate";
import List from "@/components/list";
import Menu from "@/components/menu";
import { getAllPets, getPetsByType } from "@/lib/getPets";
import { petInfo } from "@/types/petInfo";
import React from "react";

export default function Home() {
  const [pets, setPets] = React.useState<petInfo[]>([]);
  React.useEffect(() => setPets(getAllPets()), []);
  const [activePage, setActivePage] = React.useState<string>("home");
  const [petBeingViewed, setPetBeingViewed] = React.useState<
    petInfo | undefined
  >(undefined);
  const [species, setSpecies] = React.useState<string>("all");
  React.useEffect(() => filterOnSpecies(species), [species]);

  function filterOnSpecies(species: string) {
    if (species !== "all") {
      setPets(getPetsByType(species));
    } else {
      setPets(getAllPets());
    }
  }

  function handlePetFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setSpecies(e.target.value);
  }

  return (
    <>
      <Menu activePage={activePage} setActivePage={setActivePage}></Menu>
      <div className="mainContent">
        {activePage === "home" && (
          <>
            <h1>Fur Children Animal Rescue</h1>
            <div>
              <select value={species} onChange={handlePetFilter}>
                <option value="all">All Pets</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
                <option value="bunny">Bunnies</option>
                <option value="hamster">Hamsters</option>
              </select>
            </div>
            <List pets={pets} showDetails={setPetBeingViewed}></List>
          </>
        )}
        {activePage === "about" && <About></About>}
        {activePage === "donate" && <Donate></Donate>}
        {activePage === "contact" && <Contact></Contact>}
        {petBeingViewed && (
          <Details
            pet={petBeingViewed}
            close={() => setPetBeingViewed(undefined)}
          ></Details>
        )}
      </div>
    </>
  );
}
