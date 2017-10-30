$(function () {
    $("#loadw").click(function () {
        $("#wpanel").empty();
        $("#wpanel").show();
        
        dt = new Date();
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var n = weekday[d.getDay()];
        h = dt.getHours();
        m = dt.getMinutes();
        day = dt.getDate();
        month = dt.getMonth() + 1;
        year = dt.getFullYear();
        var City = $("#incity").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + City + "&appid=16b82b9c7835ecb8b1b978573fba4a51";

        $.get(url, function (data) {
            var check = data.weather[0].main;
                if (check == "Clouds") {
                    var pic =  "images/c1.png";
                }
                if (check == "Rain") {
                    var pic =   "images/r1.png";
                }
                if (check == "Clear") {
                    var pic = "images/cl.png";
                }
                if (check == "Thunderstorm") {
                    var pic =   "images/t1.png";
                }
                if (check == "snow") {
                    var pic =   "images/s1.png";
                }
                if (check == "Mist") {
                    var pic =   "images/m1.png";
                }
          console.log(dt);
        var sity = "<br>[&nbsp"+City+"&nbsp]<br><center>"+ n + "&nbsp;</td><td>"+ day + "-</td><td>" + month + "-</td><td>" + year + "&nbsp;|&nbsp;</td><td>" 
        + h + ":</td><td>" + m + "</td></tr></table></center>";
       
        
        
                console.log(data);
                var weather =  "<center><img src='"+ pic + "' alt='' height='10%' width='10%' ><br>"+ data.weather[0].description +"<br>&nbsp;"+((data.main.temp_min) / 10).toFixed(2)+"&nbsp;°C"
                +"&nbsp;-&nbsp;"+((data.main.temp_max) / 10).toFixed(2) +"&nbsp;°C<br>"+ data.main.pressure +"&nbsp;m^2&nbsp|&nbsp; RH :&nbsp;"+ data.main.humidity 
                +"<br><img src='images/ws.png' alt='' height='25px' width='25px'>&nbsp;"+ data.wind.speed +"&nbsp;meter/sec</center>";
            $("#wpanel").append(sity);
            $("#wpanel").append(weather);
        });
    });
});
