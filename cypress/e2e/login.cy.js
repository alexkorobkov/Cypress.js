describe('Автотесты для формы логина и пароля', function (){ 
    it('Верный логин и верный пароль', function () {
      cy.visit('https://login.qa.studio')
      cy.get('#mail').type('german@dolnikov.ru')
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click();
      cy.get('#messageHeader').should('be.visible')
      cy.get('#messageHeader').contains('Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('Работа функции восстановление пароля', function () {
      cy.visit('https://login.qa.studio')
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('german@dolnikov.ru')
      cy.get('#forgotForm > .header').should('be.visible')
      cy.get('#forgotForm > .header').contains('Восстановите пароль');
      cy.get('#exitRestoreButton > .exitIcon').should('be.visible')
    })
    it('Верный логин и неверный пароль', function () {
      cy.visit('https://login.qa.studio')
      cy.get('#mail').type('german@dolnikov.ru')
      cy.get('#pass').type('iLoveqastudio15')
      cy.get('#loginButton').click();
      cy.get('#messageHeader').should('be.visible')
      cy.get('#messageHeader').contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('Неверный логин и верный пароль', function () {
      cy.visit('https://login.qa.studio')
      cy.get('#mail').type('germaaan@dolnikov.ru')
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click();
      cy.get('#messageHeader').should('be.visible')
      cy.get('#messageHeader').contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })  
    it('Проверка валидации поля логин', function () {
      cy.visit('https://login.qa.studio')
      cy.get('#mail').type('germaaan@dolnikov.r')
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click();
      cy.get('#messageHeader').should('be.visible')
      cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })  
    it('Проверка на приведение к строчным буквам в логине', function () {
      cy.visit('https://login.qa.studio')
      cy.get('#mail').type('GerMan@Dolnikov.ru')
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click();
      cy.get('#messageHeader').should('be.visible')
      cy.get('#messageHeader').contains('Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
  })
  