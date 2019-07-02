<template>
  <div class="wrap">
    <div class="userinfo">
      Hello, movie 
    </div>

    <!-- <mp-button type="default" size="normal" btnClass="mb15" @click="handleGoMovie">welcome</mp-button> -->
    <button type="default" @click="handleGoMovie">welcome to movie</button>
    <!-- <button @click="handleGoMovie">welcome to movie</button> -->
  </div>
</template>

<script>
// import mpButton from 'mpvue-weui/src/button'
export default {
  data () {
    return {}
  },
  // components: {
  //   mpButton
  // },
  methods: {
    handleGoMovie (e) {
      console.log('handleGoMovie:', e, wx)
      wx.switchTab({url: '/pages/movie/main'})
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200rpx;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}


</style>
