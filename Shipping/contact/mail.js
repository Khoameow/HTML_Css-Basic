// function sendMail(){
//     Email.send({
//         Host:"smtp.gmail.com",
//         Username:"trankhoakun@gmail.com",
//         Password:"Khoakun99",
//         To:'vankhoa02101999@gmail.com',
//         From:document.getElementById("email").value,
//         Subject:document.getElementById("subject").value,
//         Body:document.getElementById("message").value
//     }).then(
//         message=>alert(message)
//     );
// }
// main.js
var nodemailer = require('nodemailer');

const option = {
    service: 'gmail',
    auth: {
        user: 'mail.vankhoa02101999@gmail.com', // email hoặc username
        pass: 'khoakun99' // password
    }
};
var transporter = nodemailer.createTransport(option);

transporter.verify(function(error, success) {
    // Nếu có lỗi.
    if (error) {
        console.log(error);
    } else { //Nếu thành công.
        console.log('Kết nối thành công!');
        var mail = {
            from: document.getElementById("email").value, // Địa chỉ email của người gửi
            to: 'vankhoa02101999@gmail.com', // Địa chỉ email của người gửi
            subject:document.getElementById("subject").value, // Tiêu đề mail
            text: document.getElementById("message").value, // Nội dung mail dạng text
        };
        //Tiến hành gửi email
        transporter.sendMail(mail, function(error, info) {
            if (error) { // nếu có lỗi
                console.log(error);
            } else { //nếu thành công
                console.log('Email sent: ' + info.response);
            }
        });
    }
});