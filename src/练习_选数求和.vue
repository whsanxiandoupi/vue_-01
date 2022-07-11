<template>
  <div>
    <ul v-for="(obj, index) in arr" :key="index">
      <input type="checkbox" v-model="num" :value="obj" />
      <li>{{ obj }}</li>
    </ul>
    <p>你选中的数组累计和为{{ sum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      num: [],
    };
  },
  computed: {
    sum() {
      let all = 0;
      for (let i = 0; i < this.num.length; i++) {
        all = this.num[i] + all;
      }
      return all;
    },
  },
};
</script>

<style>
li {
  display: inline-block;
}
ul {
  display: inline-block;
}
</style>
