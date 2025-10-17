const queue = []

function enqueue(num){
    queue.push(num)
}

function displayQueue(){
    if(isEmpty()){
        console.log("queue is empty")
    }else{
        console.log("Queue:",queue.join(" "))
    }
}

function dequeue(){
    if(isEmpty()){
        return "queue is empty"
    } else{
        return queue.shift()
    }
}
function peek(){
    if(isEmpty()){
        return "queue is empty"
    }else{
        return queue[0]
    }
}
function isEmpty(){
    return queue.length ===0
}


enqueue(10)
enqueue(20)
enqueue(30)

displayQueue()
console.log(peek())
console.log(dequeue())
displayQueue()


