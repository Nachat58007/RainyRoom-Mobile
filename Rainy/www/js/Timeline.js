
$(document).ready(function () {
    var url = "http://localhost:3000/posts";
    $.ajax({
        url: url,
        method: "GET",
        success: function (data, status, xhr) {
            console.log(data);
            var template = $('#template1').html();
            for (var i = 0; i < data.length; i++) {
                var rendered = Mustache.render(template, data[i]);
                $("#Showa").append(rendered);

            }
        }
    });
});
$(document).ready(function () {
    var url = "http://localhost:3000/Allin";
    $.ajax({
        url: url,
        method: "GET",
        success: function (data, status, xhr) {
            console.log(data);
            var template = $('#template7').html();
            for (var i = 0; i < data.length; i++) {
                var rendered = Mustache.render(template, data[i]);
                $("#Showe").append(rendered);

            }
        }
    });
});


$("#Posto").click(function () {
    var posty = {};
    posty.comm = $("#comma").val();
    posty.pic = $("#pic").val();
    posty.sig = $("#sig").val();
    posty.bb = $("#bb").val();
    console.log(posty);
    var url = "http://localhost:3000/posts";
    $.post(url, posty, function (data, status) {
        console.log("Inserted " + data);
        $.ajax({
            url: url,
            method: "GET",
            success: function (data, status, xhr) {
                console.log(data);
                var outo = "<center><p class='z-depth-5'><div class='row'><div class='card grey darken-4'><div class='card-content white-text'><font size='3em'>&nbsp Your Post :</font> &nbsp"
                    + posty.comm + "<br><font size='3em'>Signature : </font> &nbsp" + posty.sig + "<br><br><br></div></div></p></center>"
                    ;
                $("#Showclick").append(outo);
                function refreshPage() {
                    setTimeout(window.location.href = "index2.html", 7000);
                }
            }

        });
    });
});

function deletepost(id) {
    alert('Are you sure to delete this post? ');
    $.ajax({
        url: "http://localhost:3000/posts/" + id,
        type: "DELETE"
    })
    alert('Post deleted!');
    setTimeout(window.location.href = "index2.html");
    $("#post" + id).empty();

}
function editpost(id, comm, pic, sig, bb) {
    console.log(id);
    var url = "http://localhost:3000/posts";
    $("#comm" + id).prop('readonly', false);
    $("#pic" + id).prop('readonly', false);
    $("#sig" + id).prop('readonly', false);
    $("#bb" + id).prop('readonly', false);

    $.ajax({
        type: 'PUT',
        url: url + "/" + id,
        success: function () {
            console.log(id);
        }
    });
}


function savepost(id, comm, pic, sig, base64) {
    var comm = comm;
    var pic = pic;
    var sig = sig;
    var id = id;
    var bb = bb;
    var newposts = {};

    newposts.id = id;
    newposts.comm = $("#comm" + id).val();
    newposts.pic = $("#pic" + id).val();
    newposts.sig = $("#sig" + id).val();
    newposts.bb = $("#bb" + id).val();


    var url = "http://localhost:3000/posts/" + id;
    $.ajax({
        type: 'PUT',
        data: newposts,
        url: url,
        success: function () {
            console.log(newposts);
        }
    });
}


function readFile() {

    if (this.files && this.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", function (e) {
            document.getElementById("img").src = e.target.result;
            document.getElementById("bb").innerHTML = e.target.result;
        });

        FR.readAsDataURL(this.files[0]);
    }

}

document.getElementById("inp").addEventListener("change", readFile);



