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

const project_array = [];
$.ajax({ url: sheetAsJSON }).then((data) => {
  const projects = data.feed.entry.map((project) => {
    project_array.push({
      title: project.gsx$_cn6ca.$t,
      image: project.gsx$_cokwr.$t,
      description: project.gsx$_cpzh4.$t,
    });
  });
  app(projects);
});
console.log(project_array);

project_array.map((project) => {
  const $article = $("<article>").html(
    `<div class="card" style="width: 18rem"">
 <img src="${project.image}" class="card-img-top" alt="${project.title} picture">
 <div class="card-body">
 <h5 class="card-title">${project.title}</h5>
 <p class="card-text">${project.description}</p>
 <a href="${project.image}" class="btn btn-primary"> View Project </a>
 </div>
 </div>`
  );
  $("<container>").append($article);
});

// const projects_array = [];

// $.ajax({ url: sheetAsJSON }).then((data) => {
//   // return a new array of data..best way to do that is what? .map()
//   //    plural                          singular
//   const projects = data.feed.entry.map((project) => {
//     projects.push(project);

//     return {
//       title: project.gsx$_cn6ca.$t,
//       image: project.gsx$_cokwr.$t,
//       description: project.gsx$_cpzh4.$t,
//     };
//   });
//   //   console.log("this is data:", data);
//   //   console.log("this is project:", projects);
//   app(projects);
// });

// console.log(projects);

// projects.map((project) => {
//   const $article = $("<article>").html(
//     `<div class="card" style="width: 18rem"">
//  <img src="${projects.image}" class="card-img-top" alt="${projects.title} picture">
//  <div class="card-body">
//  <h5 class="card-title">${projects.title}</h5>
//  <p class="card-text">${projects.description}</p>
//  <a href="${projects.image}" class="btn btn-primary"> View Project </a>
//  </div>
//  </div>`
//   );
//   $("<container>").append($article);
// });

// $("<container>").append($article);
// console.log("done");

// const render=(projects) => {
//   const $mainDiv = $('.instagram')
//   projects.forEach(project => {
//     const $image = $('<img>').attr('src', project.image)
//     $mainDiv.append($image)
//   }
