var orderQueue = [];

function preOrder(root){
    orderQueue.push(root);
    if(root.firstElementChild != null){
        preOrder(root.firstElementChild);
    }
    if(root.lastElementChild != null){
        preOrder(root.lastElementChild);
    }
}

function inOrder(root){
    if(root.firstElementChild != null){
        inOrder(root.firstElementChild);
    }
    orderQueue.push(root);
    if(root.lastElementChild != null){
        inOrder(root.lastElementChild);
    }
}

function postOrder(root){
    if(root.firstElementChild != null){
        postOrder(root.firstElementChild);
    }
    if(root.lastElementChild != null){
        postOrder(root.lastElementChild);
    }
    orderQueue.push(root);
}

function scan(){
    var i = 0;
    orderQueue[i].style.backgroundColor = 'blue';
    var show = setInterval(function(){
        i++;
        if(i >= orderQueue.length){
            clearInterval(show);
            orderQueue[orderQueue.length-1].style.backgroundColor = 'white';
            return;
        }
        orderQueue[i - 1].style.backgroundColor = 'white';
        orderQueue[i].style.backgroundColor = 'blue';
    },500);
}

var rootNode = document.getElementById('box');

window.onload = function(){
    document.getElementById("preOrder").onclick = function(){
        preOrder(rootNode);
        scan();
    };
    document.getElementById("inOrder").onclick = function(){
        inOrder(rootNode);
        scan();
    };
    document.getElementById("postOrder").onclick = function(){
        postOrder(rootNode);
        scan();
    };
};
