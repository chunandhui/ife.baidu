var orderQueue = [];

function preOrder(root){
    orderQueue.push(root);
    for(var i = 0; i<root.childElementCount ; i++){
        if(root.children[i] != null){
            preOrder(root.children[i]);
        }
    }
}

function postOrder(root){
    for(var i = 0; i<root.childElementCount ; i++){
        if(root.children[i] != null){
            postOrder(root.children[i]);
        }
    }
    orderQueue.push(root);
}

function scan(keyword){
    var i = 0;
    orderQueue[i].style.backgroundColor = 'blue';
    var show = setInterval(function(){
        i++;
        if(i >= orderQueue.length){
            clearInterval(show);
            orderQueue[orderQueue.length-1].style.backgroundColor = 'white';
            alert("未查询到内容！");
            return;
        }
        orderQueue[i - 1].style.backgroundColor = 'white';
        orderQueue[i].style.backgroundColor = 'blue';

        if (orderQueue[i].childNodes[0].nodeValue.search(keyword) != -1 ){
            alert("查询到内容！");
            clearInterval(show);
            return;
        }
    },500);
}

function resetStyle(){
    for(var i=0; i<orderQueue.length; i++){
        orderQueue[i].style.backgroundColor = 'white';
    }
}


function checkInput(input){
    if(input == ""){
        alert("输入为空");
        return 1;
    }
    return 0;
}

var rootNode = document.getElementById('box');

window.onload = function(){
    document.getElementById('searchQueue1').onclick = function(){
        var input = document.getElementById('keyword1').value;

        if(checkInput(input)){
            return;
        }
        orderQueue = [];
        preOrder(rootNode);
        resetStyle();
        alert(orderQueue.length);
        scan(input);
    };
    document.getElementById('searchQueue2').onclick = function(){
        var input = document.getElementById('keyword2').value;

        if(checkInput(input)){
            return;
        }
        orderQueue = [];
        postOrder(rootNode);
        alert(orderQueue.length);
        resetStyle();
        scan(input);
    }
};
