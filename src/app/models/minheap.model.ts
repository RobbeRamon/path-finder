import { Binary } from "@angular/compiler";

export interface BinaryHeapElement {
  priority: number;
}

export class MinHeap {
  private _content: BinaryHeapElement[] = [];

  constructor() {}

  get empty() {
    return this._content.length < 1;
  }

  push(element: BinaryHeapElement) {
    this._content.push(element);
    this.bubbleUp(this._content.length - 1);
  }

  pop(): BinaryHeapElement {
    // store the first element
    let result: BinaryHeapElement = this._content[0];
    // get the last element of the array
    let end: BinaryHeapElement = this._content.pop();

    // if there are any elements left, put the end element at the start, and let it sink down
    if (this._content.length > 0) {
      this._content[0] = end;
      this.sinkDown(0);
    }

    return result;
  }

  private bubbleUp(i: number) {
    let element = this._content[i];

    // when i is 0, the element can not go up any further
    while (i > 0) {
      // get the parent element
      let parentI = Math.floor((i + 1) / 2) - 1;
      let parent = this._content[parentI];

      if (parent.priority > element.priority) {
        // swap with parent element
        this._content[parentI] = element;
        this._content[i] = parent;
        i = parentI;
      } else {
        // otherwise, bubbling up is done
        break;
      }
    }
  }

  private sinkDown(i: number) {
    let element = this._content[i];
    let length = this._content.length;

    let child1: BinaryHeapElement;
    let child2: BinaryHeapElement;

    while (true) {
      // get child indeces
      let child2I = (i + 1) * 2,
        child1I = child2I - 1;

      // this is used to store the new position of the element (if necessary)
      let swap = null;

      // if the first child is in the array
      if (child1I < length) {
        // look it up
        child1 = this._content[child1I];

        if (child1.priority < element.priority) {
          swap = child1I;
        }
      }

      // if the second child is in the array
      if (child2I < length) {
        // look it up
        child2 = this._content[child2I];

        // if the priority is lower than the parent and the sibling (when given)
        if (
          child2.priority < (swap == null ? element.priority : child1.priority)
        ) {
          swap = child2I;
        }
      }

      // no swap needed
      if (swap === null) break;

      // swap and continue
      this._content[i] = this._content[swap];
      this._content[swap] = element;
      i = swap;
    }
  }
}
