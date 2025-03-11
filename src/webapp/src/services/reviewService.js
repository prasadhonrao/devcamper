import { fetchApiEndPoint } from '../utils/configService';

const reviewService = {
  getReviewsByBootcamp: async (bootcampId) => {
    const uri = await fetchApiEndPoint(`/bootcamps/${bootcampId}/reviews`);
    const res = await fetch(uri);
    if (!res.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return res.json();
  },

  getReviews: async () => {
    const uri = await fetchApiEndPoint(`/reviews`);
    const res = await fetch(uri);
    if (!res.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return res.json();
  },

  getReview: async (id) => {
    const uri = await fetchApiEndPoint(`/reviews/${id}`);
    const res = await fetch(uri);
    if (!res.ok) {
      throw new Error('Failed to fetch review');
    }
    return res.json();
  },

  createReview: async (review) => {
    const uri = await fetchApiEndPoint(`/reviews`);
    const res = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    if (!res.ok) {
      throw new Error('Failed to create review');
    }
    return res.json();
  },

  updateReview: async (id, review) => {
    const uri = await fetchApiEndPoint(`/reviews/${id}`);
    const res = await fetch(uri, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    if (!res.ok) {
      throw new Error('Failed to update review');
    }
    return res.json();
  },

  deleteReview: async (id) => {
    const uri = await fetchApiEndPoint(`/reviews/${id}`);
    const res = await fetch(uri, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete review');
    }
    return res.json();
  },
};

export default reviewService;
