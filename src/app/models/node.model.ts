import { BinaryHeapElement } from "./minheap.model";

export enum NodePurpose {
  Default,
  Start,
  End,
  Wall,
}

export class Node implements BinaryHeapElement {
  public distance: number = -1;
  public weight: number = 1;
  public purpose: NodePurpose = NodePurpose.Default;
  public finalized: boolean = false;
  public lastNode: Node;
  public path: boolean;

  constructor(public id: number) {}

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

  // the priority in a binary heap
  get priority(): number {
    return this.distance;
  }
}
