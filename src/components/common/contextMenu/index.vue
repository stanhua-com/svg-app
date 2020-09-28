<template>
  <div v-if="show" class="context-menu" :style="style" @mousedown.stop @contextmenu.prevent>
    <slot></slot>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>