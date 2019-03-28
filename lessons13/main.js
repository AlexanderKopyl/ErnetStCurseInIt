const http = require('http');
const secret = require('./secret');
const shop = require('./main/shop').shop;
const nodemailer = require('nodemailer');

const port = 3000;
const pathName = '127.0.0.1';

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'alexsander11115@gmail.com',
//         pass: 'uwnndxufudqnxuui'
//     }
// });
//
// var mailOptions = {
//     from: 'alexsander11115@gmail.com',
//     to: 'alexsander11115@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };
//
// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

http.createServer((req,res)=>{

    let st = JSON.parse('{"students": ["student1","student2","student3"]}');


    if(req.method === "GET"){
        if(req.url === '/admin'){
           res.write('Hello admin')
        }
        if(req.url === '/students'){
            st.students.forEach(function (elem) {
                res.write(elem + "\n")
            });

        }
        if(req.url === '/shop'){
            for (let key in shop){
                let Obj = key + "\n";
                res.write("--"+Obj);
                for(let i in shop[key]){
                    let ObjKey = i + "\n";
                    res.write("----"+ObjKey);
                    for(let j in shop[key][i]){
                        let KeyinObj = j + "\n";
                        res.write("------"+KeyinObj);
                       for(let z in shop[key][i][j]){
                           let keyinStock = z + "\n";
                           res.write("------" + keyinStock);
                           for (let x in shop[key][i][j][z]) {
                               let xkey = x + "=";
                               res.write("--------" + xkey + shop[key][i][j][z][x] + "\n");
                           }

                       }
                    }
                }
            }


        }
    }
    if(req.method === "POST"){

        let postData = '';

        req.on('data',(chunk) => {
            postData += chunk;
        });

        req.on('end', ()=>{
            console.log(postData)
        })

    }
    res.end();
}).listen(port,pathName,()=>{
    console.log('Start listening');
});

