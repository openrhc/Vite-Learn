import '@/imageLoader'
import '@/svgLoader'
import user from '@assets/json/user.json'
import './src/test'

console.log('user :>> ', user);


const userRes = await fetch('/api/users', {
    method: 'post'
})

const users = await userRes.json()
console.log('users :>> ', users);