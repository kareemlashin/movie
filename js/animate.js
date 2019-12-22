/*my side nav */
var myNav = $("#side-nav").css("left");
/*position nav */
$("#bar").click(function () {
    /*position < 0 */

    if (myNav < 0 + "px") {

        $(".bar i").removeClass("fa-bars").addClass("fa-times");
        $("#side-nav").animate({ left: "0px" }, 1000);
        $(".open2").animate({ left: "250px" }, 1000);
        $(".myItem").animate({ top: "0px" }, 1500);
        myNav = 0 + "px";
        console.log(myNav)
    }
    /*position > 0 */
    else if (myNav >= 0 + "px") {
        $(".bar i").removeClass("fa-times").addClass("fa-bars");
        $("#side-nav").animate({ left: "-250px" }, 1000);
        $(".open2").animate({ left: "0px" }, 1000);
        myNav = -250 + "px";

        console.log(myNav)

    }
})
/****************************************** */


function search(term) {
    var temp = "";
    for (let i = 0; i < myData.length; i++) {
        if (myData[i].title.toUpperCase().includes(term.toUpperCase())) {
            temp += "<div class='col-md-4 my-3'><div class='item'><img src=https://image.tmdb.org/t/p/w500"
                + myData[i].poster_path
                + " class='img-fluid'><div class='trans d-flex justify-content-center align-items-center text-center'><div class='px-3'><h5>" +
                myData[i].title
                + "</h5><p>" + myData[i].overview +
                "</p><p>" + myData[i].release_date
                + "</p><span> rating : " + myData[i].vote_average + "</span></div></div></div></div > "
        }
    }


    document.getElementById("showData").innerHTML = temp;
}
/**************************** */

function validName(term) {
    var regexName = /^[A-z]{3,}$/gi;
    if (regexName.test(term)) {
        $("#userAlert").css("display", "none");
    } else {
        $("#userAlert").css("display", "block");

    }
}

function validEmail(term2) {
    var regexEmail = /^[A-z]{1}[A-z0-9]{2,}@(yahoo|gmail).com$/gi;
    if (regexEmail.test(term2)) {
        $("#userEmailAlert").css("display", "none");
    } else {
        $("#userEmailAlert").css("display", "block");

    }
}


function validPhone(term3) {
    var regexPhone = /^(02)?(010|012|015|011)[0-9]{8}$/gi;
    if (regexPhone.test(term3)) {
        $("#userPhoneAlert").css("display", "none");
    } else {
        $("#userPhoneAlert").css("display", "block");

    }
}



function validAge(term4) {
    var regexAge = /^([1-9]|[1-9][0-9])$/gi;
    if (regexAge.test(term4)) {
        $("#userAgeAlert").css("display", "none");
    } else {
        $("#userAgeAlert").css("display", "block");

    }
}

function validPass(term5) {
    var regexPass = /^([0-9A-z]{7,}[a-z]{1,}|[0-9A-z]{7,}[0-9]{1,})$/gi;
    if (regexPass.test(term5)) {
        $("#userPassAlert").css("display", "none");
    } else {
        $("#userPassAlert").css("display", "block");

    }
}

function validPass2(term7) {
    var regexPass = /^([0-9A-z]{7,}[a-z]{1,}|[0-9A-z]{7,}[0-9]{1,})$/gi;
    if (regexPass.test(term7)) {
        $("#userPass2Alert").css("display", "none");
    } else {
        $("#userPass2Alert").css("display", "block");

    }
}
