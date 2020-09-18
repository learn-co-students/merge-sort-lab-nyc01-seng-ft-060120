
function mergeSort(ar) {
    let firstHalf, secondHalf
    if (ar.length > 1) {
        firstHalf = mergeSort(ar.slice(0, (ar.length/2)))
        secondHalf = mergeSort(ar.slice((ar.length/2), ar.length))
        return merge(firstHalf, secondHalf)
    }
    else {
        return ar
    }
}

function merge(ar1, ar2) {
    let mergedAr=[]
    while (ar1.length>0 && ar2.length>0) {
        if (ar1[0] < ar2[0]) {
            mergedAr.push(findMinAndRemoveSorted(ar1))
        }
        else {
            mergedAr.push(findMinAndRemoveSorted(ar2))
        }
    }
    return mergedAr.concat(ar1).concat(ar2)
}

function findMinAndRemoveSorted(ar) {
    return ar.shift()
}