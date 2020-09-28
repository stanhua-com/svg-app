<template>
  <div class="content home-page">
    <context-menu :target="contextMenuTarget" :show="contextMenuVisible"
      @update:show="(show) => contextMenuVisible = show">
      <div class="context-menu_item">返回(B)</div>
      <div class="context-menu_item">重新刷新(R)</div>
      <div class="context-menu_item">检查(N)</div>
    </context-menu>

    <div id="svg"></div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>