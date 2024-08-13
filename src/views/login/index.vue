<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-wrapped">
        <div class="header-content">
          <h3>水界守护系统</h3>
          <span class="welcome">欢迎您的登录</span>
        </div>
      </el-header>
      <el-main>
        <div class="login-wrapped">
          <el-card class="box-card">
            <el-tabs v-model="activeName" class="demo-tabs" :stretch="true">
              <el-tab-pane label="登录" name="first"
                ><el-form class="login-form">
                  <el-form-item label="账号">
                    <el-input
                      v-model="loginData.account"
                      placeholder="请输入账号"
                    />
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input
                      v-model="loginData.password"
                      placeholder="请输入密码"
                      show-password
                    />
                  </el-form-item>
                  <div class="footer-wrapped">
                    <div class="forget-password">
                      <span class="forget-password-button" @click="openForget"
                        >忘记密码</span
                      >
                    </div>
                    <div class="footer-button">
                      <el-button type="primary"
                        ><router-link to="/menu" class="custom-link"
                          >登录</router-link
                        ></el-button
                      >
                    </div>
                    <div class="footer-go-register">
                      还没有账号？<span class="go-register">马上注册</span>
                    </div>
                  </div>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="注册" name="second"
                ><el-form class="login-form">
                  <el-form-item label="账号">
                    <el-input
                      v-model="registerData.account"
                      placeholder="账号长度6-12位"
                    />
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input
                      v-model="registerData.password"
                      placeholder="密码需长度6-12位含字母数字"
                    />
                  </el-form-item>
                  <el-form-item label="确认密码">
                    <el-input
                      v-model="registerData.rePassword"
                      placeholder="请再次输入密码"
                    />
                  </el-form-item>
                  <div class="footer-button">
                    <el-button type="primary">注册</el-button>
                  </div>
                </el-form></el-tab-pane
              >
            </el-tabs>
          </el-card>
        </div>
      </el-main>
      <el-footer class="footer-wrapped">
        <div class="footer-content">
          <div class="title"><span>羊羊</span> |<span>全栈工程师</span></div>
        </div>
      </el-footer>
    </el-container>
  </div>
  <forget ref="forgets"></forget>
</template>

<script setup>
import { ref, reactive } from "vue";
import forget from "@/views/login/components/forge_password.vue";

const activeName = ref("first");

const loginData = reactive({
  account: null,
  password: "",
});
const registerData = reactive({
  account: null,
  password: "",
  rePassword: "",
});

const forgets = ref();

const openForget = () => {
  forgets.value.open();
};
</script>

<style scoped>
.header-wrapped {
  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .welcome {
      font-size: 13px;
    }
  }
}
.el-main {
  background-image: url("@/assets/images/001.jpg");
  height: 600px;
  --el-main-padding: 0;

  .login-wrapped {
    width: 1200px;
    height: 600px;
    margin: 0 auto;

    .box-card {
      width: 350px;
      height: 375px;
      float: right;
      position: relative;
      top: 14%;

      .login-form {
        .footer-wrapped {
          display: flex;
          flex-direction: column;

          .forget-password {
            display: flex;
            justify-content: flex-end;
            margin: 10px 0;

            .forget-password-button {
              font-size: 12px;
              color: #409eff;
              cursor: pointer;
            }
          }

          .footer-go-register {
            font-size: 12px;
            margin: 12px 0;
            display: flex;
            justify-content: center;

            .go-register {
              font-size: 12px;
              color: #409eff;
              cursor: pointer;
            }
          }
        }

        .footer-button {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
.footer-wrapped {
  margin-top: 10px;

  .footer-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      color: #666;
    }

    span {
      color: #666;
      font-size: 12px;
    }
  }
}
.el-form {
  margin-top: 30px;
}
:deep(.el-tabs__item) {
  color: #333;
  font-size: 18px;
}
:deep(.el-input__inner) {
  height: 40px;
}
:deep(.el-form-item__label) {
  height: 40px;
  line-height: 40px;
}
:deep(.el-button) {
  width: 300px;
  height: 45px;
  font-size: 16px;
}
.custom-link {
  text-decoration: none;
  color: #fff;
}
</style>
