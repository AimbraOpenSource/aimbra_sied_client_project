export class ConverterService<OR, DE> {

  private fromOrigem: (origem: OR, desntity: DE) => void;
  private fromDestiny: (destiny: DE, origin: OR) => void;


  constructor(fromOrigem: (origem: OR, desntity: DE) => void, fromDestiny: (destiny: DE, origin: OR) => void) {
    this.fromOrigem = fromOrigem;
    this.fromDestiny = fromDestiny;
  }


}
