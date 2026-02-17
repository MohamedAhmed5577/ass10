//Scroll//

var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function() {
  var currentSection = "";

  sections.forEach(section => {
    var sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

//Dark and light mode//


var themeToggle = document.getElementById("theme-toggle-button");
var html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}

themeToggle?.addEventListener("click", function() {
  html.classList.toggle("dark");

  localStorage.setItem("theme",html.classList.contains("dark") ? "dark" : "light");
});



//Navs and Tabs//

var filtersContainer = document.getElementById("portfolio-filters");
var filterButtons = filtersContainer.getElementsByClassName("portfolio-filter");
var portfolioGrid = document.getElementById("portfolio-grid");
var portfolioItems = portfolioGrid.getElementsByClassName("portfolio-item");

for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].onclick = function () {

    for (var j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
      filterButtons[j].setAttribute("aria-pressed", "false");
    }

    this.classList.add("active");
    this.setAttribute("aria-pressed", "true");

    var filterValue = this.getAttribute("data-filter");

    for (var k = 0; k < portfolioItems.length; k++) {
      var itemCategory = portfolioItems[k].getAttribute("data-category");

      if (filterValue === "all" || itemCategory === filterValue) {
        portfolioItems[k].style.display = "block";
      } else {
        portfolioItems[k].style.display = "none";
      }
    }
  };
}


//Carousel//

document.addEventListener("DOMContentLoaded", function () {

  var carousel = document.getElementById("testimonials-carousel");
  var cards = carousel.getElementsByClassName("testimonial-card");

  var nextBtn = document.getElementById("next-testimonial");
  var prevBtn = document.getElementById("prev-testimonial");

  function cardWidth() {
    return cards[0].offsetWidth;
  }

  nextBtn.onclick = function () {
    carousel.parentElement.scrollBy({
      left: cardWidth(),
      behavior: "smooth"
    });
  };

  prevBtn.onclick = function () {
    carousel.parentElement.scrollBy({
      left: -cardWidth(),
      behavior: "smooth"
    });
  };

});


//Scroll to Top//

var scrollBtn = document.getElementById("scroll-to-top");

window.onscroll = function () {

  if (window.scrollY === 0) {
    scrollBtn.classList.add("opacity-0", "invisible");
  } else {
    scrollBtn.classList.remove("opacity-0", "invisible");
  }
};

scrollBtn.onclick = function () {
  window.scrollTo(0, 0);
};


//Setting//

var settingsToggle = document.getElementById('settings-toggle');
var settingsSidebar = document.getElementById('settings-sidebar');
var closeSettings = document.getElementById('close-settings');

settingsToggle.addEventListener('click', function() {
    settingsSidebar.classList.toggle('translate-x-full');
    settingsSidebar.classList.toggle('translate-x-0');

    var isOpen = settingsSidebar.classList.contains('translate-x-0');
    settingsSidebar.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    settingsToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

closeSettings.addEventListener('click', function() {
    settingsSidebar.classList.add('translate-x-full');
    settingsSidebar.classList.remove('translate-x-0');
    settingsSidebar.setAttribute('aria-hidden', 'true');
    settingsToggle.setAttribute('aria-expanded', 'false');
});

var fontOptions = document.querySelectorAll('.font-option');
fontOptions.forEach(option => {
    option.addEventListener('click', function() {
        fontOptions.forEach(opt => {
            opt.classList.remove('active');
            opt.setAttribute('aria-checked', 'false');
        });

        option.classList.add('active');
        option.setAttribute('aria-checked', 'true');

        var font = option.dataset.font;
        if (font === 'alexandria') {
            document.body.style.fontFamily = "'Alexandria', sans-serif";
        } else if (font === 'tajawal') {
            document.body.style.fontFamily = "'Tajawal', sans-serif";
        } else {
            document.body.style.fontFamily = '';
        }
    });
});