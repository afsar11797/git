const logoButton = document.querySelector(".logo button");
if (logoButton) {
  logoButton.addEventListener("click", () => {
    console.log("clicked");
    const navMobileContent = document.querySelector(".nav-mobile");
    console.log({ navMobileContent });
    if (navMobileContent) navMobileContent.classList.toggle("expand");
  });
}
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none"; // Close the dropdown
  } else {
    dropdownContent.style.display = "block"; // Open the dropdown
  }
}

// Optional: Close the dropdown if clicking outside of it
window.onclick = function (event) {
  if (!event.target.matches(".nav-link")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
