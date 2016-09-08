<template>

    <div>
        <span>{{ indexMsg }}</span>
        <button @click='changeData'>点我看看</button>
    </div>

</template>


<script>

    import Actions from 'Vuex/actions';
    import Getters from 'Vuex/getters';

    export default {
        vuex: {
            actions: {
                changeData: Actions.changeData
            },
            getters: {
                indexMsg: Getters.getIndexMsg
            }
        }
    };

</script>


<style scoped>
    div {
        height: 100%;
        width: 100%;
        background: green;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 70px;
        color: #fff;
        flex-direction: column;
    }

    button {
        width: 30%;
        height: 60px;
        margin-top: 60px;
        background: #fff;
        font-size: 36px;
        border-radius: 20px;
        border: 1px solid #fff;
        cursor: pointer;
    }

    span {
        text-align: center;
    }

</style>
