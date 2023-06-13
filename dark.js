var i = 0;
document.addEventListener('keydown', function(event) {
  if (event.key === 'd') {
    i++;
    if (i % 2 !== 0) {
      document.body.style.backgroundColor = "#000";
    } else {
      document.body.style.backgroundColor = "#fff"; // Change this to the desired color
    }
  }
});
