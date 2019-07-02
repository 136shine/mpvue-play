<template>
  <div class="modivrap">
    <div class="titleHeader">
      <span class="movieTypeName">{{movies.title}}</span>
      <span class="movieMore" @click="bindLoadMore">更多</span>
    </div>
    <movie-list :movieList="movies.subjects"></movie-list>
  </div>
</template> 

<script>
import movieList from '../movie-list/index.vue'
export default {
    data() {},
    props: {
        movies: {}
    },
    // onShow() {
    //   console.log('-onShow--movies----')
    // },
    methods: {
      bindLoadMore() {
        let category = movies.title.split('-')[0]
        let _category = ''
        
        switch (category) {
          case "即将上映的电影": {
            _category = 'coming_soon';
            break;
          }
          case "豆瓣电影Top250": {
            _category = 'top250';
            break;
          }
          default: {
            _category = 'in_theaters';
            break;
          }
        }
    
        wx.navigateTo({
          url: "/pages/movie-all/main?category=" + _category
        })
      }
      // bindGoDetail(id) {
      //   console.log('movieId=>', id)
      //   wx.navigateTo({
      //     url: "../movie-detail/main?movieId=" + id
      //   })
      // }
    }
}
</script>

<style scoped>
    
.movieWrap {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  background-color: #fff;
  padding-bottom: 8rpx;
  margin-bottom: 26rpx;
}
.titleHeader {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  height: 60rpx;
  line-height: 60rpx;
  padding: 0rpx 24rpx;
}
.titleHeader .movieTypeName {
  width: 50%;
  display: inline-block;
  font-size: 22rpx;
}
.titleHeader .movieMore {
  width: 50%;
  text-align: right;
  display: inline-block;
  font-size: 24rpx;
  color: #263275;
}
</style>

