/**
 * Created by kamoszm on 2015-10-24.
 */

describe("path Service - service for path", function() {

    var myService,
        conf;

    beforeEach(function (){
        var $injector = angular.injector([ 'appAngularExample' ]);
        myService = $injector.get( 'path' );
        conf = $injector.get('myConfig');
    });

    it("it should defined", function() {
        var path = myService.url();

        expect(path.server).toBeDefined();
    });

    it("it should return correct url for dev(mockData) or production", function() {
        var path = myService.url();

        if(conf.mockData){
            expect(path.server.get).toEqual("http://kamosz.pl/angular/get.php");
            expect(path.server.remove).toEqual("http://kamosz.pl/angular/remove.php");
            expect(path.server.edit).toEqual("http://kamosz.pl/angular/edit.php");
            expect(path.server.findall).toEqual("http://kamosz.pl/angular/findall.php");
            expect(path.server.find).toEqual("http://kamosz.pl/angular/find.php");
        } else{
            expect(path.server.get).toEqual("http://kamosz.pl/angular/get.php");
            expect(path.server.remove).toEqual("http://users.impaqgroup.com/remove/");
            expect(path.server.edit).toEqual("http://users.impaqgroup.com/edit/");
            expect(path.server.findall).toEqual("http://users.impaqgroup.com/findall");
            expect(path.server.find).toEqual("http://users.impaqgroup.com/find");
        }
    });

});