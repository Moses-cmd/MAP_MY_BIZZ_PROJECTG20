document.addEventListener("DOMContentLoaded", () => {
  // ===== 1. LOGIN & SIGNUP FORMS =====
  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const emailOrPhone = this.querySelector('input[placeholder="Phone Number or Email Address"]').value;
  
      // Always update userName on login
      localStorage.setItem("userName", emailOrPhone);
  
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "../PAGES/dashboard.html";
    });
  }
  

  const signupForm = document.querySelector("#signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailOrPhone = this.querySelector('input[placeholder="Phone Number or Email Address"]').value;
      localStorage.setItem("userEmail", emailOrPhone);
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "../PAGES/signup.html"; // ✅ assuming signup goes to dashboard
    });
  }
  
  // ===== 2. LOGOUT FUNCTION =====
  document.getElementById("logoutBtn")?.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (confirm("Are you sure you want to log out?")) {
      // ✅ Clear all user-specific data
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("completedModules"); // 👈 This clears module progress
  
      // Optional: If you have more user data (e.g., preferences), clear them too
      // localStorage.removeItem("userEmail");
      // localStorage.removeItem("userPhone");
  
      // ✅ Redirect to login page
      window.location.href = "../index.html";
    }
  });

  // ===== 3. NAVIGATION BUTTONS =====
  document.querySelector(".back-btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    history.back();
  });

  document.querySelector(".next-btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Loading next lesson...");
  });
  document.getElementById("num")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../PAGES/course.html"; // ✅ root → PAGES/
  });
  document.getElementById("num1")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module1.html"; // ✅ root → PAGES/
  });
  document.getElementById("num2")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module2.html"; // ✅ root → PAGES/
  });
  document.getElementById("num3")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module3.html"; // ✅ root → PAGES/
  });
  document.getElementById("num4")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module4.html"; // ✅ root → PAGES/
  });
  document.getElementById("num5")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module5.html"; // ✅ root → PAGES/
  });
  document.getElementById("num6")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module6.html"; // ✅ root → PAGES/
  });
  document.getElementById("num7")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module7.html"; // ✅ root → PAGES/
  });
  document.getElementById("num8")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module8.html"; // ✅ root → PAGES/
  });
  document.getElementById("num9")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module9.html"; // ✅ root → PAGES/
  });
  document.getElementById("num10")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module10.html"; // ✅ root → PAGES/
  });
  document.getElementById("num11")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module11.html"; // ✅ root → PAGES/
  });
  document.getElementById("num12")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module12.html"; // ✅ root → PAGES/
  });
  document.getElementById("num13")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module13.html"; // ✅ root → PAGES/
  });
  document.getElementById("num14")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module14.html"; // ✅ root → PAGES/
  });
  document.getElementById("num15")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../Modules/module15.html"; // ✅ root → PAGES/
  });
  // ===== 4. USER PROFILE DROPDOWN =====
  const userProfile = document.getElementById("userProfile");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (userProfile && dropdownMenu) {
    userProfile.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", () => {
      dropdownMenu.style.display = "none";
    });

    dropdownMenu.addEventListener("click", (e) => e.stopPropagation());
  }
  // ===== 5. EDIT PROFILE PAGE =====
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
    window.location.href = "../PAGES/dashboard.html";
  });

  document.querySelector(".btn-bussiness")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../PAGES/addBusiness.html"; // ✅ root → PAGES/
  });
  document.querySelector(".btn-list")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../PAGES/mybusiness.html"; // ✅ root → PAGES/
  });
  document.querySelector(".btn-add")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../PAGES/business.html"; // ✅ root → PAGES/
  });
  // ===== 6. DASHBOARD GREETING =====
  // ✅ Fix: Check if current page is dashboard.html
  if (window.location.pathname.endsWith("dashboard.html")) {
    if (!localStorage.getItem("isLoggedIn")) {
      window.location.href = "../index.html";
    }
  
    const savedName = localStorage.getItem("userName") || "User";
    const firstName = savedName.split(" ")[0]; // pick first word
  
    // Greeting section
    const greetingEl = document.querySelector(".greeting");
    if (greetingEl) greetingEl.textContent = `WELCOME BACK, ${firstName}!`;
  
    // Navbar user profile
    const userLabelEl = document.getElementById("dashboardUsername");
    if (userLabelEl) userLabelEl.textContent = firstName;
  }
  

  // ===== 7. TOGGLE PASSWORD VISIBILITY =====
  document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", () => {
      const input = document.getElementById(icon.dataset.target);
      if (input) {
        if (input.type === "password") {
          input.type = "text";
          icon.style.color = "#2ec4b6";
        } else {
          input.type = "password";
          icon.style.color = "#888";
        }
      }
    });
  });

  // ===== 8. COURSE FILTERING =====
  const searchInput = document.querySelector(".search-bar input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const clearBtn = document.querySelector(".clear-filters");
  const courses = document.querySelectorAll(".course-card");

  function filterCourses(level = "all") {
    const searchTerm = searchInput?.value.toLowerCase() || "";
    courses.forEach((course) => {
      const title = course.querySelector("h3").textContent.toLowerCase();
      const courseLevel = course.dataset.level;

      if ((level === "all" || courseLevel === level) && title.includes(searchTerm)) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterCourses(btn.dataset.level);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const activeBtn = document.querySelector(".filter-btn.active");
      filterCourses(activeBtn ? activeBtn.dataset.level : "all");
    });
  }

  clearBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    filterButtons.forEach((b) => b.classList.remove("active"));
    document.querySelector('.filter-btn[data-level="all"]')?.classList.add("active");
    courses.forEach((course) => (course.style.display = "block"));
  });

  filterCourses("all");
});
// =============== BUSINESS MANAGEMENT FUNCTIONS ===============

