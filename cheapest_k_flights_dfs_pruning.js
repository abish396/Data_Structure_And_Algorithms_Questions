let graph = {
    '0':{
        '1':100,
        '3':300,
        '4':100
    },
    '1':{
        '3':100
    },
    '2':{
        '4':10
    },
    '3':{
        '2':10
    },
    '4':{
        '1':100
    },
}

let visited = {};
let src = '0', dest = '4', originalStops = stops = 2;
let stack = [src];
let parent = {

}

let DFS = () => {
    let cost = Number.MAX_SAFE_INTEGER;
    let tempCost = 0;
    while(stack.length) {
        let u = stack.pop();
        visited[u] = true;
        if(parent[u]) {
            tempCost += graph[parent[u]][u];
        }
        for(let v in graph[u]) {
            if(!visited[v]) {
                if((stops === -1 || stops < originalStops) && u === dest) {
                    cost = cost > tempCost ? tempCost : cost;
                    tempCost = 0;
                    stops = originalStops;
                    break;
                }
                parent[v] = u;
                stack.push(v);
            }
        }
        stops--;
    }
    return cost;
}

console.log(DFS());
