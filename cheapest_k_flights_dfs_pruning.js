let graph = {
    0:{
        1:100,
        3:300
    },
    1:{
        3:100
    },
    2:{
        4:10
    },
    3:{
        2:10
    },
    4:{
        1:100
    },
}

let visited = {};
let src = 0, dest = 4, stops = 2;
let stack = [src];

let DFS = () => {
    let cost = Number.MAX_SAFE_INTEGER;
    let tempCost = 0;
    while(stack.length) {
        let u = stack.pop();
        if(stops === 0 && u !== dest) {
            return cost;
        }
        visited[u] = true;
        for(let v in graph[u]) {
            if(!visited[v]) {
                tempCost += graph[u][v];
                stack.push(v);
            }
        }
        stops--;
    }
}
