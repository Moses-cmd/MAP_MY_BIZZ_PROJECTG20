import supabase from "../supabaseClient.js";

const businessForm = document.querySelector("#businessForm");

if (businessForm) {
  businessForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const Businessname = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value.trim();
    const location = document.getElementById("location").value.trim();
    const Businessphone = document.getElementById("phone").value.trim();
    const Businessemail = document.getElementById("email").value.trim();
    const description = document.getElementById("description").value.trim();

    try {
      // Get the logged-in user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;
      if (!user) throw new Error("No user is logged in.");

      // Insert into the "business" table
      const { data, error } = await supabase
        .from("Business")
        .insert([
          {
            name: Businessname,
            category: category,
            location: location,
            phone: Businessphone,
            email: Businessemail,
            description: description,
            user_id: user.id, // link business to logged-in user
          },
        ]);

      if (error) throw error;

      alert("Business added successfully!");
      console.log("Inserted business:", data);
      businessForm.reset();

    } catch (err) {
      console.error("Insert error:", err.message);
      alert("Error: " + err.message);
    }
  });
}
