import supabase from "../supabaseClient.js";

const signupForm = document.querySelector("#signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const emailOrPhone = document.getElementById("email").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    // Validate inputs
    if (!fullName || !emailOrPhone || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    let signUpPayload = {
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    };

    // Detect email or phone and build correct payload
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

      // Redirect to a welcome/dashboard page
      window.location.href = "../PAGES/welcome.html";

    } catch (err) {
      console.error("🚫 Signup error:", err);
      alert("Error: " + (err.message || "Something went wrong."));
    }
  });
}
