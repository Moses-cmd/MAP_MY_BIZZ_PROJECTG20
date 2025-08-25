// ===== 1. LOGIN & SIGNUP FORMS =====

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Logged in successfully!...");
    window.location.href = "/MAP_MY_BIZZ_PROJECTG20/FRONT_END/PAGES/dashboard.html";
  });
});
document.querySelector("#signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailOrPhone = this.querySelector('input[placeholder="Phone Number or Email Address"]').value;
  localStorage.setItem("userEmail", emailOrPhone);
  window.location.href = "/MAP_MY_BIZZ_PROJECTG20/FRONT_END/PAGES/signup.html";
});


// ===== 2. LOGOUT FUNCTION =====
document.getElementById("logoutBtn")?.addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("Are you sure you want to log out?")) {
    localStorage.removeItem("isLoggedIn");
    // Optionally clear user data
    // localStorage.clear();
    window.location.href = "/MAP_MY_BIZZ_PROJECTG20/FRONT_END/PAGES/index.html"; // Go back to login
  }
});

// ===== 3. NAVIGATION BUTTONS (Module Page) =====
document.querySelector(".back-btn")?.addEventListener("click", function (e) {
  e.preventDefault();
  history.back();
});

document.querySelector(".next-btn")?.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Loading next lesson...");
  // Future: window.location.href = "module4.html";
});

document.querySelector(".btn-primary")?.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/MAP_MY_BIZZ_PROJECTG20/FRONT_END/PAGES/course.html";
});

document.querySelector(".quiz-btn")?.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Starting quiz...");
  window.location.href = "/MAP_MY_BIZZ_PROJECTG20/FRONT_END/PAGES/quiz3.html";
});

// ===== 4. USER PROFILE DROPDOWN (Dashboard) =====
const userProfile = document.getElementById("userProfile");
const dropdownMenu = document.getElementById("dropdownMenu");

if (userProfile && dropdownMenu) {
  userProfile.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    }
  });

  // Prevent dropdown from closing when clicking inside
  dropdownMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

// ===== 5. EDIT PROFILE PAGE: Save and redirect =====
document.getElementById("saveBtn")?.addEventListener("click", function () {
  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phoneNumber").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !phone || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userPhone", phone);
  localStorage.setItem("userEmail", email);

  alert("Your information has been updated!");
  window.location.href = "/MAP_MY_BIZZ_PROJECTG20/FRONT_END/PAGES/dashboard.html";
});

// ===== 6. CANCEL ON EDIT PAGE =====
document.getElementById("cancelBtn")?.addEventListener("click", function () {
  if (confirm("Discard changes?")) {
    window.location.href = "/MAP_MY_BIZZ_PROJECTG20/FRONT_END/PAGES/dashboard.html";
  }
});

// ===== 7. DASHBOARD: Load user name on page load =====
window.addEventListener("DOMContentLoaded", () => {
  // Check login status
  if (!localStorage.getItem("isLoggedIn") && !window.location.pathname.includes("/MAP_MY_BIZZ_PROJECTG20/FRONT_END/PAGES/index.html")) {
    window.location.href = "/MAP_MY_BIZZ_PROJECTG20/FRONT_END/PAGES/index.html";
  }

  const savedName = localStorage.getItem("userName") || "Prince";
  const firstName = savedName.split(" ")[0].toUpperCase();

  const greetingEl = document.querySelector(".greeting");
  if (greetingEl) {
    greetingEl.textContent = `WELCOME BACK, ${firstName}!`;
  }

  const userLabelEl = document.querySelector(".user-profile span");
  if (userLabelEl) {
    userLabelEl.textContent = `Welcome, ${firstName}!`;
  }
  document.querySelectorAll('.toggle-password').forEach(icon => {
  icon.addEventListener('click', () => {
    const input = document.getElementById(icon.dataset.target);
    if (input.type === 'password') {
      input.type = 'text';
      icon.style.color = '#2ec4b6';
    } else {
      input.type = 'password';
      icon.style.color = '#888';
    }
  });
});

// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select all toggle-password icons
  document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
      const input = document.getElementById(icon.dataset.target);
      if (input.type === 'password') {
        input.type = 'text';
        icon.style.color = '#2ec4b6'; // Change icon color when visible
      } else {
        input.type = 'password';
        icon.style.color = '#888';    // Reset icon color when hidden
      }
    });
  });
});

});
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const courses = document.querySelectorAll(".course-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active from all buttons
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedLevel = btn.getAttribute("data-level");

      courses.forEach(course => {
        if (selectedLevel === "all" || course.dataset.level === selectedLevel) {
          course.style.display = "block";
        } else {
          course.style.display = "none";
        }
      });
    });
  });
});
// Select elements
const searchInput = document.querySelector('.search-bar input');
const filterButtons = document.querySelectorAll('.filter-btn');
const clearBtn = document.querySelector('.clear-filters');
const modules = document.querySelectorAll('.module-card'); // each course card

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.search-bar input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const clearBtn = document.querySelector('.clear-filters');
  const courses = document.querySelectorAll('.course-card'); // make sure your course cards have class="course-card"

  // Function to filter courses
  function filterCourses(level = 'all') {
    const searchTerm = searchInput.value.toLowerCase();
    courses.forEach(course => {
      const title = course.querySelector('h3').textContent.toLowerCase();
      const courseLevel = course.dataset.level;

      if ((level === 'all' || courseLevel === level) && title.includes(searchTerm)) {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    });
  }

  // Filter button click
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCourses(btn.dataset.level);
    });
  });

  // Search input
  searchInput.addEventListener('input', () => {
    const activeBtn = document.querySelector('.filter-btn.active');
    filterCourses(activeBtn.dataset.level);
  });

  // Clear filters
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterButtons.forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-level="all"]').classList.add('active');
    courses.forEach(course => course.style.display = 'block');
  });

  // Initialize: show all courses
  filterCourses('all');
});
