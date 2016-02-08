$(document).ready(function(){
    getData();
});

/*

-What I would like to see on the DOM, is one person represented. A series of 22 (or the number of people in the cohort) index points
-with the first person's index highlighted or called out in style differently than the others.
X-Also on the DOM should be a 'next' and 'prev' button.
-Clicking on the next button should navigate to the next person, clicking on the prev button should navigate to the previous person.
-The highlighted index point should update also as you click next and prev.
-When a person is displayed, show their name, their favorite movies, and favorite song.
-Only one person should be showcased at any given time.

You will need to combine everything you learned this week to accomplish this task,
and each of the challenges you have completed this week play a part in this task.

HARD MODE
-Include a fade out and fade in animation in-between transitioning people.

PRO MODE
-Include a timer that moves to the next person if the user is not clicking on next or prev.
-If the user clicks on next or prev, the timer should be reset.
-The timer should transition between people every 10 seconds.

MASTER MODE
X-Head over to the json file, and include a 'imageURL' property for each person.
X-Then, manually head over to GitHub and right click on each person's user image and select 'COPY IMAGE URL'.
X-Then past that into the 'imageURL' property.
X-Resize images using CSS
-Display the new image information on the DOM, so that the person's GitHub image appears above their name. This will give you some experience in working with JSON and give you a better idea of how data is put together for distribution.

*/

function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data) {
            console.log(data);

            /*
            // create a function the takes the json file and shows one object at a time
            someFunction(data.people, personOnDeck);
            },
            */

            /* use this loop?
            customerArray.forEach(function(customer) {
                updateDecision(customer);
            });
            */

            // loop through the people array. Show Github avatar, name, favorite movie 1, favorite movie 2, and favorite song.
            $.each(data.people, function(i, person) { // called person because we named it person
                console.log('i: ' + i);
                $('.person-box').append('<div class="person"></div>');

                var $el = $('.person-box').children().last();
                $el.append('<p class="crop img-rounded"><img src="' + data.people[i].imageURL + '" /></p>');
                $el.append('<h3>' + data.people[i].name + '</h3>');
                $el.append('<p>' + data.people[i].favoriteMovie1 + '</p>');
                $el.append('<p>' + data.people[i].favoriteMovie2 + '</p>');
                $el.append('<p>' + data.people[i].favoriteSong + '</p>');
            });

        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        },
        timeout: function() { // everything seems to be right, but it's taking a long time
        }
    });
}

/*
// fade in fade out
 (Animations: listen for event - change class from no class to new class to fire animation)

 $('#fade-out').on('click', function() {
 $('.murray').fadeOut(500);
 });

 $('#fade-in').on('click', function() {
 $('.murray').fadeIn(500);
 });


 // button fade in and face out effects from previous homework
 $('#fade-out').on('click', function() {
 $('.murray').fadeOut(500);
 });

 $('#fade-in').on('click', function() {
 $('.murray').fadeIn(500);
 });

 */

/* next & previous buttons from other homework

 $('.next').on('click', function() {
 index += 1;
 if (index === data.people.length) {
 index = 0;
 }

 //var iotaMember = data.people[index];
 $(".people-container").html(person);
 });

 $('.previous').on('click', function() {
 index -= 1;
 if (index === -1) {
 index = data.people.length -1;
 }
 //var iotaMember = theTemplate(data.people[index]);
 $(".people-container").html(person);
 });
 */

//$container.append('<button class="previous">Previous</button>');
//$container.append('<button class="next">Next</button>');

/*
// append the dom every 10 seconds. Start over if next or previous button has been clicked
setInterval(function(){
    updatePrice(fruitArray);
}, interval);

var intervalID = window.setInterval(autoTimer, 1000);

function autoTimer() {
    nIntervId = setInterval(someFunction, 1000)
}
*/


/* from other homework
 var index = 0;

 // create previous and next buttons
 var $container = $('#people-container');

 // Run the data through the template
 var person = data.people[index];

 //console.log(person);

 // append the data into the class "people-container"
 $('.test').append(person);
 */