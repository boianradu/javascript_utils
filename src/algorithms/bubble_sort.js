

var bubbleSort = (vec)=> {
    let dimension = vec.length
    for (let index = 0; index < dimension; index++){
        for (let i = 0; i < dimension-index; i++){
            if (vec[i] > vec[i+1]){
                let temp = vec[i];
                vec[i]=vec[i+1]
                vec[i+1]=temp
            }
        }
    }
    return vec
}
console.log(bubbleSort([5,15,23,-7,44,17,16,16]))
