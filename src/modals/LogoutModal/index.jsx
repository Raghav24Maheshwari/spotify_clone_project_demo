import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export default function LogoutDialog({openDialogBox,setOpenDialogBox}) {
  const { t } = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpenDialogBox(false);
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login'
    handleClose();
    // window.location.reload();
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={openDialogBox}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        {t("dialogBox.areYouSureYouWantToLogout")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {t("dialogBox.loginDialogMessage")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
          {t("dialogBox.cancel")}
          </Button>
          <Button onClick={handleLogout} autoFocus>
          {t("dialogBox.ok")}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
