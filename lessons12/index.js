const hb = require('./husband').husband;
const fs = require('fs');

const logData = {
    salary: hb.getSalary(),
    friends: hb.getfriends(),
    sober: hb.getSober()
};


for(let key in logData){
    let str = '';

    switch (key) {
        case 'salary':
            str = "Зарплата" + '=' + logData[key] + "\r\n";
            break;
        case 'friends' :
            str = 'Друзья'+ '=' + logData[key] + "\r\n";
            break;
        case 'sober' :
            str = 'Трезвый'+ '=' + logData[key] + "\r\n";
    }


    fs.appendFile('log.txt',str , (err) => {
        if (err) throw err;
    });
}


console.log('The "data to append" was appended to file!');

