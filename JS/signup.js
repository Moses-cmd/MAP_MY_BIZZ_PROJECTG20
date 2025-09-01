import supabase from "../supabaseClient.js";

const signupForm = document.querySelector("#signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const emailOrPhone = document.getElementById("email").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    let email = null;
    let phone = null;
    if (emailOrPhone.includes("@gmail.com")) {
      email = emailOrPhone;
    } else if (emailOrPhone.startsWith("+27")) {
      phone = emailOrPhone;
    }

    try {
      // Create Supabase auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        phone,
        password,
      });

      if (authError) throw authError;

      console.log("Auth user created:", authData.user);

      // Redirect to activation page (no localStorage needed)
      window.location.href = "../Pages/activation.html";

    } catch (err) {
      console.error("Signup error:", err.message);
      alert("Error: " + err.message);
    }
  });
}
