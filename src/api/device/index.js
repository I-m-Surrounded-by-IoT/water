import request from '@/utils/request'
//立即上报
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
//设备列表
export function getDeviceList() {
    return request({
        method: 'get',
        url: '/api/device/list',
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}
//添加设备
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
//我的信息
export function meDeviceList() {
    return request({
        method: 'get',
        url: '/api/user/me',
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}

export function recordsDeviceList(device_id) {
    return request({
        method: 'get',
        url: '/api/collection/records/device',
        params: {
            device_id
        },
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}