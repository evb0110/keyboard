<template>
    <div id="app">
        <h2>Simple button input</h2>
        <app-button letter="b"></app-button>
        <hr />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
    }
</script>

<style lang="less">

</style>
