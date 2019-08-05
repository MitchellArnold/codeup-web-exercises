console.log("Hello from external JavaScript.");

alert('Welcome to my Website!');
//
//var favoriteColor = prompt('What is your favorite color?');
//
//alert("Awesome! My favorite color is" + " " + favoriteColor + " " + "as well.");
////
//
//var littleMermaidRental_per_day = prompt("Little Mermaid: How many days?");
//var brotherBearRental_per_day = prompt("Brother Bear: How many days?");
//var HerculesRental_per_day = prompt("Hercules: How many days?");
//var dailyRentalRate = 3;
//var totalRentalCost = (HerculesRental_per_day + brotherBearRental_per_day + littleMermaidRental_per_day) * dailyRentalRate;
//var costUnit = "$";
//alert("Your total cost is:" + costUnit + totalRentalCost);

//
//
//var googleHourlyPay = prompt("How much does Google pay per hour?");
//var amazonHourlyPay = prompt("How much does Amazon pay per hour?");
//var facebookHourlyPay = prompt("How much does Facebook pay per hour?");
//
//var googleHoursWorked = prompt("How many hours worked?");
//var amazonHoursWorked = prompt("How many hours worked?");
//var facebookHoursWorked = prompt("How many hours worked?");
//var costUnit = "$";
//var totalPayment = costUnit + ( (googleHourlyPay * googleHoursWorked ) + (amazonHourlyPay * amazonHoursWorked ) + (facebookHourlyPay * facebookHoursWorked ) );
//
//alert("You made" + totalPayment);
////
//

//var classSched = confirm("If the class the class is not full, press Ok.");
//var conflictSched = confirm("If schedule does not conflict, press Ok.");
//var studentEnroll = ( classSched && conflictSched );
////== true;
//alert("It is" + " " + studentEnroll + " " + "that the student may enroll.");


var numberOfItems = prompt("How many items?");
var premiumOffer = confirm("Click ok if you are a premium member.");
var validOffer = confirm("Click ok if offer is valid.");
var productDiscountApplied = (validOffer || numberOfItems < 2) && premiumOffer;


alert("It is" + " " + productDiscountApplied + " " + "that the offer can be applied.");
//
//
//


