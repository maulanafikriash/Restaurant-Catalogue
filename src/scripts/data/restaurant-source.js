import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(`Error fetching restaurant list: ${error}`);
      throw error;
    }
  }

  static async detail(id) {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(`Error fetching restaurant detail: ${error}`);
      throw error;
    }
  }

  static async formReview(review) {
    if (review.review) {
      if (!review.name) {
        // eslint-disable-next-line no-param-reassign
        review.name = 'Anonymous';
      }
      const response = await fetch(API_ENDPOINT.FORM_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // eslint-disable-next-line no-undef
        body: JSON.stringify(review),
      });
      const responseJson = await response.json();
      return responseJson;
    }
    return null;
  }
}

export default RestaurantSource;
