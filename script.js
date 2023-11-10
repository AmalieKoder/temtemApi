// Henter fra HTML til JavaScript

const boredCard = document.querySelector(".bored_card");





// Fetches the data from a Json file and displays it in the browser
function generalDetails() {
  fetch("./Temtem/General_details.json")
       .then((response) => response.json())
       .then((data) => {
        boredCard.innerHTML = "";
         console.log(data)
         if (data && data.general_details && data.general_details.length > 0) {
          const firstTemtem = data.general_details[0];
          const newTemtem = document.createElement("p");
         newTemtem.innerText = firstTemtem.No;
         boredCard.appendChild(newTemtem);
         } else {
          // If somthing wrong with the json file it getting a error in the console
          console.error("Invalid JSON structure or data not found");
         }
         if (data && data.general_details && data.general_details.length > 0) {
          const firstTemtem = data.general_details[0];
          const newTemtem = document.createElement("p");
         newTemtem.innerText = firstTemtem.Name;
         boredCard.appendChild(newTemtem);
         } else {
          // If somthing wrong with the json file it getting a error in the console
          console.error("Invalid JSON structure or data not found");
         }
         if (data && data.general_details && data.general_details.length > 0) {
          const firstTemtem = data.general_details[0];
          const newTemtem = document.createElement("p");
         newTemtem.innerText = firstTemtem.Type;
         boredCard.appendChild(newTemtem);
         } else {
          // If somthing wrong with the json file it getting a error in the console
          console.error("Invalid JSON structure or data not found");
         } 
        })
        
       

       // If there is an error, log it to the console
    .catch((error) => console.log(error));

}

// Fetches the data from a Json file and displays it in the browser
function technicalDetails() {
  fetch("./Temtem/technicalDetails.json")
       .then((response) => response.json())
       .then((data) => {
        boredCard.innerHTML = "";
         console.log(data)
         if (data && data.technicalDetails && data.technicalDetails.length > 0) {
          const firstTemtem = data.technicalDetails[0];
          const newTemtem = document.createElement("p");
         newTemtem.innerText = firstTemtem.Gender_Ratio;
         boredCard.appendChild(newTemtem);
         } else {
          // If somthing wrong with the json file it getting a error in the console
          console.error("Invalid JSON structure or data not found");
         }
         if (data && data.technicalDetails && data.technicalDetails.length > 0) {
          const firstTemtem = data.technicalDetails[0];
          const newTemtem = document.createElement("p");
         newTemtem.innerText = firstTemtem.Catch;
         boredCard.appendChild(newTemtem);
         } else {
          // If somthing wrong with the json file it getting a error in the console
          console.error("Invalid JSON structure or data not found");
         }
         if (data && data.technicalDetails && data.technicalDetails.length > 0) {
          const firstTemtem = data.technicalDetails[0];
          const newTemtem = document.createElement("p");
         newTemtem.innerText = firstTemtem.Traits;
         boredCard.appendChild(newTemtem);
         } else {
          // If somthing wrong with the json file it getting a error in the console
          console.error("Invalid JSON structure or data not found");
         }
        })
       

       // If there is an error, log it to the console
    .catch((error) => console.log(error));

}

// Fetches the data from a Json file and displays it in the browser
function physicalDetails() {
  fetch("./Temtem/Physical_details.json")
       .then((response) => response.json())
       .then((data) => {
        boredCard.innerHTML = "";
         console.log(data)
         if (data && data.physical_details&& data.physical_details.length > 0) {
          const firstTemtem = data.physical_details[0];
          const newTemtem = document.createElement("p");
         newTemtem.innerText = firstTemtem.Height;
         boredCard.appendChild(newTemtem);
         } else {
          // If somthing wrong with the json file it getting a error in the console
          console.error("Invalid JSON structure or data not found");
         }
         if (data && data.physical_details && data.physical_details.length > 0) {
          const firstTemtem = data.physical_details[0];
          const newTemtem = document.createElement("p");
         newTemtem.innerText = firstTemtem.Weight;
         boredCard.appendChild(newTemtem);
         } else {
          // If somthing wrong with the json file it getting a error in the console
          console.error("Invalid JSON structure or data not found");
         }
        
        })
       

       // If there is an error, log it to the console
    .catch((error) => console.log(error));

}

// Fetches the data from a Json file and displays it in the browser
function catchingDetails() {
  fetch("./Temtem/Catching_details.json")
       .then((response) => response.json())
       .then((data) => {
        boredCard.innerHTML = "";
         console.log(data)
         if (data && data.catching_details && data.catching_details.length > 0) {
          const firstTemtem = data.catching_details[0];
          const newTemtem = document.createElement("p");
         newTemtem.innerText = firstTemtem.Locations;
         boredCard.appendChild(newTemtem);
         } else {
          // If somthing wrong with the json file it getting a error in the console
          console.error("Invalid JSON structure or data not found");
         }
         
        })
       

       // If there is an error, log it to the console
    .catch((error) => console.log(error));

}
