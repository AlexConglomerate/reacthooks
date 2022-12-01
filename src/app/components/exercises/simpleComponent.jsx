import React from 'react';

/*
Отображает кнопку "Войти", если пользователь НЕ авторизован (зависит от параметра isAuth в props)
Отображает кнопку с содержанием "Выйти из системы", если пользователь авторизован (зависит от параметра isAuth в props)
При нажатии на "Войти", вызывается функция onLogin, а при нажатии на "Выйти из системы" вызывается onLogOut
*/


function SimpleComponent({onLogin, onLogOut, isAuth}) {
    return (
        <>
            {
                isAuth
                    ? <button onClick={onLogOut}>Выйти из системы</button>
                    : <button onClick={onLogin}>Войти</button>
            }
        </>
    );
}

export default SimpleComponent;