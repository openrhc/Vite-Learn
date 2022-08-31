const mockjs = require('mockjs')

const userList = mockjs.mock({
    "data|100": [{
        // name: '@cname',
        name: mockjs.Random.cname(),
        // ename: "@name",
        ename: mockjs.Random.name(),
        "id|+1": 1,
        avatar: mockjs.Random.image()
    }]
})

module.exports = [
    {
        methods: "post",
        url: "/api/users",
        response: ({ body }) => {
            return {
                code: 200,
                msg: "success",
                ...userList
            }
        }
    }
]