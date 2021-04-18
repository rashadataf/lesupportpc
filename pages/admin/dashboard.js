import axios from "axios";

import AdminHome from "../../components/AdminHome/AdminHome";
import Admin from "../../components/Layout/Admin";

export default function AdminIndex({ aboutUs }) {
  return (
    <Admin>
      <AdminHome aboutUs={aboutUs} />
    </Admin>
  );
}

// export async function getServerSideProps(context) {
//   const result = await axios.get("http://localhost:3000/api/admin/about-us");
//   const data = await result.data;
//   if (data.length > 0)
//     return {
//       props: {
//         aboutUs: data[0],
//       },
//     };

//   return {
//     props: {},
//   };
// }
