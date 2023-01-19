console.log("js ok");
console.log("vue ok", Vue);

const app = Vue.createApp({
  name: "Email list",
  data() {
    return {
      emails: [],
    };
  },
  methods: {
    getRandomMail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.emails.push(response.data.response);
        });
    },
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.getRandomMail();
    }
  },
});

app.mount("#root");
