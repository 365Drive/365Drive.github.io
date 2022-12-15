let back_end_address = import.meta.env.VITE_SERVER_URL as string;
if (back_end_address === "/") {
  // back_end_address = window.location.origin + "/";
  // @ts-ignore
  back_end_address =  localStorage.getItem("API_SERVER")
}
export const host = back_end_address;
