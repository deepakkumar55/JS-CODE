// 6. Sort an array from lowest to highest
arr=[1,3,5,2,42,4,6,9,11,8,10];
var arr2=[];
for (i = 0; i < arr.length- 1; i++) {
    for ( j = 1; j < arr.length- 1 - i; j++) {
       if(arr[i] > arr[j + 1]){
        arr2=arr[i]
       }
    }
}
console.log(arr2);