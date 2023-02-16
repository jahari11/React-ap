const displayTime = document.querySelector(".display-time")

function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", {
    hour24:false
  });
  setTimeout(showTime, 1000);
}

showTime();


function date() {
  let today = new Date();

  let dayName = today.getDay(),
dayNum = today.getDate(),
month = today.getMonth(),
year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const IDCollection = ["day", "daynum", "month", "year"];

const val = [dayWeek[dayName], dayNum,months[month],year];
for (let i = 0; i < IDCollection.length; i++) {
  document.getElementById(IDCollection[i]).firstChild.nodeValue =val[i];
}
}

date();

gsap.from(".content-text", 0.8, {
  y: 40,
  opacity: 0,
  ease: "power2.inOut",
  delay: 1,
});

gsap.from(".loader", 2, {
  width: 0,
  ease: "power4.inOut",
  delay: 2,
});

gsap.to(".pre-loader", 2, {
  top: "-100%",
  ease: "power4.inOut",
  delay: 4,
});

gsap.from(".navbar", 0.9, {
  y: 50,
  opacity: 0,
  ease: "power4.inOut",
  delay: 4.5,
  stagger: {
    amount: 0.3,
  }
});


const counter = document.querySelector(".number");

TweenLite.set(counter, {
  xPercent: -5,
  yPercent: -5,
});

window.addEventListener("mousemove", mouseCounter);

function mouseCounter(e) {
  TweenLite.to(counter, 0.5,{
    x:e.clientX,
    y:e.clientY
  });
}

function progress() {
  const windowScrollTop = $(window).scrollTop();
  const docHeight = $(document).height();
  const windowHeight = $(window).height();
  const progressBar = (windowScrollTop / (docHeight - windowHeight)) * 100;
  const counterTime = document.querySelector(".counter-num")

  const $bgColor = progressBar > 99 ? "#000000" : "#000000";
  const $textColor = progressBar > 99 ? "#000000" : "#333";

  $(counterTime).text(Math.round(progressBar) + "%").css({ color: $textColor});

  $(".fill").height(progressBar + "%").css({ backgroundColor: $bgColor});
}
progress();


$(document).on("scroll", progress);
