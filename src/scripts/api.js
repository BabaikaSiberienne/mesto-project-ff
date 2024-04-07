const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-10',
    headers: {
        authorization: '40cf3434-37df-464c-883a-5c707a2b3b3e',
        'Content-Type': 'application/json'
    }
}
export function getF() {
    
    return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
    })
      .then((res) => {
          if (res.ok) {
             return res.json(); 
          }
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
}

