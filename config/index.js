var mongoose = require('mongoose');

module.exports = {
    getDbConnectionString: function(){
        var connectString = 'mongodb://127.0.0.1:27017/school-management-system';
        return connectString;
    },
    secret: 'ilovescotchyscotch'
};
