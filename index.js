// JavaScript code
function showWelcomeScreen() {
    var display = document.getElementById("display");
    display.innerHTML = "Welcome to the ATM machine!";
    
    // Clear previous buttons
    clearButtons();

    // Show appropriate buttons for the welcome screen
    addButton("Enter PIN", "showPinScreen()");
    addButton("Exit", "showExitScreen()");
  }
  
  function showPinScreen() {
    var display = document.getElementById("display");
    display.innerHTML = "Please enter your PIN:";
    
    // Clear previous buttons
    clearButtons();
    
    // Show appropriate buttons for the PIN screen
    addButton("Submit", "handlePinSubmit()");
    addButton("Cancel", "showWelcomeScreen()");
  }
  
  function handlePinSubmit() {
    // Retrieve the entered PIN from the input field
    var pin = document.getElementById("pinInput").value;
    
    // Perform PIN validation logic here
    // Example: Check if the entered PIN is correct
    
    // Show appropriate next screen based on PIN validation result
    if (pin === "0000") {
      showTransactionScreen();
    } else {
      showPinErrorScreen();
    }
  }
  
  
  function showTransactionScreen() {
    var display = document.getElementById("display");
    display.innerHTML = "Choose a transaction:";
    
    // Clear previous buttons
    clearButtons();

    // Show appropriate buttons for the transaction screen
    addButton("TRANSFER", "handleTransferInquiry()");

      

  


  
  
    addButton("Withdrawal", "handleWithdrawal()");
    addButton("Exit", "showExitScreen()");
  }
  
  
  function handleTransferInquiry() {
    // Perform Transfer inquiry logic here
    
      // Show appropriate buttons for the transaction screen
      {
      addButton("savings", "handlesavingsInquiry()");
  
      addButton("current", "handlecurrent()");
      }
  }
  
  function handleWithdrawal() {
    // Perform withdrawal logic here
    {
      addButton("savings", "handlesavingsInquiry()");
  
      addButton("current", "handlecurrent()");
      }
  }
  
  function showPinErrorScreen() {
    var display = document.getElementById("display");
    display.innerHTML = "Invalid PIN. Please try again.";
    
    // Clear previous buttons
    clearButtons();
    
    // Show appropriate buttons for the PIN error screen
    addButton("Try Again", "showPinScreen()");
    addButton("Exit", "showExitScreen()");
  }
  
  function showExitScreen() {
    var display = document.getElementById("display");
    display.innerHTML = "Thank you for using the ATM machine!";
    
    // Clear previous buttons
    clearButtons();
    
    // Show appropriate buttons for the exit screen
    addButton("Restart", "showWelcomeScreen()");
  }
  
  function clearButtons() {
    var buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";
  }
  
  function addButton(label, onClickFunction) {
    var buttonsContainer = document.getElementById("buttonsContainer");
    var button = document.createElement("button");
    button.innerHTML = label;
    button.setAttribute("onclick", onClickFunction);
    buttonsContainer.appendChild(button);
  }