let balance = 0;
let name = `Test NAME`;
var userGivenName = "";

// Greet the user by name
      // Search the document for the 'username' element
      /*
        ORGINAL
      */
      //let _username = document.getElementById('username');
      // Change the content of the element
      //_username.innerHTML = name;
      while(userGivenName.length == 0){
        userGivenName = window.prompt("Please enter your username:");
      }
      document.getElementById('username').innerHTML = userGivenName;
      // The above can be simplified:
      //    document.getElementById('username').innerHTML = name;



// 1. Let them know their starting balance
      // Search the document for the 'balance' element
      // Change the content of the element
      var userBalance = document.getElementById("balance");
      userBalance.innerHTML = balance;

var completeTransaction = function() {

  // Store the value from the 'amount' input in a variable (let)
        // Make sure it's a number, not a string!!!  parseInt()

  //Get the value of the number in the text box when button is clicked
  let _amount = parseFloat(document.getElementById('amount').value);

  /***
    Check if value provided is a number. If not a number, inform user
    to correct response. If number is provided, add the value to baalance;
  ***/
  if(isNaN(_amount)){
    alert("Value must be a number!");
  }
  else{
  // 1. Update the balance using the transaction value
  balance = balance + _amount;

  // 2. Add a record to the history showing the amount deposited
  document.getElementById('history').innerHTML += '<li>You deposited: $'+ _amount + '</li>';

  // Update the balance in the document
  document.getElementById('balance').innerHTML = balance;
}
  // 3. IF the balance is less than 0, make the balance red, else make it black
        // A) change the style.color of the balance
        // B) create a css class and .add() a class to the balance

        /*A
        if(balance < 0)
        {
            userBalance.style.color = "red";
        }
        else{
          userBalance.style.color = "black";
        }
*/
        /*B*/
        if(balance <0)
        {
          userBalance.classList.remove("positiveBalance");
          userBalance.classList.add("negativeBalance")
        }
        else{
          userBalance.classList.add("positiveBalance");
        }

};


//Function is called when HMTL element with ID 'process' is clicked.
document.getElementById('process').addEventListener('click', completeTransaction)

// EVENT:
//   1) Which object should it be listening to?     document.getElementById('process')
//   2) What type of event are we waiting for?      'click'
//   3) What do we do when it happens? (callback)   completeTransaction



// Note: Both records must be visible
