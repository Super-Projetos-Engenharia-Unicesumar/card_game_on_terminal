import Input from "./Input.ts";

export default class Game {
  start(): void {
    Input.cleanScreen();
    this.gameLoop();
  }

  private gameLoop(): void {
    let isPlaying = true;

    while (isPlaying) {
      const result = this.mainMenu();

      switch (result) {
        case 1:
          this.playGame();
          break;

        case 2:
          this.showRules();
          break;

        case 3:
          this.quitGame();
          isPlaying = false;
          break;

        default:
          Input.cleanScreen();
          console.log("Não entendi");
          break;
      }
    }
  }

  private playGame(): void {
    Input.cleanScreen();
    console.log("Escolheu jogar");
    console.log("Iniciar jogo");
    console.log("Mostrar total de pontos");
    console.log("Mostrar cartas disponíveis");
    console.log("Escolher carta");
    console.log("Escolher valor");
    console.log("Verificar vencedor da rodada");
    console.log("Verificar vencedor da partida");
    Input.waitForKey("Jogo encerrado");
    Input.cleanScreen();
  }

  private showRules(): void {
    Input.cleanScreen();
    console.log("Escolheu regras");
    Input.waitForKey("Regras encerradas");
    Input.cleanScreen();
  }

  private quitGame(): void {
    Input.cleanScreen();
    console.log("Escolheu sair");
  }

  private mainMenu(): number {
    console.log("*=================*");
    console.log("Bem-vindo");
    console.log("[1] Jogar");
    console.log("[2] Regras");
    console.log("[3] Sair");
    console.log("*=================*");
    return Input.askForNumber("Escolha a opção");
  }
}
