// Function to capitalize the first letter of a name
function capitalizeFirstName(name) {
    // Check if the first letter is lowercase
    const isFirstLetterLowercase = /^[a-z]/.test(name);
  
    // Use the ternary operator to capitalize the first letter if needed
    const modifiedName = isFirstLetterLowercase
      ? name.charAt(0).toUpperCase() + name.slice(1)
      : name;
  
    return modifiedName;
  }
  
  // Example usage
  const userName = "john"; // Replace with the user's input
  
  const capitalizedUserName = capitalizeFirstName(userName);
  
  console.log(`Modified Name: ${capitalizedUserName}`);
  