import request from "@/utils/request";

/* 数据收集 */

//数据列表
export function deteList(deviceId, page = 1, size = 20) {
  return request({
    method: "get",
    url: "/api/collection/records/device",
    params: {
      deviceId,
      page,
      size,
    },
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}
//立即上报
export function reportNow(deviceId) {
  return request({
    method: "get",
    url: "/api/collection/report_now",
    params: {
      deviceId,
    },
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}
//控制小船
export function takeBoat(deviceId, command) {
  return request({
    method: "get",
    url: "/api/collection/boat_control",
    params: {
      deviceId,
      command,
    },
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}
//控制小船
export function takeBoatForword(deviceId) {
  return takeBoat(deviceId, 0);
}
export function takeBoatLeft(deviceId) {
  return takeBoat(deviceId, 1);
}
export function takeBoatRight(deviceId) {
  return takeBoat(deviceId, 2);
}

//控制小船
export function getDetail(deviceId) {
  return request({
    method: "get",
    url: "/api/device/detail",
    params: {
      id: deviceId,
    },
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}
