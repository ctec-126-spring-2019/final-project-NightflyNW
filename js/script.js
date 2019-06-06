// script.js
// lab No. 7

// The displayQuotesPanel function is used to display a random quote from the array in the HTML element that has the ID of 'quotesPanel'
function displayQuotesPanel() {
    console.log('Quotes function called');
    // Call the clear() function with 'quotesPanel' as a paremeter 
    clear('quotesPanel');

    // Create a variable named 'quotesPanel' that is a handle to the element with the ID of 'quotesPanel'
    var quotesPanel = document.getElementById('quotesPanel');

    // This is the array of quotes that you are to use
    var quotes = ["Nothing is as easy as it looks", "Everything takes longer than you think",
        "Anything that can go wrong will go wrong",
        "If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong",
        "If there is a worse time for something to go wrong, it will happen then.", "If anything simply cannot go wrong, it will anyway",
        "If everything seems to be going well, you have obviously overlooked something.", "Nature always sides with the hidden flaw",
        "It is impossible to make anything foolproof because fools are so ingenious.",
        "Whenever you set out to do something, something else must be done first", "Every solution breeds new problems.",
        "Trust everybody ... then cut the cards", "Two wrongs are only the beginning", "If at first you don't succeed, destroy all evidence that you tried",
        "To succeed in politics, it is often necessary to rise above your principles", "Exceptions prove the rule ... and wreck the budget", "Success always occurs in private, and failure in full view"];

    // Create a variable named 'random' and assign it a random number. This number will be used to index into the quotes array
    var random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    // Set the innerHTML of the quotesPanel to the quote and also include <p> tags around it
    quotesPanel.innerHTML = "<p>" + quotes[random] + "</p>";

}