// Save new business to localStorage
function saveBusiness(business) {
  const businesses = JSON.parse(localStorage.getItem("userBusinesses")) || [];
  businesses.push(business);
  localStorage.setItem("userBusinesses", JSON.stringify(businesses));
}

// Delete a business by ID
function deleteBusiness(id) {
  let businesses = JSON.parse(localStorage.getItem("userBusinesses")) || [];
  businesses = businesses.filter(biz => biz.id !== id);
  localStorage.setItem("userBusinesses", JSON.stringify(businesses));
}

// Load all businesses (used in my-business.html)
function loadBusinesses() {
  const container = document.getElementById("businessList");
  const emptyState = document.getElementById("emptyState");

  const businesses = JSON.parse(localStorage.getItem("userBusinesses")) || [];

  if (businesses.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (container) container.innerHTML = "";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (!container) return;

  container.innerHTML = "";

  businesses.forEach(biz => {
    const card = document.createElement("div");
    card.className = "business-card";
    card.innerHTML = `
      <h3>${escapeHtml(biz.name)}</h3>
      <p class="category">Category: ${escapeHtml(biz.category)}</p>
      <p><strong>Location:</strong> ${escapeHtml(biz.location)}</p>
      ${biz.phone ? `<p><strong>Phone:</strong> ${escapeHtml(biz.phone)}</p>` : ""}
      ${biz.email ? `<p><strong>Email:</strong> <a href="mailto:${escapeHtml(biz.email)}">${escapeHtml(biz.email)}</a></p>` : ""}
      ${biz.description ? `<p><strong>About:</strong> ${escapeHtml(biz.description)}</p>` : ""}
      <div class="actions">
        <button class="btn-delete" data-id="${biz.id}">Delete</button>
      </div>
    `;
    container.appendChild(card);
  });

  // Attach delete listeners
  document.querySelectorAll(".btn-delete").forEach(button => {
    button.addEventListener("click", function () {
      const id = Number(this.getAttribute("data-id"));
      deleteBusiness(id);
      loadBusinesses(); // Re-render
    });
  });
}

// Utility to prevent XSS
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Handle form submission (add-business.html)
function handleBusinessForm() {
  const form = document.getElementById("businessForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const description = document.getElementById("description").value.trim();

    if (!name || !category || !location) {
      showMessage("Please fill in all required fields.", "error");
      return;
    }

    const newBusiness = {
      id: Date.now(),
      name,
      category,
      location,
      phone,
      email,
      description
    };

    saveBusiness(newBusiness);
    showMessage("✅ Business added successfully!", "success");

    // Reset form
    form.reset();

    // Redirect after 1.5s
    setTimeout(() => {
      window.location.href = "./PAGES/mybusiness.html";
    }, 1500);
  });
}

