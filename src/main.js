import "./style.css";

const projects = [
  {
    title: "Rainy Days",
    description:
      "Rainy Days is a responsive jacket store offering a clean, user-friendly shopping experience for outdoor enthusiasts.",
    image: "/images/dont-use-rainydays.jpeg",
    githubLink: "https://github.com/Tubhaahmad/HTML-CSS-CS-LAST.git",
    liveWebsite: "https://tubha-htmlcss-ca.netlify.app/",
    builtWith: "HTML & CSS",
  },
  {
    title: "Community Science Museum",
    description:
      "Community Science Museum is an engaging, responsive website designed to spark curiosity in young science learners.",
    image: "/images/Community-Science-Museum.jpeg",
    githubLink: "https://github.com/Tubhaahmad/semster-project-1-Exam2.git",
    liveWebsite: "https://tubhaahmad-csm.netlify.app/",
    builtWith: "HTML & CSS",
  },
  {
    title: "Sienna's Compass",
    description:
      "Sienna’s Compass is a responsive travel blog sharing stories, tips, and destinations through a clean, personal design.",
    image: "/images/Siennas-Compass.jpeg",
    githubLink: "https://github.com/Tubhaahmad/Siennas-Compass-Tubhaahmed.git",
    liveWebsite: "https://siennascompass-tubhaahmad.netlify.app/",
    builtWith: "HTML, CSS & Javascript",
  },
];

const container = document.getElementById("projects-container");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
  <div class="card-content">
  <h3 class="card-title">${project.title}</h3>
  <p class="card-description">${project.description}</p>
  <div class="card-links">  
  <a href="${project.githubLink}" class="card-link">Github Repo</a>
  <a href="${project.liveWebsite}" class="card-link">Live Website</a>
  
  </div>
  
  </div>
   <img src="${project.image}" alt="${project.title} Thumbnail" class="card-image">
   <div class="built-with">Built With: ${project.builtWith}</div>
  `;

  container.appendChild(card);
});
