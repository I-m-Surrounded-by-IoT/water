import request from '@/utils/request'

export function login(username="admin1",password="admin2") {

    return request({

        method: 'post',

        url: '/api/user/login',

        data: {
            username,
            password
        }

    })

}