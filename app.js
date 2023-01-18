let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
// console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    // console.log("clicked");
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
}
// change like state
// let likeBtns = document.querySelectorAll(".like");
// console.log(likeBtns);

// likeBtns.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     // // console.log("clicked");
//     // if (btn.classList.contains("liked")) {
//     //   btn.classList.remove("liked");
//     // } else {
//     //   btn.classList.add("liked");
//     // }
//     btn.classList.toggle("liked");
//   })
// );

//добавляємо колір
let likeBtns = document.querySelectorAll(".like");
// console.log(likeBtns);
likeBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    // // console.log("clicked");
    // if (btn.classList.contains("liked")) {
    //   btn.classList.remove("liked");
    // } else {
    //   btn.classList.add("liked");
    // }
    e.target.classList.toggle("liked");
    // e.target.style.background = "red";
  })
);

//modal
// let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
// let modal = document.querySelector(".modal");
// // console.log(moreDetailsBtns);
// moreDetailsBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     modal.classList.add("show");
//   })
// );

//те саме але винесли в окрему функцію open modal
// let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
// let modal = document.querySelector(".modal");

// moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
// function openModal() {
//   modal.classList.add("show");
// }

//робимо, щоб модальне вікно і відкривалося і закривалося
// let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
// let modal = document.querySelector(".modal");
// let closeBtn = document.querySelector(".btn-close");

// moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
// closeBtn.addEventListener("click", closeModal);

// function openModal() {
//   modal.classList.add("show");
// }
// function closeModal() {
//   modal.classList.remove("show");
// }

//ще один варіант реалізації
// let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
// let modal = document.querySelector(".modal");
// let closeBtn = document.querySelector(".btn-close");

// moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
// closeBtn.addEventListener("click", closeModal);

// function openModal() {
//   modal.classList.add("show");
//   modal.classList.remove("hide");
// }
// function closeModal() {
//   modal.classList.remove("show");
//   modal.classList.add("hide");
// }

//Далі додаємо можливість закривати модальне вікно коли клікаємо поза ним
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
}
function closeModal() {
  modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target === modal) {
    closeModal();
  }
});

// document.querySelector(".submit-form").addEventListener("click", function (e) {
//   e.preventDefault();
// });

//slider
$(".slider-block").slick();
