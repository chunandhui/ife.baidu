window.onload = function(){
    var text = document.getElementsByTagName("textarea");
    var content = document.getElementById("content");
    var data = [];

    var insert = document.getElementById("insert");
    var search = document.getElementById("search");

    insert.onclick = function(){
        var words = text[0].value;
        words = words.replace(/[^0-9a-zA-Z]/g,' ');
        var arr = words.split(' ');
        for(var i=0; i<arr.length; i++){
            var p = document.createElement("p");
            p.innerHTML = arr[i];
            content.appendChild(p);
            data.push(arr[i]);
        }
    }

    search.onclick = function(){
        var keyword = document.getElementById("keyword").value;
        var p = document.getElementsByTagName("p");
        for(var i = 0; i<data.length; i++){
            var reg = new RegExp(keyword,"g");
            p[i].innerHTML = p[i].innerHTML.replace(reg,"<span class='searchResult'>"+ keyword +"</span>");

        }

    }
}