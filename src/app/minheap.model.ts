export class MinHeap<T> {
  //for this implementation I will be using
  //the 0th element as the size
  //the heap stores the object and the priority in a tuple
  private heap: [T, number][];

  constructor() {
    this.heap = new Array(1);
    //when the min heap is instantiated the size will be 0
    this.heap[0] = [null, 0];
  }

  public getSize(): number {
    return this.heap[0][1];
  }

  public clearHeap(): void {
    //this effectively says everything that is in the heap now will get overwritten.
    //I do it this way, so memory won't have to be reallocated, and I won't have to go through every element individually clearing them

    this.heap[0][1] = 0;
  }

  private getSmallerChildIndex(
    leftChildIndex: number,
    rightChildIndex: number
  ): number {
    var size: number = this.getSize();

    if (leftChildIndex > size && rightChildIndex <= size) {
      return leftChildIndex;
    } else if (leftChildIndex <= size && rightChildIndex > size) {
      return leftChildIndex;
    } else if (this.heap[leftChildIndex][1] < this.heap[rightChildIndex][1]) {
      return leftChildIndex;
    } else {
      return rightChildIndex;
    }
  }

  public popTop(): T {
    //the first actual value will be the smallest element in the min heap
    var returned: [T, number] = this.heap[1];
    var holder: [T, number];
    var size: number = this.getSize();
    var smallerChildIndex: number;
    var current: number = 1;
    var leftChildIndex: number;
    var rightChildIndex: number;
    //put the last element in the root position
    this.heap[1] = this.heap[size];
    //clear the space where the last element just was
    this.heap[size] = null;
    //update the size of the heap
    size--;
    this.heap[0][1] = size;

    leftChildIndex = 2 * current;
    rightChildIndex = 2 * current + 1;

    if (leftChildIndex > size && rightChildIndex > size) {
      return returned[0];
    } else {
      smallerChildIndex = this.getSmallerChildIndex(
        leftChildIndex,
        rightChildIndex
      );
    }
    //go untill we reach a leaf
    while (this.heap[current][1] > this.heap[smallerChildIndex][1]) {
      holder = this.heap[current];
      this.heap[current] = this.heap[smallerChildIndex];
      this.heap[smallerChildIndex] = holder;

      //update indexes
      current = smallerChildIndex;
      leftChildIndex = 2 * current;
      rightChildIndex = 2 * current + 1;

      //make sure we are not out of bounds
      if (leftChildIndex <= size && rightChildIndex <= size) {
        smallerChildIndex = this.getSmallerChildIndex(
          leftChildIndex,
          rightChildIndex
        );
      } else {
        break;
      }
    }
    return returned[0];
  }

  public insert(value: [T, number]): void {
    var current: number;
    var parent: number;
    var holder: [T, number];
    var newSize: number = this.getSize() + 1;
    var oldSize: number = this.getSize();

    //if there was nothing in the heap before
    if (oldSize === 0) {
      //update the size
      this.heap[0][1] = newSize;
      this.heap[1] = value;
    } else {
      //update the size
      this.heap[0][1] = newSize;
      this.heap[newSize] = value;
      current = newSize;
      parent = Math.floor(current / 2);

      if (this.heap[0][1] === 1) {
        this.heap[1] = value;
      } else {
        while (parent !== 0) {
          if (this.heap[current][1] < this.heap[parent][1]) {
            holder = this.heap[current];
            this.heap[current] = this.heap[parent];
            this.heap[parent] = holder;
          }
          //go up tree
          current = parent;
          parent = Math.floor(current / 2);
        }
      }
    }
  }
}
