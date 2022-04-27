function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value==='Admin') {
            admins.push(key);
        };
    };
    return admins;
};

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Rubão','User');
usuarios.set('Lucas','User');
usuarios.set('Diógenes','Admin');

console.log(getAdmins(usuarios));