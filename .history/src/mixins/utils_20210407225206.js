export default {

  methods: {
     doGet(url) {
      return fetch(url).then(response => response.json()).then(data=>data);
    },
  },
};
