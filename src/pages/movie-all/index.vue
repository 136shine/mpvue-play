<template>
    <movie-list :movieList="movies"></movie-list>
</template>

<script>
import movieList from '@/components/movie-list'
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
                console.log('res=>', res)
                this.inTheatersData = res.data
            })
        }
    },
    onReachBottom: function () {
        this.page++
        this.getMoviesByCategery(this.categery, this.page, this.count)
    },
    components: {
        movieList
    }
}
</script>

