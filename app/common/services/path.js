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
                findAll :   "http://users.impaqgroup.com/findall",
                find    :   "http://kamosz.pl/angular/find.php"
            }
        }
    }
});