<template>
    <!-- <movie-item :movieList="movies"></movie-item> -->
    <div class="movieContent" v-if="isShow">
      <div v-for="item in movies" :key="item.id" class='moiveItem' @click="bindGoDetail(item.id)">
        <img :src="item.images.small" />
        <div class="movieDesc">
          <span class="title">{{item.title}}</span>
          <span class="grade">{{item.rating.average}}</span>
        </div>
      </div>
    </div>
</template>

<script>
// import movieItem from '@/components/movies-item/index.vue'
import { URI } from '@/utils/movie-api.js'
export default {
    data() {
        return {
            isShow: false,
            page: 1,
            count: 20,
            categery: '',
            movies: {}
        }
    },
    onShow() {
        this.categery = this.$root.$mp.query.categery || 'in_theaters'
        this.getMoviesByCategery(this.categery, this.page, this.count)
    },
    methods: {
        async getMoviesByCategery(categery, page, count){
            const params = { start: (page - 1) * count, count: count, city: '北京' }
            await this.$fetch(URI, categery, params).then( res=> {
                this.movies = [...this.movies, ...res.data.subjects]
                this.isShow = true
            })
        },
        bindGoDetail(id) {
            wx.navigateTo({
                url: "../movie-detail/main?movieId=" + id
            })
        }
    },
    onReachBottom: function () {
        this.page++
        this.getMoviesByCategery(this.categery, this.page, this.count)
    },
    // components: {
    //     movieItem
    // }
}
</script>

<style scoped>
.movieContent {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  /* justify-content: space-around; */
}

.moiveItem {
  display: inline-block;
  width: 200rpx;
  height: 380rpx;
  margin: 18rpx 24rpx;
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
  span-overflow: ellipsis;
  white-space: nowrap;
}
.movieDesc .grade {
  font-size: 26rpx;
  color: #f89606;
}
</style>


