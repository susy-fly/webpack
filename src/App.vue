<template>
    <div id="app">
        <span>{{msg}}</span>
        <p class="test">Test Text</p>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            msg: 'Vue Webpack'
        }
    }
}
</script>

<style scoped lang='less'>
    #app{
        .test{
            color: red
        }
    }
</style>

