enum NodePurpose {
  Default,
  Start,
  End,
  Wall,
}

export class Node {
  public value: number;
  public purpose: NodePurpose;

  constructor(public id: number) {
    this.value = -1;
    this.purpose = NodePurpose.Default;
  }

  get purposeString(): string {
    switch (this.purpose) {
      case 0:
        return "default";
      case 1:
        return "start";
      case 2:
        return "end";
      case 3:
        return "wall";
    }
  }
}
