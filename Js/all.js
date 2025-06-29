document.addEventListener('DOMContentLoaded', function () { //Загрузка всего контента и разбор браузером

    let avatarPath = localStorage.getItem('avatarPath');//Получение значение путем ключа через локальное хранилище
    let profileName = localStorage.getItem('profileName')//Получение значение путем ключа через локальное хранилище
    document.getElementById('user').innerText = profileName;//Установление текста с данным айди

    if (avatarPath) {
        document.getElementById('otherPageAvatar').src = avatarPath;///Проверка и получение значение
    }
    
});