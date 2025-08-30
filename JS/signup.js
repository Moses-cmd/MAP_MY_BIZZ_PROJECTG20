import supabase from "../supabaseClient.js";

const signupForm = document.querySelector("#signupForm");
  if (signupForm) {
    let phone;
    signupForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const fullName = document.getElementById('fullName').value;
      //console.log(fullName);
      const emailOrPhone = document.getElementById('email').value;
      if(emailOrPhone.includes('@gmail.com'))
      {const email = emailOrPhone;} 
      else if (emailOrPhone.includes('+27')){
        phone = emailOrPhone;
      };
      const password = document.getElementById('signupPassword').value;
      const { data,error } = await supabase.auth.signUp({
        email: emailOrPhone.includes('@gmail.com') ? emailOrPhone : undefined,
        phone: emailOrPhone.includes('+27') ? emailOrPhone : undefined,
        password: password,
        name: fullName
      });
    });
  }