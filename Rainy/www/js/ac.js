

$(document).ready(function () {
    var url = "http://localhost:3000/Allin";
    $.ajax({
        url: url,
        method: "GET",
        success: function (data,status) {
            console.log(data);
            var template = $('#template4').html();
            for (var i = 0; i < data.length; i++) {
                var rendered = Mustache.render(template, data[i]);
                $("#Showac").append(rendered);
            }
        }
    });

});

/*
$(document).ready(function () {
    var url = "http://localhost:3000/Allin";
    $.ajax({
        url: url,
        method: "GET",
        success: function (data, status, xhr) {
            console.log(data);
            var template = $('#template5').html();
            for (var i = 1; i < data.length; i++) {
                var rendered = Mustache.render(template, data[i]);
                $("#Showp").append(rendered);
            }
        }
    });

});

*/
/*
$("#ooo").click(function () {
    var posty = {};
    posty.profiles = $("#pf").val();
    console.log(posty);
    var url = "http://localhost:3000/Allin";
    $.post(url, posty, function (data, status) {
        console.log("Inserted " + data);
});
});

*/