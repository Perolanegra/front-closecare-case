# Closecare Case Front-end

Faça um _fork_ deste projeto e desenvolva um layout de 2 etapas sendo a primeira uma lista de items e a segunda tendo 2 estados, criação e edição de item.

![Layout](https://github.com/closecare/case-frontend/blob/master/layout.png?raw=true)

## Requisitos

Necessário usar como base:
- [Angular](https://angular.io/)
- [Material](https://material.angular.io/)
- [PokeAPI](https://pokeapi.co/)

## Execução

A aplicação deve abrir na tela de listagem contendo informações de 5 itens na lista e em cada item:
- Imagem
- Nome
- Habilidades
- Tipo
- Ação

Os botões "Adicionar"(Canto superior direito) e "Editar"(Coluna de ações de cada item) devem abrir um dialog com o formulário de preenchimento estando em branco para "Adicionar" e preenchido para "Editar".

No formulário devem existir 3 campos:
- Nome [Input](https://material.angular.io/components/input/examples#input-clearable)
- Habilidades [Chip](https://material.angular.io/components/chips/examples#chips-form-control)<small>(digitado)</small>
- Tipo [Autocomplete](https://material.angular.io/components/autocomplete/examples#autocomplete-auto-active-first-option)<small>(preenchido com os 20 tipos existentes na API)</small>

As diferentes ações devem:
- Adicionar<small>(Incrementar 1 item na lista)</small>
- Editar<small>(Atualizar o respectivo item na lista)</small>

## Finalização

Ao terminar envie uma PR explicando na mesma o que for necessário para o entendimento do que foi feito

## Dica
Além dos requisitos, sinta-se livre para acrescentar o que considerar necessário para um projeto escalável(Documentação, testes, loaders, etc...), o teste será avaliado criteriosamente.
