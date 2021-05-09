var maxDepth = function(root) {
    //let maxCount = 0;
    let getMaxCount = (root,count, maxCount) => {
        if(!root) {
            return maxCount;
        }
        count++;
        if(count > maxCount) {
             maxCount = count;
        }
        maxCount = getMaxCount(root.left, count, maxCount);
        maxCount = getMaxCount(root.right, count, maxCount);
        
        return maxCount;
    }
    
    return getMaxCount(root, 0, 0);
};