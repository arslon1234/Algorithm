class MaxBinaryHeap {
    constructor(){
        this.values = []
    }
    insert(val){
        this.values.push(val)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1
        let element = this.values[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if(parent >= element) break;
            this.values[idx] = parent
            this.values[parentIdx] = element
            idx = parentIdx
        }
    }
}
const heap = new MaxBinaryHeap()
heap.insert()