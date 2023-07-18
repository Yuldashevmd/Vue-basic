import { createStore } from "vuex";
import { api } from "../utils/api";

export const store = createStore({
  state() {
    return {
      count: 0,
      posts: "",
      loading: false,
    };
  },
  mutations: {
    increment(state, n = 1) {
      if (state.count >= 10) {
        return state.count;
      }
      return (state.count += n);
    },
    decrement(state, n = 1) {
      if (state.count <= 0) {
        return state.count;
      }
      state.count -= n;
    },
    getPosts(state, payload) {
      state.posts = payload;
      state.loading = false;
    },
  },
  actions: {
    LoadPosts: async ({ commit,state }) => {
      state.loading = true;
      const res = await api.get("posts", { params: { _limit: 10 } });
      commit("getPosts", res.data);
    },
  },
  getters: {
    posts(state) {
      return state.posts;
    },
  },
});
