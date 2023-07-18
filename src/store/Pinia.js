import { createPinia, defineStore } from "pinia";
import { api } from "../utils/api";

export const pinia = createPinia();

export const usePiniaCounter = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    posts: "",
    loading: false,
  }),
  actions: {
    incrPinia(n = 1) {
      if (this.count === 10) {
        return this.count;
      }
      return (this.count += n);
    },
    decrPinia(n = 1) {
      if (this.count <= 0) {
        return this.count;
      }
      return (this.count -= n);
    },
    async LoadPosts() {
      if (this.posts) {
        return null;
      } else {
        this.loading = true;
        const res = await api.get("posts", { params: { _limit: 10 } });
        this.posts = res.data;
        this.loading = false;
      }
    },
  },
});
