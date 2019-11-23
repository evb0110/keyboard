<template>
    <div class="app-button">
        <input ref="input" type="text" v-model="value">
        <button @click="onClick">{{letter}}</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {

        private value: string = '';
        private inputDiv!: HTMLInputElement;

        @Prop({default: 'a'})
        private letter!: string;

        private onClick(): void {
            const selectionStart: number = this.inputDiv.selectionStart || 0;
            const selectionEnd: number = this.inputDiv.selectionEnd || selectionStart;
            console.log(selectionStart, selectionEnd);
            this.value = this.value.slice(0, selectionStart) + this.letter + this.value.slice(selectionEnd, this.value.length);
            this.inputDiv.focus();
            setTimeout(() => this.inputDiv.setSelectionRange(selectionStart + this.letter.length, selectionStart + this.letter.length), 0)
            ;
        }

        private mounted(): void {
            this.$nextTick(() => {
               this.inputDiv = this.$refs.input as HTMLInputElement;
            });
        }
    }
</script>

<style scoped lang="less">
    .app-button {
        & * {
            font-size: 2rem;
        }
        & button {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }

</style>