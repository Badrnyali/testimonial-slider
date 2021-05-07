let button = document.querySelectorAll(".button img");

let text1 = document.querySelector(".text-1");

let text2 = document.querySelector(".text-2");

let image1 = document.querySelector(".image-1");

let image2 = document.querySelector(".image-2");

button.forEach(b => {

  b.addEventListener("click", change);

})

function change() {

  if (image2.classList.contains("not-active")) {

    image1.classList.add("not-active");
    text1.classList.add("not-active");

    image2.classList.remove("not-active");
    text2.classList.remove("not-active");


  } else {

    image2.classList.add("not-active");
    text2.classList.add("not-active");


    image1.classList.remove("not-active");
    text1.classList.remove("not-active");

  }

}
