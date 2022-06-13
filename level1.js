let user = prompt("Enter your name to proceed");

const greetUser = () => {
    let greetingText;
    if (user == null){
        alert("That's not a valid name, enter a valid name to continue");
     }
     else{
         greetingText=`Welcome, ${user}`;
     }
     return greetingText;

};

console.log(greetUser);