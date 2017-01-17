var service = require('./../../services/github');
var Promise = require("bluebird");

function ContributorController () {}

ContributorController.prototype.get = function(location, limit) {
    return new Promise(function(resolve, reject) {
        if (!!location) {
            service.search().users({
                q: 'location:' + location,
                sort: 'public_repos',
                order: 'desc'
            }, function(err, data, headers) {
                if (!!err) {
                    reject({
                        error: true,
                        message: 'Request failed',
                        data: err
                    });
                } else {
                    var items = data.items;
                    if (!!limit) {
                        items = items.slice(0, limit);
                    }
                    resolve({
                        error: false,
                        message: 'Request succeed',
                        length: items.length,
                        data: items
                    });
                }
            });
        } else {
            reject({
                error: true,
                message: 'Location required'
            });
        }
    });
};

ContributorController.prototype._setError = function() {
    
};

var contributors = new ContributorController;
module.exports = contributors;