import axios from "axios";

const API_URL = "http://localhost:3000/tweet"; // Backend 3000’de çalışıyor

export const getTweetsByUser = async (userId) => {
  try {
    const response = await axios.get(
      `${API_URL}/findByUserId?userId=${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Tweetleri çekerken hata oluştu:", error);
    return [];
  }
};
