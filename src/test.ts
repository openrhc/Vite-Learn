console.log(123)

type A = {
  name: string
}

function get(a: A) {
  return a.name
}

const a = get({ name: '啊哈哈哈' })
console.log('a :>> ', a)
