// Copyright (c) 2021 by Md. Taifuzzaman Bilash (https://codepen.io/bilashism/pen/mZpZLx)
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 75, 2000);
    counter("count2", 100, 200, 2500);
    counter("count3", 0, 2, 0);
   });