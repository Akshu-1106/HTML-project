// Content for each section
const content = {
  about: `
    <h2>About Me</h2>
    <p>Hi! I'm Akshatha B, Working as a Assistant professor at KLE Society Nijalingappa College Bangalore </p>
     `,
  projects: `
    <h2>Projects</h2>
    <div class="project">
      <h3>Library managment System</h3>
      <p>This consists a how many books are there in library How many studemts have brought books from the library</p>
    </div>
    <div class="project">
      <h3>Steganography</h3>
      <p>Image steganography means hiding the senstive infromation in the form of images</p>
    </div>
  `,
  contact: `
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:akshatha.v95974@gmail.com">akshatha.v95974@gmail.com</a></p>
    <p>Phone: 6362395974</p>
      `,
};

// Function to load content dynamically
function loadContent(section) {
  const contentArea = document.getElementById("content-area");
  contentArea.innerHTML = content[section] || "<p>Content not found!</p>";

  // Highlight the active link
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => link.classList.remove("active"));
  const activeLink = document.querySelector(`[data-section="${section}"]`);
  if (activeLink) activeLink.classList.add("active");
}

// Attach click event listeners to all navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (b) => {
    b.preventDefault(); // Prevent default link behavior
    const section = link.getAttribute("data-section");
    loadContent(section);
  });
});
