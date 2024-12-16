import React, { useEffect } from "react";
import Routing from "./Routes/routing";
import { useDispatch, useSelector } from "react-redux";
import { currentLoader } from "./redux/reducers/loader";
import { setSnackbar, snackObj } from "./redux/reducers/snackbar";
import DesignLoader from "./components/DesignLoader";
import { Alert } from "@mui/material";

function App() {
  const loader = useSelector(currentLoader);
  const snackBar = useSelector(snackObj);
  const dispatch = useDispatch();

  useEffect(() => {
    if (snackBar?.isOpen) {
      setTimeout(() => {
        dispatch(
          setSnackbar({
            ...snackBar,
            isOpen: false,
          })
        );
      }, 2000);
    }
  }, [snackBar?.isOpen]);

  return(
  <>
  {loader && <DesignLoader />}
  {snackBar?.isOpen && (
      <Alert
        icon={false}
        severity={snackBar?.state}
        className="z-[999] fixed left-0 right-0 top-[24px] mx-auto w-full max-w-[382px]"
      >
        {snackBar?.message}
      </Alert>
    )}
  <Routing />;
  </>
  )
}

export default App;
