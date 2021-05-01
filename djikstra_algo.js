//it's a single source shortest path algorithm
let graph = {
    '0':{
        '1':1,
        '2':4
    },
    '1':{
        '2':4,
        '3':2,
        '4':7
    },
    '2':{
        '1':4,
        '3':3,
        '4':5
    },
    '3':{
        '2':3,
        '5':6,
        '1':2,
        '4':4
    },
    '4':{
        '2':5,
        '5':7,
        '1':7,
        '3':4
    },
    '5':{
        '3':6,
        '4':7
    }
};

let parent = {}, processed = {}, distance = {};
let queue = ['0'];
for(let node in graph) {
    if(node === '0') {
        distance[node] = 0;
        continue;
    }
    distance[node] = Number.MAX_SAFE_INTEGER; 
}


while(queue.length) {
     let u = queue.shift();
     processed[u] = true;
     for(let v in graph[u]) {
        let currDistance = distance[v];
        let newDistance = distance[u] + graph[u][v];
        if(!processed[v] && newDistance < currDistance) {
            distance[v] = newDistance;
            parent[v] = u;
            queue.push(v);
        };
        
     }
}


console.log(parent, distance);

