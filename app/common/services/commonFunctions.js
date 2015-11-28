/**
 * Created by kamoszm on 2015-07-14.
 */

app.service('commFun', [function(){
    /*
     * Function for find index object in array
     * @param arr  - array
     * @param id - id which we are looking
     * return index of the search element
     * */
    this.findItemIdxById = function(arr,id){
        var i = 0,
            arrLength = arr.length,
            idx = -1;
        for (i; i < arrLength; i=i+1) {
            if (arr[i].id === id) {
                idx = i;
            }
        }
        return idx;
    };
    /*
     * Function for remove item from array
     * @param arr  - array
     * @param idx - index of the search element
     * return array
     * */
    this.removeItemFromArray = function(arr,idx){
        return arr.splice(idx,1);
    };
}]);