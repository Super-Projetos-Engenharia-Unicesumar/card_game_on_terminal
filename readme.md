# Card Game no Terminal

Este é um projeto feito por alunos (e ex-alunos) da UniCesumar. Este projeto não tem nenhum vinculo institucional com a Universidade, sendo apenas um projeto para aprendizado e alunos.

Se você quer saber como rodar o projeto, veja abaixo em [o que preciso para rodar esse projeto?](#o-que-preciso-para-rodar-esse-projeto)

# To-Do: O que falta?

- [ ] Menu inicial que irá direcionar ao Loop do jogo
  - [ ] Criar menu inicial com: `Jogar`, `Regras`, `Sair`
  - [ ] Criar mensagem de entrada no jogo
  - [ ] Criar mensagem para mostrar as regras do jogo
  - [ ] Criar mensagem de saída e encerrar o programa
- [ ] Loop inicial do jogo
  - [ ] Loop principal ~~ou fazer uma classe `Game`~~
    - [ ] Mostra total de pontos
    - [ ] Mostra cartas da mão
    - [ ] Escolhe carta da lista
    - [ ] Escolhe valor da carta
    - [ ] Verifica vencedor da rodada
    - [ ] Verifica se teve um vencedor da partida
  - [ ] Criar função para coletar `input` do jogador
  - [ ] Criar classe de `Card`
    - [ ] Propriedade `name`
    - [ ] Propriedade `poder`
    - [ ] Propriedade `rapidez`
    - [ ] Propriedade `controle`
  - [ ] Criar classe de `Deck`
    - [ ] Propriedade `cards`: Array de `card`
    - [ ] Propriedade `usedCards`
    - [ ] Implementar método `loadDeck`
    - [ ] Implementar método `shufle`
    - [ ] Implementar método `drawCard`
  - [ ] Criar classe de `Round`
    - [ ] Implementar método `start`
    - [ ] Implementar método `playCard`
    - [ ] Implementar método `checkWinner`

# O que preciso para rodar esse projeto?

- [Cópia projeto na sua máquina](#Cópia-projeto-na-sua-máquina)
- [Instalar o Deno](#Instalar-o-Deno)
- [Executar o comando inicial](#Executar-o-comando-inicial)

### Cópia projeto na sua máquina

Para cópiar o projeto para sua máquina você pode fazer de duas formas, a primeira é baixando o arquivo ZIP desse projeto ou fazendo um clone usando a ferramenta [git](https://git-scm.com/). Recomendo usar o [git](https://git-scm.com/) para aprender a usar essa ferramenta.

### Instalar o Deno

[Deno](https://deno.land) é uma plataforma que roda nativamente códigos de [Typescript](https://wikipedia.org/wiki/typescript) e/ou [Javascript](https://wikipedia.org/wiki/javascript), de fácil instalação e de fácil uso.

Para instalar siga os passos [instação](https://deno.land/#installation) de acordo com o Deno e então quando tiver a instalado, abra o terminal e então digite `deno -V` (o `V` é maiusculo), e você deve ver uma versão.

### Executar o comando inicial

Para rodar o aplicativo digite no terminal o seguinte:

```sh
deno run -A mod.ts
```

Isso irá executar o arquivo `mod.ts` com o [Deno](https://deno.land).

# Sobre a ideia do projeto

Este é um jogo simples de cartas, onde você recebe uma mão de 10 cartas, cada carta possui três valores: **Poder**, **Rapidez** e **Controle**. Você e seu oponente escolhem uma carta e um valor.

Uma vez que tenham escolhido a carta, elas são reveladas, assim como o valor escolhido. Você compara o seu valor com o valor da carta de seu oponente, e seu oponente comprara o valor da carta do seu oponente com a sua carta.

Se ambos tiverem vencido a comparação, ninguém ganha ponto. Se apenas um vencer a comparação, ganha um ponto de vitória.

Vence o jogo aquele que tiver 3 pontos de vitória.
