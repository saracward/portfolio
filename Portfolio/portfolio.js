console.log("hello");
console.log("this is $", $);

let sheetUrl =
  "https://docs.google.com/spreadsheets/d/1SQUgF64A0yENOhR_s8hI8riW43xDlaVuJhzBbZh7HVw/edit?usp=sharing";

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

$div.addClass("instagram");

// function(data) {
//     console.log(data);
//     if (data[1].data != "https://res.cloudinary.com/jkeohan/image/upload/v1582134376/Screen_Shot_2020-01-30_at_8.57.12_AM_cnrvug.png") {

//     }
// }

let promiseResolved = newPromise((resolve, reject) => {
  setTimeout(() => resolve("done"), 3000);
});

console.log("this runs before .then");
promiseResolved.then((val) => {
  console.log("val is:", val);
});
