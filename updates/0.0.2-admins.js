var keystone = require('keystone'),
    User = keystone.list('User');
 
exports = module.exports = function(done) {
    
    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: 'phakhruddin@gmail.com',
        password: 'demo',
        canAccessKeystone: true
    }).save(done);
    
};
