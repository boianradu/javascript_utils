var insertionSort = (vec) => {
    let length = vec.length

    for (let i=0;i<length;i++){
        let max = vec[i]
        let indexJ = i+1
        for (let j=i+1;j<length;j++){
            if (vec[j] > max){
                max = vec[j]
            }
        }
        if (max != vec[i]) {
            let aux = vec[i]
        }
    }
}