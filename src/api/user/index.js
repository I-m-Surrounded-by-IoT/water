import request from "@/utils/request";

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
export function userList() {
  return request({
    method: "get",
    url: "/api/admin/user/list",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    params: {},
  });
}
