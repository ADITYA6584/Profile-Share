const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("scale-100");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  console.log("Modal is Closed");
  modal.classList.remove("scale-100");
  overlay.classList.remove("overlayactive");
};

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// const openModal = () => {
//   console.log("Modal is Open");
//   modal.classList.remove("scale-0");
//   modal.classList.add("scale-100");

//   overlay.classList.add("overlayactive");
// };

// const closeModal = () => {
//   console.log("Modal is Closed");
//   modal.classList.remove("scale-100");
//   modal.classList.add("scale-0");

//   overlay.classList.remove("overlayactive");
// };
