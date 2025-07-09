/* Ambons HTML5 Template  */

/************ TABLE OF CONTENTS ***************
01. Owl carousel slider
02. Sticky header
03. Prealoader
04. Language switcher
05. PrettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

**********************************************/
const tablist = document.querySelector(".carousel-tabs");
const tabs = Array.from(tablist.querySelectorAll(".tab-button")); // Convert NodeList to Array
const contentContainer = document.querySelector(".progress-carousel-content");
const autoSwitchInterval = 5000; // 5 seconds
let currentTabIndex = 0;
let autoSwitchTimer = null;
let userInteracted = false;
const stepsData = [
  {
    id: "Step 1",
    title: "Nearest Unit Allocated Manually",
    description:
      "Our operations team quickly assigns the closest available ambulance car, using our in-house coordination system.",
    // visualHtml: '<img src="https://i.imgur.com/KzM5nS7.png" alt="Cashflow dashboard showing income and expenses.">'
  },
  {
    id: "Step 2",
    title: "Ambulance Dispatched Without Delay",
    description:
      "An ambulance is sent right away, guaranteeing an ambulance will respond anytime in Mumbai, Thane, or a nearby area",
  },
  {
    id: "Step 3",
    title: "Medical Team Arrives for Support",
    description:
      "Our qualified team comes equipped with essential medical supplies, offering immediate care until transport to the hospital commences.",
  },
  {
    id: "Step 4",
    title: "Patient Shifted to Hospital",
    description:
      "We ensure safe and secure transport to the nearest or preferred hospital via our well-equipped ambulance service in Mumbai.",
  },
  {
    id: "Step 5",
    title: "Smooth Coordination Till Completion",
    description:
      "We maintain contact until the patient transfer is finished at the hospital. Your emergency receives complete attention.",
  },
];

//Hide Loading Box (Preloader)
function handlePreloader() {
  if ($(".loader-wrap").length) {
    $(".loader-wrap").delay(500).fadeOut(500);
  }
}
window.onload = function () {
  handlePreloader();
};
const letters = document.querySelectorAll(
  ".handle-preloader .animation-preloader .txt-loading .letters-loading"
);
letters.forEach((el, index) => {
  const delay = 0.2 * (index + 1); // 0.2s, 0.4s, ...
  el.style.setProperty("--delay", `${delay}s`);
  el.style.setProperty("animation-delay", `${delay}s`);
});

// Counter Function
function Counter(elementId, start = 1, end = 150, speed = 50) {
  const element = document.getElementById(elementId);
  let count = start;
  const interval = setInterval(() => {
    if (count <= end) {
      element.innerHTML = count;
      count++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
Counter("num1", 120, 150, 50);
Counter("num2", 40, 98, 50);
Counter("num3", 180, 250, 50);
Counter("num4", 50, 100, 50);

// // Intersection Observer to detect when #counter-section enters view
// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         Counter("num1", 120, 150, 50);
//         Counter("num2", 40, 98, 50);
//         Counter("num3", 180, 250, 50);
//         Counter("num4", 50, 100, 50);
//         observer.unobserve(entry.target); // Only run once
//       }
//     });
//   },
//   { threshold: 0.5 }
// ); // Trigger when 50% of the section is visible

// observer.observe(document.querySelectorAll(".highlight-section"));

// Process Js
function generateFeaturePanelHTML(feature) {
  return `
            <div class="process-panel"
                 id="panel-${feature.id}"
                 role="tabpanel"
                 aria-labelledby="tab-${feature.id}"
                 tabindex="-1">
                <div class="process-text">
                    <h2>${feature.title}</h2>
                    <p>${feature.description}</p>
                
                    <a
                      class="btn-style"
                      href="tel:9920963000"
                      data-toggle="modal"
                      data-target="#bookambulancemumbai"
                    >
                      <span class="txt">Call Now</span>
                    </a>
                </div>
            </div>
        `;
}

function initializeCarousel() {
  // Generate content panels
  stepsData.forEach((feature) => {
    contentContainer.insertAdjacentHTML(
      "beforeend",
      generateFeaturePanelHTML(feature)
    );
  });

  // Enhance tabs with ARIA attributes
  tabs.forEach((tab, index) => {
    const featureId = stepsData[index].id;
    tab.id = `tab-${featureId}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `panel-${featureId}`);
    if (index === 0) {
      tab.setAttribute("aria-selected", "true");
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("aria-selected", "false");
      tab.setAttribute("tabindex", "-1");
    }
  });
  // Activate the first tab and content initially
  document.getElementById(`panel-${stepsData[0].id}`).classList.add("active");
}

function setActiveTab(index, setFocus = false) {
  // Reset all progress bars immediately if switching
  tabs.forEach((t) => {
    const progressBar = t.querySelector(".progress-bar");
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    void progressBar.offsetWidth; // Reflow
  });

  // Update tabs and panels
  tabs.forEach((tab, i) => {
    const panelId = tab.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    if (i === index) {
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      tab.setAttribute("tabindex", "0");
      if (panel) panel.classList.add("active");
      if (setFocus) {
        tab.focus();
      }
    } else {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
      tab.setAttribute("tabindex", "-1");
      if (panel) panel.classList.remove("active");
    }
  });

  currentTabIndex = index;

  if (!userInteracted) {
    const activeProgressBar = tabs[index].querySelector(".progress-bar");
    activeProgressBar.style.transition = `width ${
      autoSwitchInterval / 1000
    }s linear`;
    activeProgressBar.style.width = "100%";
  } else {
    // If user interacted, fill the current tab's bar instantly to show it's selected
    const activeProgressBar = tabs[index].querySelector(".progress-bar");
    // activeProgressBar.style.transition = "none"; // No animation
    activeProgressBar.style.transition = `width ${
      autoSwitchInterval / 1000
    }s linear`;
    activeProgressBar.style.width = "100%";
  }
}

function handleUserInteractionAndSwitch(newIndex, setFocusOnTab = false) {
  userInteracted = true;
  clearTimeout(autoSwitchTimer);
  setActiveTab(newIndex, setFocusOnTab);
}

function startAutoSwitch() {
  if (userInteracted) return;

  clearTimeout(autoSwitchTimer);
  setActiveTab(currentTabIndex); // Sets up the current tab and its progress bar

  autoSwitchTimer = setTimeout(() => {
    currentTabIndex = (currentTabIndex + 1) % tabs.length;
    startAutoSwitch(); // Loop
  }, autoSwitchInterval);
}

// Event Listeners
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    handleUserInteractionAndSwitch(index, true); // Focus is handled by click
  });
});

// Initialize
initializeCarousel();
startAutoSwitch();

// Process End
