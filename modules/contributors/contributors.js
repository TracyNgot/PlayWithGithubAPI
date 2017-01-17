var model = require('./model/contributor');
var service = require('./../../services/github');

function ContributorController () {
    this._model = model;
    this._obj = null;
}

ContributorController.prototype.get = function(location, limit) {
    var result = 'ok';
    if (!!location) {
        service.get('/users', function (err, status, body, headers) {
          console.log(body); 
            result = {
                error: false,
                data: body
            };
            this._obj = body;
        });
//        service.search().users('/search/users', {
//            q: 'location:' + location,
//            sort: 'public_repos',
//            order: 'desc'
//        }, function (err, status, body, headers) {
//          console.log(body.length);
//        });
    } else {
        result = {
            error: true,
            message: 'Location required'
        };
    }
    return result;
};

var contributors = new ContributorController;
module.exports = contributors;