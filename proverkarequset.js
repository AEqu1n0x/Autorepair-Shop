const express = require('express');
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')


const Server = express();

const PORT = 3001;
let user = undefined

Server.get('/main', (req, res) => {
    res.sendFile(__dirname + '/main.html')
})
Server.get('/price', (req, res) => {
    res.sendFile(__dirname + '/price.html')
})
Server.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})
Server.get('/contacts', (req, res) => {
    res.sendFile(__dirname + '/contacts.html')
})
Server.get('/checkprice', (req, res) => {
    res.sendFile(__dirname + '/checkprice.html')
})


Server.use('/css', express.static(__dirname + '/css'))

Server.use('/js', express.static(__dirname + '/js'))

Server.use(bodyParser.urlencoded({ extended: false }))

Server.post('/request', (req, res) => {
    if (!req.body.name) return res.sendStatus(400)
    const message = {
        from: 'СТО "КиК" <cto_kuk@mail.ru>',
        to: req.body.email+', cto_kuk@mail.ru',
        subject: 'Заявка в автосервис "КиК"',
        html: '<h2>Здравствуйте, Ваша заявка успешно принята, ' + req.body.name +'</h2><br>' + '<i>Вот данные, которые Вы нам отправили: </i><br> '+ '<ul><li>Ваш номер телефона:'  + req.body.phone+'</li><br><li>Ваша проблема: ' + req.body.problem + '</li><br><li>Подробнее о вашей проблеме:' + req.body.text + '</li></ul><br><p>Скоро с Вами свяжутся и назначат время. <br>Всего доброго! <br> Вымышленная СТО "Каракатое и Киви".'
    }
    mailer(message)
    user = req.body
    res.redirect('/main')
})


   
Server.get('/request', (req, res) => {
    if(typeof user !== 'object') return res.sendFile(__dirname + '/request.html')
    res.send('Ваша заявка успешно принята, ' + user.name)
    user = undefined

})


Server.listen(PORT, () => console.log('serv list at http://localhost:3001/request'))

