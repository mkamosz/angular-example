/**
 * Created by kamoszm on 2015-07-14.
 */

app.service('path', function(){
    this.url = function(){
        return {
            server: {
                get     :   "http://kamosz.pl/angular/get.php",
                remove  :   "http://kamosz.pl/angular/remove.php",
                edit    :   "http://kamosz.pl/angular/edit.php",
                findall :   "http://kamosz.pl/angular/findall.php",
                find    :   "http://kamosz.pl/angular/find.php"
            }
        }
    }
});

//app.service('path', function(){
//    this.url = function(){
//        return {
//            server: {
//                get     :   "http://kamosz.pl/angular/get.php",
//                remove  :   "http://users.impaqgroup.com/remove/",
//                edit    :   "http://users.impaqgroup.com/edit/",
//                findall :   "http://users.impaqgroup.com/findall",
//                find    :   "http://users.impaqgroup.com/find"
//            }
//        }
//    }
//});