export function gameLoop() {
  console.clear();
  let isPlaying = true;

  while (isPlaying) {
    console.log("Bem-vindo");
    console.log("[1] Jogar");
    console.log("[2] Regras");
    console.log("[3] Sair");

    const result = prompt("Escolha: ");

    switch (result) {
      case "1":
        console.clear();
        console.log("Escolheu jogar");
        break;

      case "2":
        console.clear();
        console.log("Escolheu regras");
        break;

      case "3":
        console.clear();
        console.log("Escolheu sair");
        isPlaying = false;
        break;

      default:
        console.clear();
        console.log("Não entendi");

        break;
    }
  }
}
