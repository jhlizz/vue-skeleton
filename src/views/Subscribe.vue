<template>

    <div>{{ msg }}</div>

</template>


<script>
    export default {
        data () {
            return {
                msg: '这是订阅的页面！'
            }
        }
    }
</script>


<style scoped>
    div {
        height: 100%;
        width: 100%;
        background: blue;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 70px;
        color: #fff;
    }
</style>
