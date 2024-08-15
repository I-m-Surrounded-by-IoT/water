import request from "@/utils/request";

/* 用户 */

//登录
export function login(username = "admin1", password = "admin2") {
  return request({
    method: "post",
    url: "/api/user/login",
    data: {
      username,
      password,
    },
  });
}
//我的信息
export function meInformation() {
  return request({
    method: "get",
    url: "/api/user/me",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    params: {},
  });
}

/* 用户管理 */

//创建用户
export function createUser(username, password, isAdmin = true) {
  return request({
    method: "post",
    url: "/api/admin/user/create",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    data: {
      username,
      password,
      role: isAdmin ? 1 : 0,
    },
  });
}
//用户列表
export function userList(username) {
  return request({
    method: "get",
    url: "/api/admin/user/list",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    params: {
      username,
    },
  });
}
