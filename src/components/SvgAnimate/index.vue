<!--
 * @Date: 2022-06-17 20:51:42
 * @LastEditors: lks
 * @LastEditTime: 2022-07-07 14:18:04
-->
<script setup lang="ts">
import { onMounted } from "vue";

const renderSvgDashArray = () => {
    document.querySelector('.svg-animate-container').style.display = 'none'
    let els = document.querySelectorAll('.svg-animate-container svg path')
    for (let item of els) {
        let totoalLength = Math.floor(item.getTotalLength())
        item.style.strokeDasharray = totoalLength + 'px'
        item.style.strokeDashoffset = totoalLength + 'px'
        item.style.animation = 'svg-animate-dashoffset 1.2s forwards 200ms'
    }
    document.querySelector('.svg-animate-container').style.display = ''
}
onMounted(async function () {
    renderSvgDashArray()
})
</script>

<template>
    <div class="svg-animate-container">
        <slot></slot>
    </div>
</template>


<style lang="scss">
@import "./index.scss"
</style>