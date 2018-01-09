const fs = require('fs');
let express = require('express'); // подключаю модуль
const app = express(); // создаю объект приложения

app.use(express.static("./public"));
app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3000, () => {
	console.log('Пошла жара');
});