<template>
  <form @submit.prevent="submitForm" v-if="!formSubmitted" class="footer">
    <input
      type="text"
      placeholder="username"
      id="username"
      v-model="username"
    />
    <input
      type="password"
      placeholder="password"
      id="password"
      v-model="password"
    />
    <input
      type="submit"
      value="Login"
      class="submit"
      @click="login(username, password)"
    />
  </form>

  <div v-if="formSubmitted">
    <h3>Form Submitted</h3>
    <p>username: {{ username }}</p>
    <p>password: {{ password }}</p>
    <table>
      <tr v-for="(item, index) in information" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.color }}</td>
        <td>{{ item.year }}</td>
        <td>{{ item.pantone_value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
let information = [];
export default {
  data() {
    return {
      username: "eve.holt@reqres.in",
      password: "cityslicka",
      information: [],
      formSubmitted: false,
    };
  },
  methods: {
    submitForm: async function () {
      console.log("submitForm");
      await axios
        .get("https://reqres.in/api/login", {
          params: {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
          },
        })
        .then((res) => {
          this.information = res.data.data;
          console.log(information);
          this.formSubmitted = true;
        })
        .catch((res) => {
          console.error(res);
        });
    },
  },
};
</script>

<style>
.footer {
  margin: 20px 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.submit {
  background-color: dodgerblue;
  color: white;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin: 3px;
  border: 0px;
}

#username,
#password {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin: 3px;
  border: 0px;
  background-color: lightgray;
}
</style>