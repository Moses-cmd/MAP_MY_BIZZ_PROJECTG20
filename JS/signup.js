import supabase from "../supabaseClient.js";

const signupForm = document.querySelector("#signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const emailOrPhone = document.getElementById("email").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const saId = document.getElementById("saId").value.trim(); // <-- new field for ID

    // Validate inputs
    if (!fullName || !emailOrPhone || !password || !confirmPassword || !saId) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // ✅ Validate SA ID (must be exactly 13 digits)
    if (!/^\d{13}$/.test(saId)) {
      alert("South African ID must be exactly 13 digits.");
      return;
    }

    let signUpPayload = {
      password,
      options: {
        data: {
          full_name: fullName,
          sa_id: saId, // save SA ID in metadata
        },
      },
    };

    // Detect email or phone
    if (emailOrPhone.includes("@gmail.com")) {
      signUpPayload.email = emailOrPhone;
    } else if (emailOrPhone.startsWith("+27") && /^\+27\d{9}$/.test(emailOrPhone)) {
      signUpPayload.phone = emailOrPhone;
    } else {
      alert("Please enter a valid Gmail address or +27 phone number.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp(signUpPayload);

      if (error) throw error;

      console.log("✅ Auth user created:", data.user);
      alert("Signup successful! Please check your email or phone for verification.");

      window.location.href = "../PAGES/signup.html";

    } catch (err) {
      console.error("🚫 Signup error:", err);
      alert("Error: " + (err.message || "Something went wrong."));
    }
  });
}
