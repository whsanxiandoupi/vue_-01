<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="username" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click.prevent="addFn">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(obj, index) in list" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ obj.name }}</td>
          <td>{{ obj.age }}</td>
          <td>{{ obj.sex }}</td>
          <td>
            <button @click="delFn(index)">删除</button>
            <button @click="editFn(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      age: 0,
      sex: "",
      list: JSON.parse(localStorage.getItem("mlist")) || [],
      editIndex: null, // 保存正在编辑的对象的索引，注意这里的初始值不能为0及0以上的数
    };
  },
  methods: {
    addFn() {
      if (
        this.username.trim().length == 0 ||
        this.age <= 0 ||
        this.sex === ""
      ) {
        alert("不能为空");
        return;
      }
      if (this.editIndex != null) {
        this.$set(this.list, this.editIndex, {
          name: this.username,
          age: this.age,
          sex: this.sex,
        });
        this.username = "";
        this.age = 0;
        this.sex = "";
        this.editIndex = null; // 更新后，保证下次点击是新增效果
      } else {
        this.list.push({
          name: this.username,
          age: this.age,
          sex: this.sex,
        });
      }
    },
    delFn(id) {
      this.list.splice(id, 1);
    },
    editFn(id) {
      this.username = this.list[id].name;
      this.age = this.list[id].age;
      this.sex = this.list[id].sex;

      this.editIndex = id;
    },
  },
  watch: {
    list: {
      handler() {
        localStorage.setItem("mlist", JSON.stringify(this.list));
      },
      deep: true,
    },
  },
};
</script>
