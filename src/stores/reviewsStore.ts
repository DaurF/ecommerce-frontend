import { defineStore } from 'pinia'

const useReviewsStore = defineStore('ReviewsStore', {
  state: () => ({
    reviews: [] as any[]
  }),
  getters: {
    allReviews: (state) => state.reviews
  },
  actions: {
    setReviews(reviews: any[]) {
      this.reviews = reviews
    },
    addReview(review: any) {
      this.reviews.push(review)
    }
  }
})

export default useReviewsStore
