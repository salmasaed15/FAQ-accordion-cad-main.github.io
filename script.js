
const questions = document.querySelectorAll('.question');
for(let i=0; i<questions.length; i++){
    questions[i].addEventListener("click", function() {
        const nextElement =  questions[i].nextElementSibling;
        if (nextElement.style.display === "block") {
            nextElement.style.display = "none";
            questions[i].classList.toggle('active-q')

          } else {
            nextElement.style.display = "block";
            questions[i].classList.toggle('active-q')
          }
    })
}
const imgs = document.querySelectorAll("img");
for(let i=0;  i<imgs.length; i++){
    imgs[i].addEventListener("click", function() {
        imgs[i].classList.toggle('rotate-img')
    })
}

