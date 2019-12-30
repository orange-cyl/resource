<template>
  <span class="_fileicon" :style="'background:'+(fa=='fa-file-word-o'?'#2C5DA4':'#F8240D')">
    <i :class="'fa '+fa"></i>
  </span>
</template>
<script>
export default {
  props:['fa'],
}
</script>
<style scope>
  ._fileicon{
    color: white;
    display: inline-block;
    line-height: 20px;
    width:20px;
    text-align: center;
    border-radius: 3px;
    padding-bottom:1px !important;
  }
</style>
