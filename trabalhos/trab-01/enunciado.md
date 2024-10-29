# Desenvolvimento de um aplicativo front-end

Desenvolva uma aplicação **VueJS** para controlar despesas e receitas em uma conta corrente. A aplicação **deve manter uma lista de transações**, cada qual representada por uma **descrição** e um **valor**. Valores _positivos representam créditos_, enquanto valores _negativos representam débitos_.

A aplicação deve apresentar a **lista de débitos e créditos** para o usuário, **mantendo a ordem em que as transações foram registradas** pelo usuário. Ao lado de cada transação deve ser apresentado o **saldo naquele momento**, calculado como o _somatório de todos os valores até a transação atual_.

Novas transações são recebidas a partir do preenchimento de um **formulário** contendo dois campos, sendo o primeiro para a **descrição da nova transação** e o segundo para o **valor da transação**.

## Funcionalidades

As funcionalidades desejadas para o projeto de controle de despesas são:

1. Apresentar uma lista de transações
1. Registrar uma nova transação via formulário
1. Remover uma transação
1. Trocar a ordem das transações, subindo ou descendo uma transação na lista e atualizando os saldos
1. Apresente os créditos em verde e os débitos em vermelho na lista de transações
1. Apresente saldos negativos com cor de fundo vermelha e cor de texto amarela
1. A lista de transações deve ser paginada de 5 em 5 transações.

#### _A aplicação deve ser desenvolvida usando componentes e deve rodar no site “jsfiddle.net”._
