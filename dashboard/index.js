import supabase from "../supabaseClient.js";


const getUser = async () => {
  const user = await supabase.auth.getUser();
  if (user.data.user) {
    //TODO: fetch user data from user table using the user id from user.data.user.id
    document.getElementById("dashboardUsername").textContent = user.data.user.email || user.data.user.phone;
  } else {
    window.location.href = "/login"; // Redirect to login if no user is found
  }
}

getUser();

// Logout functionality
const logoutBtn = document.getElementById("logoutBtn"); 
if (logoutBtn) {
  logoutBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
        window.location.href = "/login"; // Redirect to login after logout
    } else {
      console.error("Error signing out:", error.message);
    }
    });
}