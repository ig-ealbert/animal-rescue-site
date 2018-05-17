QUnit.test( "The pet details are initially hidden", function (assert ) {
  var detailsWindow = document.getElementById("petDetailsContainer");
  var showing = detailsWindow.getAttribute("visible");
  assert.notOk( showing, "The details window should be hidden" );
});

QUnit.test( "The list of dogs is loaded from the data file", function (assert ) {
  var petGrid = document.getElementsByClassName("pet-listing")[0];
  var entries = petGrid.childNodes.length;
  assert.ok( entries > 0, "The list of dogs is loaded from the data file" );
});

QUnit.test( "The list of cats is loaded from the data file", function (assert ) {
  var petGrid = document.getElementsByClassName("pet-listing")[1];
  var entries = petGrid.childNodes.length;
  assert.ok( entries > 0, "The list of cats is loaded from the data file" );
});

QUnit.test( "The list of other animals is loaded from the data file", function (assert ) {
  var petGrid = document.getElementsByClassName("pet-listing")[2];
  var entries = petGrid.childNodes.length;
  assert.ok( entries > 0, "The list of other animals is loaded from the data file" );
});

QUnit.test( "The modal dialog will close when clicking on the X button", function (assert ) {
  exitModal(); // Not sure why I need to call this
  var closeButton = document.getElementsByClassName("close-button")[0];
  var hasEvent = typeof closeButton.onclick == "function"; // check if it has an onclick handler
  assert.ok( hasEvent, "The button should have an onclick event" );
});

QUnit.test( "The modal dialog will close when clicking outside the dialog", function (assert ) {
  exitModal(); // Not sure why I need to call this
  var hasEvent = typeof window.onclick == "function"; // check if it has an onclick handler
  assert.ok( hasEvent, "The window should have an onclick event" );
});

QUnit.test( "The first section of the menu is active", function (assert ) {
  var menu = document.getElementById("navigationMenu");
  var links = menu.querySelectorAll("li > a");
  var homeSection = links[0];
  assert.equal( homeSection.className, "active", "The first menu item is active by default" );
});

QUnit.test( "A menu section becomes active when clicked", function (assert ) {
  styleNavigationMenu(); // Still not sure why I have to call this
  var menu = document.getElementById("navigationMenu");
  var links = menu.querySelectorAll("li > a");
  var aboutUsSection = links[1];
  aboutUsSection.click();
  assert.equal( aboutUsSection.className, "active", "The menu item becomes active when clicked" );
});

QUnit.test( "An image element is created when passing in a source URI", function (assert ) {
  var image = createImage("images/dog01.jpg");
  var directory = "file://" + window.location.pathname;
  directory = directory.substring(0, directory.lastIndexOf('/'));
  assert.equal( image.src, directory + "/images/dog01.jpg", "An image tag is created with the specified URI" );
});

QUnit.test( "Special needs icons should be displayed", function (assert ) {
  var animal = {
    "name": "SpecialNeeds",
	  "image": "images/dog02.jpg",
	  "bio": "This is a test for special needs icons",
	  "no-dogs": true,
	  "no-cats": true,
	  "no-kids": true,
	  "special-needs": true
  };
  var petNeeds = document.getElementById("petRestrictions");
  addPetNeeds(animal);
  var needs = petNeeds.childNodes.length;
  assert.equal( needs, 4, "An icon is displayed for each special need" );
});

QUnit.test( "The modal dialog displays to show the details", function (assert ) {
  loadPets();
  showDetails(dogs[0]);
  let modal = document.getElementById("petDetailsContainer");
  assert.equal( modal.style.display, "block", "The details window appears when a pet photo is clicked" );
});

QUnit.test( "The pet details include an image", function (assert ) {
  var testPet = dogs[0];
  showDetails(testPet);
  var petPhoto = document.getElementById("petPhoto");
  assert.equal( petPhoto.childNodes.length, 1, "An image of the pet is shown" );
});

QUnit.test( "The pet details include a name", function (assert ) {
  var testPet = dogs[0];
  showDetails(testPet);
  var petName = document.getElementById("petName");
  assert.equal( petName.innerHTML, testPet.name, "The name of the pet is shown" );
});

QUnit.test( "The pet details include a bio", function (assert ) {
  var testPet = dogs[0];
  showDetails(testPet);
  var petBio = document.getElementById("petDescription");
  assert.equal( petBio.innerHTML, testPet.bio, "The bio of the pet is shown" );
});

QUnit.test( "The pet details include a request to adopt", function (assert ) {
  var testPet = dogs[0];
  showDetails(testPet);
  var adoptName = document.getElementById("adoptThisPetName");
  assert.equal( adoptName.innerHTML, testPet.name, "The pet's name is shown in a request for adoption" );
});

QUnit.test( "The pet details include a link to email", function (assert ) {
  var testPet = dogs[0];
  showDetails(testPet);
  var adoptEmail = document.getElementById("adoptThisPetEmail");
  var expected = "mailto:FurChildrenAnimalRescue@gmail.com?Subject=" + testPet.name;
  assert.equal( adoptEmail.href, expected, "The email link is shown" );
});

function closeModal() {
  let modal = document.getElementById("petDetailsContainer");
  modal.style.display = "none";
}

QUnit.testDone(closeModal);
