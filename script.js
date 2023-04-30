// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function pAll() {
  const startTime = performance.now();
  const fetchedRqst = apiUrls.map((url) => fetch(url));
  const outputAll = document.querySelector('#output-all');
  const outputAny = document.querySelector('#output-any');

  Promise.all(fetchedRqst)
    .then((response) => {
      return Promise.all(response.map((response) => response.json()));
    })
    .then((data) => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      outputAll.innerHTML = timeTaken;
    });

}
pAll()

function pAny() {
  const startTime = performance.now();
  const fetchedRqst = apiUrls.map((url) => fetch(url));
  const outputAny = document.querySelector('#output-any');

  Promise.all(fetchedRqst)
    .then((response) => {
      return Promise.any(response.map((response) => response.json()));
    })
    .then((data) => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      outputAny.innerHTML = timeTaken;
    });
}
pAny()