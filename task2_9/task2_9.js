var orderQueue = [];
var selectedDiv = [];

function preOrder(root){
    orderQueue.push(root);
    for(var i = 0; i<root.childElementCount ; i++){
        if(root.children[i] != null){
            preOrder(root.children[i]);
        }
    }
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

function clearSelect(Queue){
    for (var i=0; i< Queue.length; i++){
        Queue[i].style.backgroundColor = 'white';
    }
    selectedDiv = [];
}

function selectEvent(){
    var Queue = document.getElementById('box').getElementsByTagName('div');
    for (var i=0; i< Queue.length; i++){
        Queue[i].onclick = function(e){
            clearSelect(Queue);
            this.style.backgroundColor = 'yellow';
            e.stopPropagation();
            selectedDiv.push(this);
        }
    }
}

var rootNode = document.getElementById('box');

window.onload = function(){
    document.getElementById('searchQueue').onclick = function(){
        var input = document.getElementById('keyword').value;

        if(checkInput(input)){
            return;
        }
        orderQueue = [];
        preOrder(rootNode);
        resetStyle();
        scan(input);
    };

    selectEvent();

    document.getElementById('delSelected').onclick = function(){
        if (selectedDiv.length == 0){
            alert("请选择元素");
        }
        selectedDiv[0].parentNode.removeChild(selectedDiv[0]);
    }

    document.getElementById('add').onclick = function(){
        addWord = document.getElementById('addWord');
        if (selectedDiv.length == 0){
            alert("请选择添加的位置");
        }
        if (addWord == null){
            alert("请输入要添加的元素")
        }
        if(checkInput(addWord)){
            return;
        }
        var newDiv = document.createElement('div');
        newDiv.innerHTML = addWord.value;
        newDiv.className = 'new_box';
        selectedDiv[0].appendChild(newDiv);
        selectEvent();
    }

};