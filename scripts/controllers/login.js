angular.module('webschoolCookie')
  .controller('LoginCtrl', function($window, Sessao) {

    var login = this;

    login.usuario = 'webschool';
    login.senha = 'webschool';

    login.autenticar = function() {
      if (login.usuario === 'webschool' && login.senha === 'webschool') {
        Sessao.criar(1, 123);
      } else {
        $window.alert('Usuário ou senha incorretos')
      }
    };

  });
