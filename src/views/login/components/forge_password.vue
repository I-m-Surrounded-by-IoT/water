<template>
  <el-dialog v-model="state.forgetPasswordDialog" title="忘记密码" width="30%"
    ><el-form class="login-form" :label-position="labelPosition" :rules="rules">
      <el-form-item label="输入您的注册账号" prop="account">
        <el-input v-model="loginData.account" placeholder="输入您的注册账号" />
      </el-form-item>
      <el-form-item label="输入您的个人邮箱" prop="email">
        <el-input v-model="loginData.email" placeholder="输入您的个人邮箱" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.forgetPasswordDialog = false">取消</el-button>
        <el-button type="primary" @click="openChangePassword">
          下一步
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="state.changePasswordDialog" title="修改密码" width="30%"
    ><el-form class="login-form" :label-position="labelPosition" :rules="rules">
      <el-form-item label="输入您的新密码" prop="password">
        <el-input v-model="loginData.password" placeholder="输入您的新密码" />
      </el-form-item>
      <el-form-item label="再次确认您的新密码" prop="repassword">
        <el-input
          v-model="loginData.repassword"
          placeholder="再次确认您的新密码"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.changePasswordDialog = false">取消</el-button>
        <el-button type="primary" @click="state.changePasswordDialog = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from "vue";

const labelPosition = ref("top");

const loginData = reactive({
  account: null,
  email: "",
  password: "",
  repassword: "",
});
const rules = reactive({
  account: [{ required: true, message: "请输入您的注册账号", trigger: "blur" }],
  email: [{ required: true, message: "请输入您的注册邮箱", trigger: "blur" }],
  password: [{ required: true, message: "输入您的新密码", trigger: "blur" }],
  repassword: [
    { required: true, message: "再次确认您的新密码", trigger: "blur" },
  ],
});
const state = reactive({
  forgetPasswordDialog: false,
  changePasswordDialog: false,
});
const openChangePassword = () => {
  (state.forgetPasswordDialog = false), (state.changePasswordDialog = true);
};
const open = () => {
  state.forgetPasswordDialog = true;
};
defineExpose({
  open,
});
</script>

<style scoped></style>
