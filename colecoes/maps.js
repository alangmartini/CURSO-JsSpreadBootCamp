const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

function getAdmin(map) {
    var admins = [];
    for([key, value] of map) {
        let k = 0
        map.get(key) === 'ADMIN' ? admins.push(key) : k++
    };

    return admins;
};

console.log(getAdmin(userRoles));
