console.log("js ok");
console.log("vue ok", Vue);

const app = Vue.createApp({
  name: "Email list",
  data() {
    return {
      email: "",
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        this.email = response.data.response;
      });
  },
});

app.mount("#root");
