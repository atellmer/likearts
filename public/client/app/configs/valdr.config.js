;
(function () {
	'use strict';
	angular
		.module('app')
		.config(valdr);

	valdr.$inject = ['valdrProvider'];

	function valdr(valdrProvider) {
		valdrProvider.addConstraints({
			'Order': {
				'name': {
					'size': {
						'min': 2,
						'max': 20,
						'message': 'Нужно не менее 2 символов, но не более 20'
					},
					'pattern': {
						'value': '/^[+]{0,1}[а-яА-Я, a-zA-Z]{2,}$/',
						'message': 'Имя должно состоять из букв'
					},
					'required': {
						'message': 'Обязательное поле'
					}
				},
				'phone': {
					'size': {
						'min': 5,
						'max': 15,
						'message': 'Нужно не менее 5 символов, но не более 15.'
					},
					'pattern': {
						'value': '/^[+]{0,1}[-(),0-9]{5,}$/',
						'message': 'Сюда вводить буквы не надо'
					}
				},
				'email': {
					'email': {
						'message': 'Некорректный e-mail'
					},
					'required': {
						'message': 'Обязательное поле'
					}
				}
			}
		});
	}
}());