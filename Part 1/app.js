let favNumber = 11;
let baseURL = "http://numbersapi.com";

// Question 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then((data) => {
  console.log(data);
});

// Question 2.
let favNumbers = [1, 3, 9];
$.getJSON(`${baseURL}/${favNumbers}?json`).then((data) => {
  console.log(data);
});

// Question 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
