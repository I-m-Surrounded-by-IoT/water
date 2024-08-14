import request from '@/utils/request'

export function reportNow(deviceId) {

    return request({

        method: 'get',

        url: '/api/collection/report_now',

        params: {
            deviceId
        },

        headers: {
            Authorization: localStorage.getItem("token")
            
        }

    })

}

export function getDeviceList() {

    return request({

        method: 'get',

        url: '/api/device/list',

        headers: {
            Authorization: localStorage.getItem("token")
        }

    })

}

export function registDeviceList(mac, password) {

    return request({

        method: 'post',

        url: '/api/admin/device/register',

        headers: {
            Authorization: localStorage.getItem("token")
        },

        data: {
            mac,
            password
        }

    })

}