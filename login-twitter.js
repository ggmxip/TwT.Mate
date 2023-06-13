
$(document).ready(function() {
      $('#twitter-button').on('click', function() {
        // Initialize with your OAuth.io app public key
        OAuth.initialize('gZeK0rjdjMpH70JACRM_kaKLUIc');
        // Use popup for OAuth
        OAuth.popup('twitter').then(twitter => {
          console.log(twitter);
          // Retrieves user data from OAuth provider
          console.log(twitter.me());
        });
      });
    });

  
    // $('#twitter-button').on('click', function() {
    //   // Initialize with your OAuth.io app public key
    //   OAuth.initialize('HwAr2OtSxRgEEnO2-JnYjsuA3tc');
    //   // Use popup for OAuth
    //   OAuth.popup('twitter').then(twitter => {
    //     console.log('twitter:', twitter);
    //     // Prompts 'welcome' message with User's email on successful login
    //     // #me() is a convenient method to retrieve user data without requiring you
    //     // to know which OAuth provider url to call
    //     twitter.me().then(data => {
    //       console.log('data:', data);
    //       alert('Twitter says your email is:' + data.email + ".\nView browser 'Console Log' for more details");
    //     });
    //     // Retrieves user data from OAuth provider by using #get() and
    //     // OAuth provider url    
    //     twitter.get('/1.1/account/verify_credentials.json?include_email=true').then(data => {
    //       console.log('self data:', data);
    //     })    
    //   });
    // })


    // js for the type writer :)
// JavaScript code
// const text = "Welcome to TwT.Mate";
// let index = 0;

// function typeWriter() {
//   if (index < text.length) {
//     document.getElementById("typewriter").innerHTML += text.charAt(index);
//     index++;
//     setTimeout(typeWriter, 100);
//   } else {
//     setTimeout(eraseText, 3000);
//   }
// }

// function eraseText() {
//   if (index >= 0) {
//     document.getElementById("typewriter").innerHTML = "";
//     index = 0;
//     setTimeout(typeWriter, 100);
//   }
// }

// typeWriter();

const text = "Welcome to TwT.Mate";
let index = 0;
let eraseMode = false;

function typeWriter() {
  const typewriterElement = document.getElementById("typewriter");
  
  if (index < text.length && !eraseMode) {
    typewriterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else if (index >= 0 && eraseMode) {
    typewriterElement.innerHTML = text.substring(0, index);
    index--;
    setTimeout(typeWriter, 50);
  } else if (index >= text.length && !eraseMode) {
    eraseMode = true;
    setTimeout(typeWriter, 2000);
  } else if (index < 0 && eraseMode) {
    eraseMode = false;
    index = 0;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();



