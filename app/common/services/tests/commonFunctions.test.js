/**
 * Created by kamoszm on 2015-10-24.
 */

describe("CommonFunctions Service - service with common functions", function() {

    var myService,arr;

    beforeEach(function (){
        var $injector = angular.injector([ 'appAngularExample' ]);
        myService = $injector.get( 'commFun' );
        arr = [{"id":0,"name":"name0","surname":"surname0","birth":"29-01-1983","phone":"123123123","city":"Warszawa","street":"ul. Dywizjonu 303","number":"50/12"},{"id":11,"name":"name1","surname":"surname1","birth":"10-04-1985","phone":"333444555","city":"Poznań","street":"ul. Długa","number":"34"},{"id":2,"name":"name2","surname":"surname2","birth":"04-10-1999","phone":"777666555","city":"Warszawa","street":"ul. Dywizjonu 303","number":"50/12"},{"id":13,"name":"name3","surname":"03-11-1977","birth":"24-05-1980","phone":"234567876","city":"Zielona Góra","street":"ul. Władysława IV","number":"1/4"},{"id":4,"name":"name4","surname":"surname4","birth":"29-01-1983","phone":"321456890","city":"Nowy Tomysl","street":"os. Połnoc","number":"11/11"},{"id":15,"name":"name5","surname":"surname5","birth":"10-04-1985","phone":"444213234","city":"Kraków","street":"ul. Cicha","number":"23/23"},{"id":6,"name":"name6","surname":"surname6","birth":"04-10-1999","phone":"987789987","city":"Warszawa","street":"ul. Dywizjonu 101","number":"50/12"},{"id":17,"name":"name7","surname":"surname7","birth":"09-12-1955","phone":"333543212","city":"Gorzów Wielkopolski","street":"ul. Rzeczna","number":"1/4"}];
    });

    it("findItemIdxById should return correct index in array for ID", function() {
        expect(myService.findItemIdxById(arr,0)).toBe(0);
        expect(myService.findItemIdxById(arr,11)).toBe(1);
    });

    it("findItemIdxById should return -1 when ID is not found", function() {
        expect(myService.findItemIdxById(arr,9999)).toBe(-1);
    });

    it("removeItemFromArray should remove first item in array", function() {
        myService.removeItemFromArray(arr,0);

        expect(arr.length).toBe(7);
        expect(arr[0].id).toBe(11);
    });
    it("removeItemFromArray should remove last item in array", function() {
        myService.removeItemFromArray(arr,arr.length-1);

        expect(arr.length).toBe(7);
        expect(arr[6].name).toEqual("name6");
    });

});