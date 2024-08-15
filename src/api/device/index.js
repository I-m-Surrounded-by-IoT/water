import request from "@/utils/request";

/* 设备*/

//设备列表
export function getDeviceList() {
  return request({
    method: "get",
    url: "/api/device/list",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}
//详细设备信息
export function detailedDeviceList(id) {
  return request({
    method: "get",
    url: "/api/device/detail",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    params: {
      id,
    },
  });
}

/* 设备管理 */

//注册设备
export function registDeviceList(mac, password) {
  return request({
    method: "post",
    url: "/api/admin/device/register",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    data: {
      mac,
      password,
    },
  });
}

/* 日志 */

//设备日志
export function logDevice() {
  return request({
    method: "get",
    url: "/api/log/device",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    params: {},
  });
}

//我的信息
export function meDeviceList() {
  return request({
    method: "get",
    url: "/api/user/me",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}
