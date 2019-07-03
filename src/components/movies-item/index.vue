<template>
    <div class="movieContent">
        <div v-for="item in movieList.subjects" :key="item.title" class='moiveItem' @click="bindGoDetail(item.id)">
            <img :src="item.images.small" />
            <div class="movieDesc">
            <span class="title">{{item.title}}</span>
            <span class="grade">{{item.rating.average}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        movieList: []
    },
    methods: {
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


