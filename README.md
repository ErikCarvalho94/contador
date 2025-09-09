# Contador Web Interativo com Modo Escuro, Troca de Ícone e Acessibilidade Aprimorada

Este projeto consiste em um contador web interativo, desenvolvido utilizando HTML, CSS e JavaScript, com o objetivo de proporcionar uma experiência de usuário acessível e agradável para todos. A estilização do botão de alternância do modo escuro foi realizada com **SCSS**, demonstrando o uso de pré-processadores CSS para uma melhor organização e manutenção do código de estilos. O projeto também utiliza **Node.js e npm** para o gerenciamento de dependências de desenvolvimento e emprega o **localStorage** do navegador para persistir a preferência do usuário pelo modo claro ou escuro.

## Objetivo

O principal objetivo deste projeto é demonstrar a criação de uma aplicação web fundamental (um contador) incorporando boas práticas de desenvolvimento front-end e, crucialmente, recursos de acessibilidade. Busquei ilustrar como elementos interativos podem ser controlados não apenas com o mouse, mas também através da **navegação por teclado (utilizando a tecla `Tab`)**, tornando a aplicação utilizável por um público mais amplo. Além disso, o modo escuro com troca visual de ícone (sol e lua) para melhorar a experiência em diferentes condições de iluminação e para usuários com sensibilidade à luz, com a estilização deste componente sendo feita utilizando SCSS. A preferência do usuário pelo modo claro ou escuro é **salva no localStorage** para que seja mantida mesmo após o fechamento ou recarregamento da página.

## Funcionalidades Principais

* **Contador Interativo:** Permite aos usuários incrementar, decrementar e resetar um valor numérico exibido na tela através de botões dedicados.
* **Modo Escuro com Troca de Ícone:** Apresenta um botão fixo no canto superior esquerdo que alterna entre os modos claro e escuro da página. O ícone deste botão (lua para o modo claro e sol para o modo escuro) muda dinamicamente ao ser acionado. A estilização deste componente foi desenvolvida utilizando **SCSS**. A escolha do modo é **persistida utilizando o localStorage**.
* **Acessibilidade:**
    * **Contraste de Cores:** Implementamos um modo escuro com cores de alto contraste para melhorar a legibilidade para usuários com baixa visão ou sensibilidade a cores.
    * **Navegação por Teclado:** Todos os elementos interativos (botões de incremento, decremento, reset e alternar cores) são acessíveis e podem ser focados utilizando a tecla `Tab` do teclado, permitindo a interação sem a necessidade de um mouse.
    * **Persistência de Preferência:** A preferência do usuário pelo modo claro ou escuro é **armazenada no localStorage**, garantindo que a interface seja carregada com o tema preferido em visitas subsequentes.

## Tecnologias Utilizadas

* HTML
* CSS
* JavaScript
* **SCSS** (para a estilização avançada do botão de alternância do modo escuro)
* **Node.js e npm** (para gerenciamento de dependências de desenvolvimento)
* **localStorage** (para persistência da preferência do tema)

## Dependências de Desenvolvimento

Este projeto utiliza o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) para gerenciar dependências de desenvolvimento, como o compilador SCSS (Sass).
