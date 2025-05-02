/*
I wanted to name this file "fetch" because that would be a good joke.
This file would contain other functions for create/update operations in the real world.
*/

import { pets } from "../db/pets";

export function getAllPets() {
  return pets;
}

export function getPetsByType(type: string) {
  const list = pets.filter(
    (pet) => pet.species === type.toLowerCase() && pet.availableForAdoption
  );
  return list;
}
