let graph = {
    1:{
        2:true,
        3:true
    },
    2:{
        1:true,
        4:true
    },
    3:{
        2:true,
        5:true
    },
    4:{
        2:true,
        5:true
    },
    5:{
        3:true,
        4:true
    }
};


let color = {
}

let queue = [];

let BFS = () => {
     while(queue.length) {
        let verticeToProcess = queue.shift();
        let currColor = color[verticeToProcess];
        //console.log(verticeToProcess, currColor);
        for(let vertice in graph[verticeToProcess]) {
            if(currColor === color[vertice]) {
                 console.log("not bipartite");
                 return;
            }
            if(!color[vertice]) {
               queue.push(vertice);
               if(currColor === "1") {
                    color[vertice] = "0";
               } else {
                    color[vertice] = "1";
               }
            }
       }
     }
}

for(let vertice in graph) {
    if(!color[vertice]) {
        color[vertice] = "1";
        queue.push(vertice);
        BFS();
    }
}