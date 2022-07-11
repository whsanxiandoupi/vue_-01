<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ msg | reverse("|") }}</p>
    <p :title="msg2 | toUpper | reverse('o')">鼠标长停</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "张韶涵_孙燕姿",
      msg2: "Lakers",
    };
  },
  filters: {
    toUpper(val) {
      return val.toUpperCase();
    },
  },
};
</script>

<style></style>
