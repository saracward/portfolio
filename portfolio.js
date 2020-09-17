console.log("hello");
console.log("this is $", $);

// $(() => {
// let sheetUrl =
//   "https://docs.google.com/spreadsheets/d/1SQUgF64A0yENOhR_s8hI8riW43xDlaVuJhzBbZh7HVw/edit?usp=sharing";

let sheetAsJSON =
  "https://spreadsheets.google.com/feeds/list/1SQUgF64A0yENOhR_s8hI8riW43xDlaVuJhzBbZh7HVw/od6/public/values?alt=json";

function app(projects) {
  console.log("app - projects", projects);
  // the rest of your app goes here
}

$.ajax({ url: sheetAsJSON }).then((data) => {
  // return a new array of data..best way to do that is what? .map()
  //    plural                          singular
  const projects = data.feed.entry.map((project) => {
    return {
      title: project.gsx$_cn6ca.$t,
      image: project.gsx$_cokwr.$t,
      description: project.gsx$_cpzh4.$t,
    };
  });
  //   console.log("this is data:", data);
  //   console.log("this is project:", projects);
  app(projects);
});

// console.log(projects);
// projects.forEach((project) => {
//   //it might have to be const my_projects and not article.
//   const $article = $("<article>").html({
// `<div class="card text-center" style="width: 18rem">
// <img src="${project.image}" class="card-img-top" alt="${project.title} picture">
// <div class="card-body">
// <h5 class="card-title">${project.title}</h5>
// <p class="card-text">${project.description}</p>
// <a href="${project.link}" class="btn btn-primary"> View Project </a>
// </div>`
//  });

//   $(".projects-main").append($article);
//   console.log("all projects rendered...");
