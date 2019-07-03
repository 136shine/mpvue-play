<template>
  <div class="modivrap">
    <div class="titleHeader">
      <span class="movieTypeName">{{movies.title}}</span>
      <span class="movieMore" @click="bindLoadMore">更多</span>
    </div>
     <div class="movieContent">
        <div v-for="item in movies.subjects" :key="item.title" class='moiveItem' @click="bindGoDetail(item.id)">
            <img :src="item.images.small" />
            <div class="movieDesc">
            <span class="title">{{item.title}}</span>
            <span class="grade">{{item.rating.average}}</span>
            </div>
        </div>
    </div>
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
        let category = this.movies.title.split('-')[0]
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
      },
      bindGoDetail(id) {
        console.log('movieId=>', id)
        wx.navigateTo({
          url: "../movie-detail/main?movieId=" + id
        })
      }
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

.movieContent {
  width: 100%;
  overflow: hidden;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: space-around;
}
.moiveItem {
  display: inline-block;
  width: 200rpx;
  height: 390rpx;
}
.moiveItem image {
  display: inline-block;
  width: 100%;
  height: 300rpx;
}
.moiveItem .movieDesc {
  display: block;
  width: 100%;
  overflow: hidden;
  /* background-color: #faf9f9; */
  margin: 0px;
  padding: 0px;
}
.movieDesc .title {
  display: block;
   width:100%;
  font-size: 24rpx;
  line-height: 24rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.movieDesc .grade {
  font-size: 26rpx;
  color: #f89606;
}
</style>

