window.onload = function(){
    function number(){
        var input_text = document.getElementById("input_text").value;
        if(input_text < 10 || input_text > 100){
            alert("输入的数字不符合要求！");
            return false;
        }else{
            return true;
        }
    }
    function button1() {
        var content = document.getElementById("content");
        var input_text = document.getElementById("input_text").value;
        var p = document.createElement("p");
        // p.innerHTML = input_text;
        p.style.height = input_text+ "px" ;
        if (content.childNodes.length > 0 && content.childNodes.length < 60) {
            content.insertBefore(p,content.firstChild);
        } else if(content.childNodes.length >= 60){
            alert("不能继续添加数字！");
            return false
        }
        else{
            content.appendChild(p);
        }

    }

    function button2(){
        var content = document.getElementById("content");
        var input_text = document.getElementById("input_text").value;
        var p = document.createElement("p");
        // p.innerHTML = input_text;
        p.style.height = input_text+ "px" ;
        if(content.childNodes.length >= 60){
            alert("不能继续添加数字！");
            return false
        }else{
            content.appendChild(p);
        }
    }

    function button3(){
        var content = document.getElementById("content");
        if(content.childNodes.length <= 0){
            alert("没有要删除的元素！");
            return false;
        }else{
            alert("要删除的数字:"+content.firstChild.innerHTML);
            content.removeChild(content.firstChild);
        }
    }

    function button4(){
        var content = document.getElementById("content");
        if(content.childNodes.length <= 0){
            alert("没有要删除的元素！");
            return false;
        }else{
            alert("要删除的数字:"+content.lastChild.innerHTML);
            content.removeChild(content.lastChild);
        }
    }

    document.getElementById("button1").onclick = function(){
        number();
        if(number() == true){
            button1();
        };
    };

    document.getElementById("button2").onclick = function(){
        number();
        if(number() == true){
            button2();
        };
    };

    document.getElementById("button3").onclick = function(){
        button3();
    };

    document.getElementById("button4").onclick = function(){
        button4();
    };

    function sort(){
        var content = document.getElementById("content");
        var sortResult = document.getElementById("sortResult");
        var heightSort = new Array();
        var length = content.childNodes.length
        for(var i=0; i<length; i++){
            heightSort[i] = content.childNodes[i].style.height;
        }
        for(var k=0; k<length; k++){
            for(var j=0; j<length; j++){
                if(heightSort[j] > heightSort[k]){
                    var temp = heightSort[k];
                    heightSort[k] = heightSort[j];
                    heightSort[j] = temp;
                }
            }
        }
        for(var m=0; m<length; m++){
            var p = document.createElement("p");
            p.style.height = heightSort[m];
            sortResult.appendChild(p);
        }
    }

    document.getElementById("sort").onclick = function(){
        sort();
    };
}

