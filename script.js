window.addEventListener("DOMContentLoaded", function () {
  let l1 = document.getElementById("li-1"),
    l2 = document.getElementById("li-2"),
    l3 = document.getElementById("li-3"),
    l4 = document.getElementById("li-4");
  let all = document.getElementById("container"),
    score = document.getElementById("circle"),
    btn = document.getElementById("btn"),
    answers = [l1, l2, l3, l4],
    img = document.getElementById("img"),
    davlatlar = [],
    imgSrc = 0,
    resultat = document.getElementById("cup"),
    lastRes = document.getElementById("natija"),
    resetBtn = document.getElementById("reset"),
    progress = document.getElementById("progress");

  function main() {
    let isCheck = true;
    score.innerHTML = +score.innerHTML + 1;
    randomCountries();
    setFlag();
    setFlagName();
    for (let i = 0; i < answers.length; i++) {
      answers[i].addEventListener("click", function () {
        if (answers[i].innerHTML == answers[imgSrc].innerHTML && isCheck) {
          lastRes.innerHTML = +lastRes.innerHTML + 5;
          progress.style = `--value:${lastRes.innerHTML}`;
          isCheck = false;
        }
        for (let j = 0; j < answers.length; j++) {
          if (answers[j].innerHTML == answers[imgSrc].innerHTML) {
            answers[j].style.background = "rgb(0, 110, 0, 0.9)";
          } else {
            answers[j].style.background = "rgb(255, 0, 0, 0.9)";
          }
        }
        score.style.display = "none";
        btn.style.display = "block";
        return 0;
      });
    }
    if (score.innerHTML == "20") {
      all.style.display = "none";
      resultat.style.display = "block";
    }
  }
  main();
  btn.addEventListener("click", function () {
    main();
    btn.style.display = "none";
    score.style.display = "block";
  });
  resetBtn.addEventListener("click", function () {
    lastRes.innerHTML = 0;
    score.innerHTML = 0;
    all.style.display = "block";
    resultat.style.display = "none";
    main();
  });

  function randomCountries() {
    // ========= RANDOM COUNTRIES FOR ANSWERS ==========
    davlatlar = [];
    for (let i = 0; i <= 4; i++) {
      let index = randomIndex(countries);
      if (!davlatlar.includes(countries[index])) {
        davlatlar.push(countries[index]);
      }
    }
  }
  function setFlag() {
    // ========== SET FLAG IMAGE =========
    imgSrc = randomIndex(davlatlar);
    img.src = `https://www.countries-ofthe-world.com/flags-normal/flag-of-${davlatlar[imgSrc]}.png`;
  }
  function setFlagName() {
    // ========== SET FLAG NAMES FOR ANSWERS ==========
    for (let i = 0; i < answers.length; i++) {
      answers[i].textContent = davlatlar[i];
      answers[i].style.background = "rgba(0, 0, 0, 0.44)";
    }
  }

  function randomIndex(smth) {
    // ========== IMPORTANT FUNCTIONS ==========
    return Math.floor(Math.random() * (smth.length - 1));
  }
});
