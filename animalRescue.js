loadPets();
styleNavigationMenu();
exitModal();

function loadPets() {
  var petData = [dogs, cats, otherAnimals];
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
  let none = document.createElement("p");
  none.innerHTML = "No one is available for adoption at the moment!  " +
  "Please check back later or " +
  "<a href=\"mailto:FurChildrenAnimalRescue@gmail.com\">email us</a> " +
  "to let us know what you're looking for.";
  return none;
}

function loadPetsIntoGrid(data, petGrid) {
  for (let i = 0; i < data.length; i++) {
    let imageTag = createImage(data[i].image);
    let cell = document.createElement("div");
    cell.className = "pet-photo";
    cell.appendChild(imageTag);
    let animal = data[i]; // let "locks in" the value of i
    cell.onclick = function() {
      showDetails(animal);
    }
    petGrid.appendChild(cell);
  }
}

function showDetails(animal) {
  let modal = document.getElementById("petDetailsContainer");
  modal.style.display = "block";
  addPetPhoto(animal.image);
  addPetName(animal.name);
  addPetBio(animal.bio);
  addPetNeeds(animal);
  addAdoptPlea(animal.name);
}

function addPetPhoto(image) {
  let petPhoto = document.getElementById("petPhoto");
  petPhoto.innerHTML = "";
  petPhoto.appendChild(createImage(image));
}

function addPetName(name) {
  let petName = document.getElementById("petName");
  petName.innerHTML = name;
}

function addPetBio(bio) {
  let petBio = document.getElementById("petDescription");
  petBio.innerHTML = bio;
}

function addPetNeeds(animal) {
  let petNeeds = document.getElementById("petRestrictions");
  petNeeds.innerHTML = "";
  let needsTypes = ["no-dogs", "no-cats", "no-kids", "special-needs"];
  for (let i = 0; i < needsTypes.length; i++) {
    if (animal[needsTypes[i]]) {
      petNeeds.appendChild(createImage("images/" + needsTypes[i] + ".png"));
    }
  }
}

function addAdoptPlea(name) {
  let adoptName = document.getElementById("adoptThisPetName");
  adoptName.innerHTML = name;
  let adoptEmail = document.getElementById("adoptThisPetEmail");
  adoptEmail.href = "mailto:FurChildrenAnimalRescue@gmail.com?Subject=" + name;
}

function createImage(src) {
  let image = document.createElement("img");
  image.src = src;
  return image;
}

function styleNavigationMenu() {
  let menu = document.getElementById("navigationMenu");
  let links = menu.querySelectorAll("li > a");
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      let currentActive = document.getElementsByClassName("active");
      currentActive[0].className = "";
      this.className = "active";
    }
  }
}

function exitModal() {
  let closeButton = document.getElementsByClassName("close-button");
  let modal = document.getElementById("petDetailsContainer");
  closeButton[0].onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}
