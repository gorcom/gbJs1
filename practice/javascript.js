var users = [
    {
        firstName: 'Ivan'
        , lastName: 'Ivanov'
        , birthDay: '01.01.1980'
        , phones: ['89069069090'
            , '89059055050'
              , ]
    },
    {
        firstName: 'Andrey'
        , lastName: 'Andreev'
        , birthDay: '10.10.1970'
        , phones: ['89079077070'
            , '89099090990'
              , ]
    }
            ]


var user = {};
user.firstName = prompt('Введите имя');
user.lastName = prompt('Введите Фамилию');
user.birthDay = prompt('Введите дату рождения');
user.phones = [];
user.phones[0] = prompt('Введите номер телефона');

users.push(user);

for (var i = 0; i < users.length; i++) {
    console.log('Имя: '+ users[i].firstName, ' Фамилия: ' + users[i].lastName, ' Дата рождения: ' + users[i].birthDay, ' Телефоны: ' + users[i].phones.join(', '));
}