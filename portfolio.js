console.log("hello");
console.log("this is $", $);

// $(() => {
// let sheetUrl =
//   "https://docs.google.com/spreadsheets/d/1SQUgF64A0yENOhR_s8hI8riW43xDlaVuJhzBbZh7HVw/edit?usp=sharing";

let sheetAsJSON =
  "https://spreadsheets.google.com/feeds/list/1SQUgF64A0yENOhR_s8hI8riW43xDlaVuJhzBbZh7HVw/od6/public/values?alt=json";

function renderProjects(projects) {
  console.log("app - projects", projects);
  // the rest of your app goes here
  projects.shift();
  projects.forEach((project) => {
    const article = $(".container").append(
      `<div class="card" style="width: 18rem"">
 <img src="${project.image}" class="card-img-top" alt="${project.title} picture">
 <div class="card-body">
 <h5 class="card-title">${project.title}</h5>
 <p class="card-text">${project.description}</p>
 <a href="${project.image}" class="btn btn-primary"> View Project </a>
 </div>
 </div>`
    );
  });
}

$.ajax({ url: sheetAsJSON }).then((data) => {
  const projects = data.feed.entry.map((project) => {
    return {
      title: project.gsx$_cn6ca.$t,
      image: project.gsx$_cokwr.$t,
      description: project.gsx$_cpzh4.$t,
    };
  });
  renderProjects(projects);
});

$(".nav-link").on("click", () => {
  $("navbar-collapse").collapse("hide");
});
