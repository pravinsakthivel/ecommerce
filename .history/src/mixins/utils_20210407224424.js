export default {

  methods: {
    async doGet(url) {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    },
  },
};
