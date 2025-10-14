function maskEmail(email){
     const [local, domain] = email.split("@");
}



function maskEmail(email) {
 let Indexmail = email.indexOf("@");
  
 let username = email.slice(0, Indexmail);
  
 let domain = email.slice(Indexmail);
 
 let firstMail = username[0];

 let lastMail = username[username.length - 1];
  
 let stars = "*".repeat(username.length - 2);

 let maskedEmail = firstMail + stars + lastMail + domain;

 return maskedEmail;
}
console.log(maskEmail("lasante@gmail.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("ebubeiyiegbu@domain.org"));

               //OR
 function maskEmail(email) {
 let Indexmail = email.indexOf("@");
  
 let username = email.slice(0,    Indexmail);
  
 let domain = email.slice(Indexmail);
 
 let firstMail = username[0];

 let lastMail = username[username.length - 1];
  
 let stars = "*".repeat(username.length - 2);

 let maskedEmail = firstMail + stars + lastMail + domain;

 return maskedEmail;
}
let email = "apple.pie@example.com";
console.log(maskEmail(email));

console.log(maskEmail("lasante@gmail.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("ebubeiyiegbu@domain.org"));