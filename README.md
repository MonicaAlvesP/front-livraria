# Livraria Vai na Web - Desafio Final Frontend

Este projeto foi desenvolvido como parte da conclusão do módulo de Frontend no curso de Fullstack da Vai na Web. Com a orientação da instrutora [Fernanda Corrêa](https://www.linkedin.com/in/fernandacorr%C3%AAa/), aplicamos os conceitos e tecnologias aprendidas ao longo do curso.

## Sobre o Projeto

A aplicação é uma biblioteca virtual desenvolvida em React, que permite aos usuários:

- Doar livros através de um formulário intuitivo
- Explorar os livros já doados com detalhes completos
- Descobrir os benefícios da doação de livros e seu impacto social

## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e ferramentas:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **React Router DOM**: Gerenciamento de rotas para navegação no SPA
- **React Icons**: Biblioteca de ícones personalizáveis para React
- **Sass/SCSS**: Pré-processador CSS para estilos modulares e organizados
- **Axios**: Cliente HTTP para requisições à API
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **src/components**: Componentes reutilizáveis (Header, Footer, BookCard, Card)
- **src/pages**: Páginas principais da aplicação (Inicio, LivrosDoados, QueroDoar, DetailsBook)
- **src/services**: Serviços para comunicação com a API
- **src/styles**: Arquivos SCSS com estilos globais e abstrações (mixins, variáveis)
- **src/assets**: Imagens e outros recursos estáticos

## Funcionalidades Implementadas

- **Header e Navegação**: Sistema de navegação responsivo com menu hambúrguer para dispositivos móveis
- **Página Inicial**: Apresenta a proposta da biblioteca e os benefícios da doação de livros
- **Listagem de Livros**: Exibe os livros doados em cards com informações básicas
- **Detalhes do Livro**: Página dedicada com informações completas sobre cada livro
- **Formulário de Doação**: Interface para cadastro de novos livros com validações
- **Loading States**: Skeletons para melhorar a experiência durante o carregamento de dados
- **Design Responsivo**: Layouts adaptados para diferentes tamanhos de tela

## Status do Projeto

O projeto está funcional com as principais features implementadas:

- **Concluído**:

  - Interface completa com componentes React e estilização SCSS
  - Integração com API para listar, buscar e cadastrar livros
  - Navegação entre páginas com React Router
  - Layout responsivo para diferentes tamanhos de tela

- **Próximas Etapas**:
  - Implementação de autenticação de usuários
  - Adição de filtros e busca na listagem de livros
  - Melhorias de acessibilidade
  - Barra de pesquisa na interface (apenas visual)

## Como Executar

Para executar este projeto localmente, siga estes passos:

```bash
# Clone o repositório
git clone https://github.com/MonicaAlvesP/front-livraria.git

# Entre no diretório
cd front-livraria

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

<details align="left">
  <summary>Mais Detalhes..</summary>
    <p>Projeto criado como parte de um desafio proposto pela<img src="./src/assets/img/logo-vainaweb.png" width="50" align="center" />.</p>
  <div align="right">
    Feito com 💜 por <a href="https://github.com/MonicaAlvesP?tab=repositories">MA</a>
  </div>
</details>
