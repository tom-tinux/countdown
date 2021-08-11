// Set the date we're counting to
var endDate = new Date("Oct 16, 2021 08:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate distance between future date and now
    var distance = endDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Insert the calcualted information into the paragraph
    document.getElementById("Placeholder").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
})