<h1 align="center">Supera Challenge</h1>

</br>

# Desafio

O desafio consiste em criar um site e-commerce, para vendas de jogos, onde as pessoas acessam o site para escolher quais jogos elas vão querer comprar e adicionam no carrinho para finalizar a compra.

</br>

## Planejamento

Ao receber o projeto, me organizei para faze-lo por partes, como: Primeiro passo era fazer o Header e o Footer, para depois fazer as páginas. Dessa maneira acaba agilizando o processo para que não perca muito tempo na customização.Após esse primeiro passo, começei a implementar as lógicas nos códigos, para que como etapa final eu podesse realizar as customizações sem perder tempo.
Para que eu realizar esse processo, utilizei as seguintes ferramentas:

* [Vite](https://vitejs.dev/) - Pois é uma ferramenta que agiliza no processo de download do React.
* [Tailwind](https://tailwindcss.com/) - É um Framework no qual agiliza  e facilita manipulação da estilização de um projeto.
* [React Router Dom](https://reactrouter.com/en/v6.3.0) - Biblioteca utilizada para fazer a conexão entre as páginas de forma dinâmica.
* [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - Dependência utilizada para criar os alertas de quando adiciona-se os produtos no carrinho.

</br>

<div>
    <img src="/public/Assets/Imgs/readme.png">
    </br>
    <ul>
        <li>./public/Assets - Onde estão os ícones e as imagens do projeto</li>
        <li>./src - Onde contem todos os arquivos restantes do projeto</li>
        <li>./src/Components - Onde é armazenado os componentes</li>
        <li>./src/Context - Contem a lógica utilizada para linkar o modal na page Home</li>
        <li>./src/Pages - Contem a criação das páginas Home, Cart e Done</li>
        <li>./src/Styles - Configuração do framework de estilização</li>
        <li>./src/Routes.tsx - Configurações das rotas e dos contexts</li>
    </ul>
</div>

</br>

## Resultado final:

    Consegui realizar as seguintes funcionalidades:
* Os produtos são renderizados dinanicamente através do products.json.
* Os valores exibidos no subtotal e no total são calculados dinamicamente.
* Poder adicionar vários itens do mesmo produto e eles ficarem agrupados no carrinho.
* O usuário poderá adicionar e remover ou alterar a quantidade de produtos do carrinho.
* O feedback visual de que foi adicionado algum produto no carrinho.
* Os valores monetários foram  formatados de acordo com a moeda brasileira.

## Aprendizado:

- Consegui melhorar minha organização.
- Melhorei na manipulação de objetos usando context.
- Aprendi a usar react-toastify

## Dificuldades:

- No início tive uma dificuldade em realizar o layout, pois não estava conseguindo imaginar como que ficaria o site completo. Então realizei algumas pesquisas e consegui determinar o layout.
  
- Minha maior dificuldade foi na hora de aplicar as lógicas, pois estava dando muitos erros, que acabava demorando uns 40 minutos ou até mais para soluciona-los.