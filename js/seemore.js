// Get references to the elements
const projectContainer = document.querySelector("#projects");
const seeMoreBtn = document.getElementById("seeMoreBtn");
const seeLessBtn = document.getElementById("seeLessBtn");
const additionalProject = projectContainer.querySelector("#hidden");
additionalProject.classList.add("hidden");
seeLessBtn.style.display = "none";

// Add event listener to the "See More" button
seeMoreBtn.addEventListener("click", () => {
  // Toggle the visibility of the additional project
  const additionalProject = projectContainer.querySelector("#hidden");
  additionalProject.classList.toggle("hidden");
  seeMoreBtn.style.display = "none";
  // seeLessBtn.classList.toggle("hidden");
  seeLessBtn.style.display = "block";

  // Change the text of the "See More" button
  // if (seeMoreBtn.innerText === "See Less") {
  //   seeLessBtn.classList.add("hidden");
  // } else {
  //   seeMoreBtn.innerText = "See More";
  // }
});

seeLessBtn.addEventListener("click", () => {
  // Toggle the visibility of the additional project
  //const additionalProject = projectContainer.querySelector(".hidden");
  // projectContainer.classList.add("hidden");
  const additionalProject = projectContainer.querySelector("#hidden");
  additionalProject.classList.add("hidden");
  seeLessBtn.style.display = "none";
  seeMoreBtn.style.display = "block";
  // Change the text of the "See More" button
  //   if (seeMoreBtn.innerText === "See More") {
  //     seeMoreBtn.innerText = "See Less";
  //   } else {
  //     seeMoreBtn.innerText = "See More";
  //   }
});
