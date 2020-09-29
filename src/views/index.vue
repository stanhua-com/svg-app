<template>
  <div class="content home-page">
    <context-menu :target="contextMenuTarget" :show="contextMenuVisible"
      @update:show="(show) => contextMenuVisible = show">
      <div class="context-menu_item" @click="onBack">返回(B)</div>
      <div class="context-menu_item" @click="onReload">重新刷新(R)</div>
    </context-menu>

    <div id="svg"></div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>