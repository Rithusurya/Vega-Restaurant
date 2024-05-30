// html element manipulation
// button click to change image and text

const Image = document.getElementById("Image");
const Image2 = document.getElementById("Image2");
const Image3 = document.getElementById("Image3"); // Added Image3
const Para = document.getElementById("Para");
const Description = document.getElementById("Description");
const Description2 = document.getElementById("Description2"); // Added Description2
const Description3 = document.getElementById("Description3"); // Added Description3

function changeCuisine(cuisine) {
    // Change image source and text based on cuisine
    switch (cuisine) {
        case 'Italian':
            Image.src = "C:\\Users\\Dell\\OneDrive\\Desktop\\Vega Restaurant\\image1.png"; // Corrected escape characters
            Image2.src = "C:\\Users\\Dell\\OneDrive\\Desktop\\Vega Restaurant\\pic3.png"; // Corrected escape characters
            Image3.src = "C:\\Users\\Dell\\OneDrive\\Desktop\\Vega Restaurant\\png1.png"; // Corrected escape characters
            Para.textContent = "A carbohydrates and provides energy";
            Description.textContent = "macaroni pasta";
            Description2.textContent = "pasta sauce";
            Description3.textContent = "Fried Tilapia"; // Added empty text content
            break;
        case 'Arabian':
            Image.src = "file:///C:/Users/Dell/OneDrive/Desktop/Vega%20Restaurant/kisspng-restaurante-baghdad-middle-eastern-cuisine-cafe-ar-doy-doy-kebab-halal-frankfurt-gerichte-vom-grill-5b650f231e3031.1269364515333496671237.png";
            Image2.src = "file:///C:/Users/Dell/OneDrive/Desktop/Vega%20Restaurant/16a42c10-a282-42d8-bec7-bf28bfc730c5-persian-isolated-transparent-background_191095-39702.png";
            Image3.src = "file:///C:/Users/Dell/OneDrive/Desktop/Vega%20Restaurant/istockphoto-1333127665-612x612-removebg-preview.png";
            Para.textContent = "Arabian Cuisine Description";
            Description.textContent = "Adana Kebab";
            Description2.textContent = "Cooked rice With meat";
            Description3.textContent = "Arabian Style Biriyani";
            break;
        case 'Chineses':
            Image.src = "file:///C:/Users/Dell/OneDrive/Desktop/Vega%20Restaurant/pexels-momo-king-5409015.jpg";
            Image2.src = "file:///C:/Users/Dell/OneDrive/Desktop/Vega%20Restaurant/pexels-kei-photo-2741448%20(1).jpg";
            Image3.src = "file:///C:/Users/Dell/OneDrive/Desktop/Vega%20Restaurant/pexels-eiliv-aceron-6896514.jpg";
             
            Para.textContent = "Chinese Cuisine Description";
            Description.textContent = "Momos soup";
            Description2.textContent = "Teriyaki Salads";
            Description3.textContent = "Miso Ramen Soup";
            break;
        case 'Indian':
            Image.src = "C:\\Users\\Dell\\OneDrive\\Desktop\\Vega Restaurant\\pngwing.com (28).png"; // Corrected escape characters
            Image2.src = "C:\\Users\\Dell\\OneDrive\\Desktop\\Vega Restaurant\\pngwing.com (27).png"; // Corrected escape characters
            Image3.src = "C:\\Users\\Dell\\OneDrive\\Desktop\\Vega Restaurant\\indian-food-dish-png.png"; // Corrected escape characters
            Para.textContent = "Indian Cuisine Description";
            Description.textContent = "chicken curry";
            Description2.textContent = "fried red snapper";
            Description3.textContent = "lunch full meal";
            break;
        default:
            Image.src = "C:\\Users\\Dell\\OneDrive\\Desktop\\Vega Restaurant\\pngwing.com (28).png"; // Corrected escape characters
            Image2.src = "C:\\Users\\Dell\\OneDrive\\Desktop\\Vega Restaurant\\pngwing.com (27).png"; // Corrected escape characters
            Image3.src = "C:\\Users\\Dell\\OneDrive\\Desktop\\Vega Restaurant\\indian-food-dish-png.png";
            Para.textContent = "Indian Cuisine Description";
            Description.textContent = "hello";
            Description2.textContent = "hello";
            Description3.textContent = "hello";
            break;
    }
}

// button click to change text decoration color

const indianBtn = document.getElementById("Indian");
const italianBtn = document.getElementById("Italian");
const arabianBtn = document.getElementById("Arabian");
const chineseBtn = document.getElementById("Chinese");

// Add event listeners to each button
indianBtn.addEventListener('click', function() {
    changeDecoration(indianBtn);
    changeCuisine('Indian');
});

italianBtn.addEventListener('click', function() {
    changeDecoration(italianBtn);
    changeCuisine('Italian');
});

arabianBtn.addEventListener('click', function() {
    changeDecoration(arabianBtn);
    changeCuisine('Arabian');
});

chineseBtn.addEventListener('click', function() {
    changeDecoration(chineseBtn);
    changeCuisine('Chinese');
});

// Function to change the text-decoration-color to red and reset others
function changeDecoration(clickedButton) {
    
    [indianBtn, italianBtn, arabianBtn, chineseBtn].forEach(function(button) {
        button.style.textDecorationColor = "initial";
    });

    // Set text-decoration-color to red for the clicked button
    clickedButton.style.textDecorationColor = "red";
}
//   // auto scroll images
