<template>
    <movie-item :movieList="movies"></movie-item>
</template>

<script>
import movieItem from '@/components/movie-item/index.vue'
import { URI } from '@/utils/movie-api.js'
export default {
    data() {
        return {
            page: 1,
            count: 20,
            categery: '',
            movies: {}
        }
    },
    onShow() {
        this.categery = this.$root.$mp.query.categery
        this.getMoviesByCategery(this.categery, this.page, this.count)
    },
    methods: {
        async getMoviesByCategery(categery){
            const params = { start: (page - 1) * count, count: count, city: '北京' }
            await this.$fetch(URI, categery, params).then( res=> {
                console.log('getMoviesByCategery---res=>', res)
                this.movies = res.data
            })
        }
    },
    onReachBottom: function () {
        this.page++
        this.getMoviesByCategery(this.categery, this.page, this.count)
    },
    components: {
        movieItem
    }
}
</script>

