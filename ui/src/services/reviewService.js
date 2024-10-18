const API_BASE_URI = process.env.REACT_APP_DEVCAMPER_BASE_API_URI;

const reviewService = {
  getReviewsByBootcamp: async (bootcampId) => {
    const res = await fetch(`${API_BASE_URI}/bootcamps/${bootcampId}/reviews`);
    if (!res.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return res.json();
  },

  getReviews: async () => {
    const res = await fetch(`${API_BASE_URI}/reviews`);
    if (!res.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return res.json();
  },

  getReview: async (id) => {
    const res = await fetch(`${API_BASE_URI}/reviews/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch review');
    }
    return res.json();
  },

  createReview: async (review) => {
    const res = await fetch(`${API_BASE_URI}/reviews`, {
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
    const res = await fetch(`${API_BASE_URI}/reviews/${id}`, {
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
    const res = await fetch(`${API_BASE_URI}/reviews/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete review');
    }
    return res.json();
  },
};

export default reviewService;
