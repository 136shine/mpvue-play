<template>
    <div class='modivrap' v-if="isShow">
        <img class='movieCover' :src="movieItem.images.medium" />
        <div class='mainDesc'>
            <span class='title'>{{movieItem.title}}</span>
            <span class='date'>{{movieItem.pubdate}}</span>
            <span class='type'>{{movieItem.genres}}</span>
            <span class='directors'>导演：{{movieItem.directors[0].name}}</span>
        </div>
        <div class='biaoshi'>
            <span class='txt'>电</span>
            <span class='txt'>影</span>
        </div>
        <div class='movieTxt'>
            <span class='summary'>简介</span>
            <span class='txt'>{{movieItem.summary}}</span>
        </div>
    </div>
</template>

<script>
import { URI } from '@/utils/movie-api.js'
export default {
    data() {
        return {
          isShow: false,
          movieItem: {}
        }
    },
    onLoad() {
        console.log('onLoad....')
    },
    onShow(options) {
        console.log('onShow....')
        const movieId = this.$root.$mp.query.movieId
        console.log('movieId=>>', movieId)
        this.isShow = false
        this.getDetail(movieId)
    },
    // onHide() {
    //     console.log('onHide....')
    //     this.movieItem = {}
    //     this.isShow = false
    // },
    onUnload() {
        console.log('onUnload....')
        // this.movieItem = {}
        // this.isShow = false
    },
    methods: {
        getDetail(id) {
            this.$fetch(URI, 'subject/' + id).then(res=>{
                console.log('detail_res=>', res)
                res = res.data
                res.genres = res.genres.join(' ')
                this.movieItem = Object.assign({}, res)
                this.isShow = true
                console.log('this.movieItem=>', this.movieItem)
            })
        }
    }
}
</script>


<style scoped>
.movieWrap {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background: #fff;
}
.movieCover {
  margin-top: 5px;
  width: 100%;
  height: 240px;
  overflow: hidden;
}
.biaoshi {
  position: absolute;
  top: 190px;
  right: 15px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-content: center;
  color: rgb(102, 100, 100);
  background: #fff;
  width: 45px;
}
.biaoshi span.txt {
  padding: 8px 0px;
  text-align: center
}
/* .biaoshi span:first-child {
  text-align: right;
  position: relative;
  top: 12px;
}
.biaoshi span:last-child {
  text-align: left;
} */
.mainDesc {
  width: 100%;
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
}
.mainDesc span {
  font-size: 16px;
}
.mainDesc .title {
  font-size: 18px;
  font-weight: bold;
  padding: 6px 0px;
}


.movieTxt {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 125px;
  font-size: 13px;
  padding: 8px;
  box-sizing: border-box;
}
.movieTxt .summary {
  font-size: 16px;
  font-weight: bold;
}
.movieTxt .txt {
  text-indent: 2em;
}
</style>

