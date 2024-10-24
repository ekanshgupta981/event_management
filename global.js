var aboutus = document.getElementById("about_us_section");
var main_about = document.createElement("div");
let hasAppended = false;

// Variables to track the current and previous scroll positions
let lastScrollTop = 0;
let nav = document.querySelector(".nav_sec"); // Select your nav bar

function f1() {
  var scrl_value = Math.round(window.scrollY);

  // Logic to show/hide the navigation bar
  var currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down - hide the nav bar
    nav.style.transform = "translateY(-130%)"; // Slide up
  } else {
    // Scrolling up - show the nav bar
    nav.style.transform = "translateY(0)"; // Slide down
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

  document.title = scrl_value;

  // Your previous logic for appending/removing about us content
  if (scrl_value > 80 && !hasAppended) {
    aboutus.appendChild(main_about);
    main_about.style = `
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding-top: 2rem;`;

    main_about.innerHTML = ` <h1
          class="poppins-bold abt_us"
          style="font-weight: 400; font-size: 2rem"
        >
          About us
        </h1>
        <div
          style="
            border-bottom: 3px solid orange;
            width: 15%;
            display: flex;
            justify-content: center;
            width: 0%;
          "
          class="abt_us_brdr"
        ></div>`;

    hasAppended = true; // Mark as appended
  } else if (scrl_value <= 80 && hasAppended) {
    aboutus.removeChild(main_about);
    hasAppended = false; // Reset the flag
  }
}

addEventListener("scroll", f1);
