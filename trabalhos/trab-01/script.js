new Vue({
    el: "#app",
    data: {
      todos: [
        { text: "Learn JavaScript", done: false },
        { text: "Learn Vue", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
      ]
    },
    methods: {
        toggle: function(todo){
          todo.done = !todo.done
      }
    }
  })