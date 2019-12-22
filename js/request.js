let myData = [];
let myRequest = new XMLHttpRequest;
myRequest.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2aU6p_rb1mCmaS37pWwT_jLwkrH9tYdlM11Pvpmf_o_nNyr7Q82qVZctQ", true);
myRequest.send();
myRequest.onreadystatechange = function () {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        myData = JSON.parse(myRequest.response).results;
        showData();
    }
}

function showData() {
    let temp = "";
    for (let i = 0; i < myData.length; i++) {
        temp += "<div class='col-md-4 my-3'><div class='item'><img src=https://image.tmdb.org/t/p/w500"
            + myData[i].poster_path
            + " class='img-fluid'><div class='trans d-flex justify-content-center align-items-center text-center'><div class='px-3'><h5>" +
            myData[i].title
            + "</h5><p>" + myData[i].overview +
            "</p><p>" + myData[i].release_date
            + "</p><span> rating : " + myData[i].vote_average + "</span></div></div></div></div > "
    }


    document.getElementById("showData").innerHTML = temp;
}