// Show message (success/error)
function showMessage(text, type) {
  const msgEl = document.getElementById("message");
  if (!msgEl) return;

  msgEl.textContent = text;
  msgEl.className = `message ${type}`;
  msgEl.style.display = "block";
}// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const planCards = document.querySelectorAll(".plan-card");
  const createButton = document.querySelector(".btn-bussiness");
  const manageButton = document.querySelector(".btn-list");
  let selectedPlan = null;

  // Handle plan selection
  planCards.forEach((card) => {
    const button = card.querySelector(".select-plan-btn");
    button.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent card click from firing

      // Deselect all
      planCards.forEach((c) => c.classList.remove("selected"));
      selectedPlan = null;

      // Select this one
      card.classList.add("selected");
      selectedPlan = card.dataset.plan;
      console.log("Selected plan:", selectedPlan);

      // Optional: Save to localStorage
      localStorage.setItem("selectedBusinessPlan", selectedPlan);

      // Update UI: Simulate business created
      if (selectedPlan) {
        manageButton.textContent = `Manage (1)`;
        manageButton.style.backgroundColor = "#28a745";
      }
    });
  });

  // Click on card also selects it
  planCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Trigger the button click
      this.querySelector(".select-plan-btn").click();
    });
  });

  // Create Business Button
  createButton.addEventListener("click", function () {
    if (!selectedPlan) {
      alert("Please select a plan first!");
      return;
    }

    alert(`You have selected the ${selectedPlan.toUpperCase()} plan. Redirecting to setup...`);
    // Here you can redirect to a form
    // window.location.href = `./create-business.html?plan=${selectedPlan}`;
  });

  // Optional: Restore previously selected plan on page load
  const savedPlan = localStorage.getItem("selectedBusinessPlan");
  if (savedPlan) {
    const savedCard = document.querySelector(`.plan-card[data-plan="${savedPlan}"]`);
    if (savedCard) {
      savedCard.classList.add("selected");
      selectedPlan = savedPlan;
      manageButton.textContent = `Manage (1)`;
    }
  }
});// dashboard.js - Progress Tracker

// JS/script.js

// Number of total modules
const TOTAL_MODULES = 15;

// DOM Elements — will be set when DOM is ready
let progressBar = null;
let progressText = null;

// Retrieve completed modules from localStorage
function getCompletedModules() {
  const saved = localStorage.getItem("completedModules");
  return saved ? JSON.parse(saved) : [];
}

// Save updated completed modules
function saveCompletedModules(completed) {
  localStorage.setItem("completedModules", JSON.stringify(completed));
}

// Update progress bar and text
function updateProgress() {
  const completed = getCompletedModules();
  const completedCount = completed.length;
  const percentage = ((completedCount / TOTAL_MODULES) * 100).toFixed(2);

  // Re-query elements in case they weren't ready
  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  if (bar) {
    bar.style.width = `${percentage}%`;
  } else {
    console.warn("Progress bar element not found");
  }

  if (text) {
    text.innerHTML = `${percentage}%<br>${completedCount} of ${TOTAL_MODULES} modules completed`;
  } else {
    console.warn("Progress text element not found");
  }

  // Update "Continue Learning" counter
  const continueLearning = document.querySelector('.metric-card h2 ~ p');
  if (continueLearning) {
    continueLearning.textContent = `${completedCount}/${TOTAL_MODULES}`;
  }

  // Update module checklist
  updateModuleList(completed);
}

// Update module checklist
function updateModuleList(completed) {
  const moduleList = document.querySelector(".metric-card ul");
  if (!moduleList) return;

  moduleList.innerHTML = "";
  for (let i = 1; i <= TOTAL_MODULES; i++) {
    const moduleId = `Module ${i}`;
    const isCompleted = completed.includes(moduleId);
    const li = document.createElement("li");
    li.innerHTML = `<span class="checkmark">${isCompleted ? '✔' : '○'}</span> ${moduleId}`;
    moduleList.appendChild(li);
  }
}

// Mark module as completed
function markModuleAsCompleted(moduleId) {
  let completed = getCompletedModules();
  if (!completed.includes(moduleId)) {
    completed.push(moduleId);
    saveCompletedModules(completed);
  }
  updateProgress(); // Update UI
}

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Re-assign elements after DOM loads
  progressBar = document.getElementById("progressBar");
  progressText = document.getElementById("progressText");

  // Update progress display
  updateProgress();

  console.log("Dashboard loaded. Progress:", getCompletedModules());
});

// Save which module the user last opened
function saveLastModule(moduleId) {
  localStorage.setItem("lastOpenedModule", moduleId);
}

// Get the last opened module
function getLastModule() {
  return localStorage.getItem("lastOpenedModule") || "Module 1";
}

// Convert Module Name to File (e.g., Module 3 → module3.html)
function getModuleFile(moduleId) {
  const num = moduleId.replace("Module ", "");
  return `module${num}.html`;
}