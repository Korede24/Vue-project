<template lang="">
    <div>
        <button @click="increase">plus</button>
        <button @click="decrease">minus</button>
        <h1>Count: {{ count }}</h1>
        <p>This is Composition API Component</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const count = ref(0)
function increase() {
    count.value++;
    
}
function decrease() {
    count.value--;
    
}
</script>
<style lang="">
    
</style>