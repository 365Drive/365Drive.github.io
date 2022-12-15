import {useLocation} from "react-router-dom";
const usePath = () => {
  let { pathname } = useLocation();
  // @ts-ignore
  if(pathname.startsWith(localStorage.getItem("DEPLOY_PATH"))) {
    // @ts-ignore
    pathname = pathname.slice(localStorage.getItem("DEPLOY_PATH").length - 1)
  }
  return {pathname};
};
export default usePath;
