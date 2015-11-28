/**
 * Created by kamoszm on 2015-11-27.
 */

app.controller('HomePageController', ['$scope','conn', 'path', 'commFun', function($scope, conn, path, commFun){
    /* Private variables for this controller - $scope*/

    var orginalUsers = [];

    $scope.path = path.url();
    $scope.hp = {
        editable : [],
        selectedCheck : [],
        check : [],
        data : {
            users : []
        },
        fn : {}
    };

    /*Functions*/

    //get data with users
    $scope.hp.fn.getUsers = function(){
        conn.getData($scope.path.server.get, {})
            .then(function(result){
                if(result.length){
                    $scope.hp.data.users = result;
                    orginalUsers = angular.copy(result);
                } else{
                    console.log("Error or empty data");
                }
            }, function(msg){
                console.log(msg);
            });
    };

    // delete user
    $scope.hp.fn.deleteUser = function(item){
        var check = confirm("Are you sure you want to delete item?");
        if (check == true) {
            conn.postData($scope.path.server.remove, item)
                .then(function(result){
                    var idx = commFun.findItemIdxById($scope.hp.data.users,item.id);

                    //delete user from $scope.hp.data.users collection
                    commFun.removeItemFromArray($scope.hp.data.users,idx);
                    commFun.removeItemFromArray(orginalUsers,idx);

                }, function(msg){
                    console.log(msg);
                });
        }
    };

    // edit user
    $scope.hp.fn.editUser = function(item,index){
        conn.getData($scope.path.server.find, { params : {id : item.id} })
            .then(function(result){
                var idx = commFun.findItemIdxById($scope.hp.data.users,item.id);

                $scope.hp.data.users[idx] = result;
                orginalUsers[idx] = angular.copy(result);

                $scope.hp.editable[index] = true;

            }, function(msg){
                console.log(msg);
            });
    };

    // save user
    $scope.hp.fn.saveUser = function(item,index){
        conn.postData($scope.path.server.edit, item )
            .then(function(result){
                $scope.hp.editable[index] = false;
            }, function(msg){
                console.log(msg);
            });
    };

    // cancel edit
    $scope.hp.fn.cancelEdit = function(item,index){
        var idx = commFun.findItemIdxById($scope.hp.data.users,item.id);

        $scope.hp.editable[index] = false;
        $scope.hp.data.users[idx] = angular.copy(orginalUsers[idx]);
    };

    // edit selected
    $scope.hp.fn.editSelected = function(){
        var i = 0,
            arrLength = $scope.hp.selectedCheck.length;
        for(i; i < arrLength; i=i+1){
            var idx = commFun.findItemIdxById($scope.hp.data.users,$scope.hp.selectedCheck[i].id);
            $scope.hp.editable[idx] = true;
        }
    };

    //change selected
    $scope.hp.fn.changeSelected = function(item,index){
        if($scope.hp.check[index]){
            $scope.hp.selectedCheck[index] = item;
        } else {
            commFun.removeItemFromArray($scope.hp.selectedCheck, index);
        }
    };

    // init
    $scope.hp.fn.getUsers();
}]);