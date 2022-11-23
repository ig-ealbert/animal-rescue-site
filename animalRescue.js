loadPets();
styleNavigationMenu();
setupModal();

function loadPets() {
  const petData = [dogs, cats, otherAnimals];
  for (let p = 0; p < 3; p++) {
    let petGrid = document.getElementsByClassName("pet-listing")[p];
    let data = petData[p];
    if (data.length === 0) {
      petGrid.classList.remove("pet-listing");
      petGrid.appendChild(noPetsAvailable());
    }
    else {
      loadPetsIntoGrid(data, petGrid);
    }
  }
}

function noPetsAvailable() {
  const none = document.createElement("p");
  none.innerHTML = "No one is available for adoption at the moment!  " +
  "Please check back later or " +
  "<a href=\"mailto:FurChildrenAnimalRescue@gmail.com\">email us</a> " +
  "to let us know what you're looking for.";
  return none;
}

function loadPetsIntoGrid(data, petGrid) {
  for (const animal of data) {
    const imageTag = createImage(animal.image);
    const cell = document.createElement("div");
    cell.className = "pet-photo";
    cell.appendChild(imageTag);
    cell.onclick = function() {
      showDetails(animal);
    }
    petGrid.appendChild(cell);
  }
}

function showDetails(animal) {
  const modal = document.getElementById("petDetailsContainer");
  modal.style.display = "block";
  addPetPhoto(animal.image);
  addPetName(animal.name);
  addPetBio(animal.bio);
  addPetNeeds(animal);
  addAdoptPlea(animal.name);
}

function addPetPhoto(image) {
  const petPhoto = document.getElementById("petPhoto");
  petPhoto.innerHTML = "";
  petPhoto.appendChild(createImage(image));
}

function addPetName(name) {
  const petName = document.getElementById("petName");
  petName.innerHTML = name;
}

function addPetBio(bio) {
  const petBio = document.getElementById("petDescription");
  petBio.innerHTML = bio;
}

function addPetNeeds(animal) {
  const petNeeds = document.getElementById("petRestrictions");
  petNeeds.innerHTML = "";
  const needsTypes = ["no-dogs", "no-cats", "no-kids", "special-needs"];
  for (const need of needsTypes) {
    if (animal[need]) {
      petNeeds.appendChild(createImage("images/" + need + ".png"));
    }
  }
}

function addAdoptPlea(name) {
  const adoptName = document.getElementById("adoptThisPetName");
  adoptName.innerHTML = name;
  const adoptEmail = document.getElementById("adoptThisPetEmail");
  adoptEmail.href = "mailto:FurChildrenAnimalRescue@gmail.com?Subject=" + name;
}

function createImage(src) {
  const image = document.createElement("img");
  image.src = src;
  return image;
}

function styleNavigationMenu() {
  const menu = document.getElementById("navigationMenu");
  const links = menu.querySelectorAll("li > a");
  for (const link of links) {
    link.onclick = function() {
      const currentActive = document.getElementsByClassName("active");
      currentActive[0].className = "";
      this.className = "active";
    }
  }
}

function setupModal() {
  const closeButton = document.getElementsByClassName("close-button")[0];
  const modal = document.getElementById("petDetailsContainer");
  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}
