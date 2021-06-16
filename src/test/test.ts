// 约束泛型
interface IwithLength {
  length: number
}

function addMyBoy<T extends IwithLength>(value: T): T {
  return value
}

addMyBoy({ ni: 123, length: 1 })

//类的泛型
class Queue<T> {
  private data = []

  push(item: T) {
    return this.data.push(item)
  }

  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()

queue.push(1)
// queue.push('str');

console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

interface KeyPair<T, U> {
  key: T
  value: U
}

let kp1: KeyPair<string, number> = { key: '123', value: 123 }

interface IPlus<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number): number {
  return a + b
}

function connect(a: string, b: string): string {
  return a + b
}

const a: IPlus<number> = plus
const b: IPlus<string> = connect

export {}
