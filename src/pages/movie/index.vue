<template>
  <div class="movieContainer">
    <div class="searchBox">
        <input class="searchInput" type="text" v-model="searchVal" @click="bindKeyInput" placeholder="输入电影名" />
        <img class="searchBtn" src="/static/images/search.png" @click="bindSearchMovie" />
    </div>
    <div>
        <movie-temp :movies="inTheatersData"></movie-temp>
    </div>
    <div>
        <movie-temp :movies="comingSoonData"></movie-temp>
    </div>
     <div>
        <movie-temp :movies="top250Data"></movie-temp>
    </div>
  </div>
</template>

<script>
import movieTemp from '@/components/movie-temp/index.vue'
import mpButton from 'mpvue-weui/src/button'
import { URI } from '@/utils/movie-api.js'

export default {
  data () {
    return {
      searchVal: '',
      inTheatersData: {},
      comingSoonData: {},
      top250Data: {}
    }
  },
  onShow() {
    this.getData()
  },
  components: {
    mpButton, 
    movieTemp
  },
  methods: {
    async getData() {
      const page = 1
      const count = 3
      const params = { start: (page - 1) * count, count: count, city: '北京' }
      await this.$fetch(URI, 'in_theaters', params).then( res=> {
        console.log('res=>', res)
        this.inTheatersData = res.data
        console.log('this.inTheatersData=>', this.inTheatersData)
      })
      await this.$fetch(URI, 'top250', params).then( res => {
        this.top250Data = res.data
         console.log('this.top250Data=>', this.top250Data)
      })
      await this.$fetch(URI, 'coming_soon', params).then(res => {
        this.comingSoonData = res.data
      })
    },
    // findByType (type, page, count) {
    //     const params = { start: (page - 1) * count, count: count, city: '北京' }
    //     return this.$fetch(URI, type, params)
    // },
    bindSearchMovie () {
      console.log('kkk', this, this.searchVal)
    },
    bindKeyInput (e) {
      console.log('e=>', e, this.searchVal)
    }
  }
}
</script>

<style scoped>
/* @import "movie-temp/movie-temp.wxss"; */
.movieContainer {
  height: 100%;
  background-color: #f1f0f0;
}
.searchBox {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  position: relative;
  padding: 0rpx 10rpx;
  border-bottom: 1px solid #ccc;
}
.searchInput {
  position: absolute;
  display: inline-block;
  width: 76%;
  height: 100%;
  left: 26rpx;
  font-size: 28rpx;
  /* text-indent: 26rpx; */
}
.searchBtn {
  position: absolute;
  display: inline-block;
  width: 38rpx;
  height: 38rpx;
  vertical-align: middle;
  right: 26rpx;
  top: 34rpx;
}

</style>
