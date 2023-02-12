<script>
var sections = document.querySelectorAll("[nav='section']");
var currentSection = 0;

document.querySelectorAll("[nav-arrow]").forEach(function(element) {
  element.addEventListener("click", function() {
    if (element.getAttribute("nav-arrow") === "next") {
      if (currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
      }
    } else if (element.getAttribute("nav-arrow") === "back") {
      if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    }
  });
});

function scrollToSection(sectionIndex) {
  var target = sections[sectionIndex];
  var start = window.pageYOffset;
  var distance = target.offsetTop - start;
  var duration = 1000;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var progress = easeInOutQuad(timeElapsed, start, distance, duration);
    window.scrollTo(0, progress);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
</script>