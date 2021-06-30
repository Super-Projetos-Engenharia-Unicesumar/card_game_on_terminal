/**
 * Esta é uma classe para coletar informações do jogador.
 * Todos os métodos são estáticos.
 * Dessa forma não é necessário criar uma instancia desse objeto
 */
export default class Input {
  /**
   * Limpa a tela do usuário
   */
  static cleanScreen(): void {
    console.clear();
  }

  /**
   * Espera que o usuário digite uma tecla qualquer para continuar o processo.
   * @param message= Mensagem para ser exibida antes do usuário entrar com o valor. Este valor não é obrigatório.
   */
  static waitForKey(message?: string): void {
    prompt(message || "");
  }

  /**
   * Mostra uma mensagem e aguarda o usuário digitar qualquer valor.
   * Caso o usuário não digite um valor, a pergunta será repetida.
   * @param message Mensagem para ser exibida antes do usuário entrar com o valor.
   * @returns Valor em string que o usuário digitar
   */
  static askForString(message: string): string {
    let result: string | null;
    result = prompt(message);

    if (!result) {
      result = this.askForString(message);
    }

    return String(result);
  }

  /**
   * Espera o usuário digitar um numero.
   * Caso o usuário não digite um valor que não seja um numero,
   * será repetida a pergunta.
   * @param message Mensagem para ser exibida antes do usuário entrar com o valor.
   * @returns Valor em number que o usuário irá digitar
   */
  static askForNumber(message: string): number {
    let result = 0;
    result = Number(prompt(message));

    if (Number.isNaN(result)) {
      result = this.askForNumber(message);
    }

    return result;
  }
}
