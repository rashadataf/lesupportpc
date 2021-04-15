import axios from "axios";

const API = "/api/admin";

const postAboutUs = async (formData) => {
  try {
    const response = await axios.post(`${API}/about-us`, formData);
    return true;
  } catch (error) {
    console.log(error);
  }
};

const getAboutUs = async () => {
  try {
    const result = await axios.get(`${API}/about-us`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

// const updateCategory = async (_id, title, arTitle) => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await axios.put(
//       `${API}/categories/${_id}`,
//       { title, arTitle },
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//     return true;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const deleteCategory = async (_id) => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await axios.delete(`${API}/categories/${_id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return true;
//   } catch (error) {}
// };

const aboutUsServices = {
  getAboutUs,
  postAboutUs,
};

export default aboutUsServices;
