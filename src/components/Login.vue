<template >
<div>
  <div >
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
  </div>
<div class="btn-container">
  <mt-button  @click='showLoginInfo' type="primary" size="large">登录</mt-button>
</div>
</div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    isLogin () {
      if (sessionStorage.getItem('phone') && sessionStorage.getItem('password')) {
        this.$router.push('/hello')
      }
    },
    showLoginInfo () {
      // this.$toast('Hello world!')
      console.log('Input user:' + this.phone + ', ' + this.password)
      sessionStorage.setItem('phone', this.phone)
      sessionStorage.setItem('password', this.password)
      this.$router.push('/hello')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn-container {
  /* width: 100%; */
  position: absolute;
  right: 0;
  left: 0;
  bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
