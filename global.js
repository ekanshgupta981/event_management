var aboutus = document.getElementById("about_us_section");
var main_about = document.createElement("div");
var aboutusdetails = document.getElementById("about_us_section_details");
var main_aboutdetails = document.createElement("div");
let hasAppended = false;
let hasAppended1 = false;

let lastScrollTop = 0;
let nav = document.querySelector(".nav_sec");

function f1() {
  var scrl_value = Math.round(window.scrollY);

  // here

  var currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    nav.style.transform = "translateY(-130%)";
  } else {
    nav.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

  // to here

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

  if (scrl_value > 190 && !hasAppended1) {
    aboutusdetails.appendChild(main_aboutdetails);

    main_aboutdetails.innerHTML = ` <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div style="width: 40%" class="abt_us_details">
          <img
            src="assets/images/aboutus.jpg"
            alt=""
            style="width: 100%; border-radius: 2px"
          />
        </div>
        <div style="width: 55%" class="about_pera-parent">
          <p
            class="poppins-bold"
            style="
              font-weight: 400;
              color: rgb(28, 28, 28);
              margin-bottom: 1rem;text-align: justify;
            "
          >
            Welcome to Eventura, where passion meets precision in event
            management. Founded on the belief that every occasion deserves to be
            unforgettable, we specialize in curating unique experiences that
            leave lasting impressions. Our team brings together expertise and
            creativity, focusing on every detail to make your vision come to
            life, whether it’s a corporate gathering, a wedding, or an exclusive
            private event. At Eventura, we blend professionalism with personal
            touch, ensuring seamless coordination and unmatched service quality.
            Join us as we turn moments into memories and make every event an
            extraordinary celebration
          </p>
          <p
            class="poppins-bold"
            style="
              font-weight: 400;
              color: rgb(28, 28, 28);
              margin-bottom: 1rem;text-align: justify;
            "
          >
            At Eventura, we believe every event is an opportunity to create
            something extraordinary. Let us handle the details, so you can enjoy
            the moments that matter most.
          </p>
          <p
            class="poppins-bold"
            style="font-weight: 400; color: rgb(28, 28, 28);text-align: justify;"
          >
            Event management is the art and science of organising events for a
            variety of reasons.They can be small, large, or personal and can be
            anything from weddings to corporate conferences and conventions. If
            you need to organise an event, it is best to go with event
            management companies.
          </p>
        </div>
      </div>`;

    hasAppended1 = true; // Mark as appended
  } else if (scrl_value <= 190 && hasAppended1) {
    aboutusdetails.removeChild(main_aboutdetails);
    hasAppended1 = false; // Reset the flag
  }
}

addEventListener("scroll", f1);

let isFirstEventVisible = true;

// Set an interval to toggle visibility every 3 seconds
setInterval(() => {
  if (isFirstEventVisible) {
    document.getElementById("event-1").style.display = "none";
    document.getElementById("event-2").style.display = "flex";
  } else {
    document.getElementById("event-2").style.display = "none";
    document.getElementById("event-1").style.display = "flex";
  }

  isFirstEventVisible = !isFirstEventVisible;
}, 5000);