// The displayNewsPanel() function is used to populate content in the HTML element with the ID of 'newsPanel'
function displayNewsPanel() {
    // Create a variable named 'newsItems' that is a handle to the element with the ID of 'newsPanel'
    var newsItems = document.getElementById('newsPanel');
    var items = "";
    var item = "";
    // This is the array of news that you are to use. Note that it is an array of arrays.
    var news = [
        ['May 22, 2018', 'Really Big News', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iusto provident sit vero, eius fugiat autem laboriosam, molestiae, quidem incidunt ducimus reiciendis fugit illo quisquam. Autem, veniam voluptas officia incidunt.', 'http://clark.edu'],
        ['May 30, 2018', 'OK News', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iusto provident sit vero, eius fugiat autem laboriosam, molestiae, quidem incidunt ducimus reiciendis fugit illo quisquam. Autem, veniam voluptas officia incidunt.', 'http://clark.edu'],
        ['June 14, 2018', 'GREAT NEWS!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iusto provident sit vero, eius fugiat autem laboriosam, molestiae, quidem incidunt ducimus reiciendis fugit illo quisquam. Autem, veniam voluptas officia incidunt.', 'http://clark.edu'],
        ['July 2, 2018', 'Welcome Back', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iusto provident sit vero, eius fugiat autem laboriosam, molestiae, quidem incidunt ducimus reiciendis fugit illo quisquam. Autem, veniam voluptas officia incidunt.', 'http://clark.edu']];

    // Use this variable to build the output string that you will then use for the news


    // Loop through the news array of arrays. No need for nested loops.
    for (var i = 0; i < news.length; i++) {
        // Generate the HTML code that you will need to build the news string
        item = '<h3>' + news[i][0] + ' - ' + news[i][1] + '</h3>' + '<p>' + news[i][2] + '</p>' + '<a href ="' + news[i][3] + '">' + 'Read more >' + '</a>' + '<br><br>';
        items = items + item;
    }
    // Add the output to the newsItem element
    newsItems.innerHTML = items;
}

// The displayFeaturedStudentPanel() function is used to populate content in the HTML element with the ID of 'featuredStudentPanel'
function displayFeaturedStudentPanel() {
    console.log('featured students')

    // Create a variable named 'featuredStudent' that is a handle to the element with the ID of 'featuredStudentPanel'
    var featuredStudent = document.getElementById('featuredStudentPanel');

    // This is the arrays for featuredStudents. Note that you are to use. Note that it is an array of arrays.
    var featuredStudents = [
        ['Tommy Henriksen', 'Tommy Henriksen (born February 21, 1964) is an American musician from Port Jefferson, New York best known for his work as a guitarist, bassist and songwriter with Alice Cooper, Hollywood Vampires and German metal band Warlock. He has also fronted punk rockers P.O.L. and released several albums as a solo artist. In addition, Henriksen is a sought-after songwriter, arranger, producer and mixer who has worked with artists such as Lady Gaga, Meat Loaf, Lou Reed, Halestorm, Kesha, and Daughtry. Henriksen is currently based out of Zurich, Switzerland where he lives with his family.', 'img/student1.jpg'],
        ['John Bonham', 'John Henry Bonham (31 May 1948 – 25 September 1980) was an English musician and songwriter, best known as the drummer for the British rock band Led Zeppelin. Bonham was esteemed for his speed, power, fast bass drumming, distinctive sound, and "feel" for the groove. He is regarded as the greatest and most influential rock drummer of all time. Rolling Stone magazine ranked him number 1 in their list of the "100 Greatest Drummers of All Time."', 'img/student2.jpg'],
        ['Dave Matthews', 'David John Matthews (born January 9, 1967) is a South African-born American singer-songwriter, musician and actor, best known as the lead vocalist, songwriter, and guitarist for the Dave Matthews Band. Matthews was born in Johannesburg, and moved frequently between South Africa, the United Kingdom, and the United States while growing up. Matthews mainly plays acoustic guitar, which he started playing at the age of nine.', 'img/student3.jpg'],
        ['Alice Cooper', 'Alice Cooper (born Vincent Damon Furnier; February 4, 1948) is an American singer, songwriter, and actor whose career spans over fifty years. With his distinctive raspy voice and a stage show that features guillotines, electric chairs, fake blood, deadly snakes, baby dolls, and dueling swords, Cooper is considered by music journalists and peers alike to be "The Godfather of Shock Rock". He has drawn equally from horror films, vaudeville, and garage rock to pioneer a macabre and theatrical brand of rock designed to shock people.', 'img/student4.jpg']
    ];

    // Use this variable to build the output string that you will then use for the featured student info
    var random = Math.floor(Math.random() * featuredStudents.length);

    // Create a variable named 'randomStudent' and assign it a random number. This number will be used to index into the featuredStudents arr var img = document.getElementById('img');
    var randomStudent = ['img/student1.jpg', 'img/student2.jpg', 'img/student3.jpg', 'img/student4.jpg'];

    /* Build the HTML to display the featured student
        Your HTML should include an img tag that has the following class attribute values assigned to it:
        class="studentpic rounded mx-auto d-block"
        You should also include the name of the student and their bio below the image
    */

    // Add the output to the featuredStudent element
    featuredStudent.innerHTML = "<img class='studentpic rounded mx-auto d-block' src=" + randomStudent[random] + ">" + '<h2>' + featuredStudents[random][0] + '</h2>' + '<br>' + featuredStudents[random][1];
}


// This function clears out the innerHTML of the element passed in as a parameter
// There is no coding that you need to do for this function
function clear(panelID) {
    // console.log('clear!');
    var panel = document.getElementById(panelID);
    panel.innerHTML = '';
}


// Start the entire process here
window.onload = function () {
    // displayQuotesPanel();
    // displayNewsPanel();
    displayFeaturedStudentPanel();
    start();
}

// Create a new timer using setInterval and assign it to the variable 'quotesTimer'. Have the timer fire off every 15 seconds
var quotesTimer;
var featuredStudentTimer;

// This function takes two parameters that are handles to timers
function stopIntervals(quotesTimer, featuredStudentTimer) {
    console.log('Stopping intervals...');
    clearInterval(quotesTimer);
    clearInterval(featuredStudentTimer);
    console.log('All intervals have been stopped');
}

function start() {
    // Create a new timer using setInterval and assign it to the variable 'quotesTimer'. Have the timer fire off every 15 seconds
    quotesTimer = setInterval(displayQuotesPanel, 15000);
    
    // Create a new timer using setInterval and assign it to the variable 'featuredStudentTimer'. Have the timer fire off every 10 seconds
    featuredStudentTimer = setInterval(displayFeaturedStudentPanel, 5000);
    
}
// Get a handle to the logo element with the ID of 'theLogo'
var logo = document.getElementById('theLogo');
// Bind an event listener to the click event of 'theLogo'
// The anonymous function should then include this statement:
// stopIntervals(quotesTimer,featuredStudentTimer);
logo.addEventListener("click", function () {
    stopIntervals(quotesTimer, featuredStudentTimer)
});




