//function to display the current time and date using moment.js
function updateTimeDate(){
    var current = moment();
    $("#currentDay").text(current.format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

//calling function and updating the time every sec
setInterval(updateTimeDate,1000);
updateTimeDate();

//save texted description from save button on click
$(document).ready(function(){
    $('.saveBtn').on("click", function() {
        //getting value from the description box
        var textTyped =$(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        //save the description text in local storage
        localStorage.setItem(time, textTyped);    
    })
    //function to get hours to change the color of description box
    function getTime(){
        //using moment to store the current hours
        var currentTime = moment().hour();
        //looping over each time-block,
        $(".time-block").each(function(){
            var timeRecord = parseInt($(this).attr('id').split('-')[1]);

            //decision statements used to check the time and add or remove classes for background color
            if(timeRecord < currentTime){
                $(this).removeClass('present');
                $(this).removeClass('future');
                $(this).addClass('past');
            }
            else if(timeRecord === currentTime){
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            }
            else{
                console.log("future");
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        })
    }

    //get items from local storage if exist
    $("#clock-9 .description").val(localStorage.getItem("clock-9"));
    $("#clock-10 .description").val(localStorage.getItem("clock-10"));
    $("#clock-11 .description").val(localStorage.getItem("clock-11"));
    $("#clock-12 .description").val(localStorage.getItem("clock-12"));
    $("#clock-13 .description").val(localStorage.getItem("clock-13"));
    $("#clock-14 .description").val(localStorage.getItem("clock-14"));
    $("#clock-15 .description").val(localStorage.getItem("clock-15"));
    $("#clock-16 .description").val(localStorage.getItem("clock-16"));
    $("#clock-17 .description").val(localStorage.getItem("clock-17"));

    //calling the function getTime
    getTime();

})