 function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    console.log('temp',temp)
    arr[first_Index] = arr[second_Index];
    console.log('first index',arr[first_Index]);
    arr[second_Index] = temp;
    console.log('second index',arr[second_Index]);
}

function bubble_Sort(arr){

    var len = arr.length,i, j, stop;
    // console.log('lenghth',len);

    for (i=0; i < len; i++){
        console.log('inside for len',len);
        for (j=0, stop=len-i; j < stop; j++){
            console.log('another for loo',stop)
            // console.log('stop lenth',stop);
            if (arr[j] > arr[j+1]){
                console.log("arr[j]",arr[j]);
                console.log("arr[j+1]",arr[j+1]);

                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}
console.log(bubble_Sort([3, 0, 2, 6, -1, 4, 1]));