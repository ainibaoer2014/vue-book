<template>
    <div class="header">
      {{title}}
    </div>
</template>
<style scoped>
   .header{
     background-color: #444;
     height: 40px;
     line-height:40px;
     text-align: center;
     color: #fff;
   }
</style>
<script>
    export default {
      props:['title'],
        data() {
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
