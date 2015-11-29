/**
 * Created by kamoszm on 2015-07-14.
 */

app.service('path', ['myConfig', function(myConfig){
    this.url = function(){
        var urls = [
            {
                get     :   "http://kamosz.pl/angular/get.php",
                remove  :   "http://kamosz.pl/angular/remove.php",
                edit    :   "http://kamosz.pl/angular/edit.php",
                findall :   "http://kamosz.pl/angular/findall.php",
                find    :   "http://kamosz.pl/angular/find.php"
            },
            {
                get     :   "http://kamosz.pl/angular/get.php",
                remove  :   "http://users.impaqgroup.com/remove/",
                edit    :   "http://users.impaqgroup.com/edit/",
                findall :   "http://users.impaqgroup.com/findall",
                find    :   "http://users.impaqgroup.com/find"
            }
        ];

        return {
            server: myConfig.mockData ? urls[0] : urls[1]
        }
    }
}]);