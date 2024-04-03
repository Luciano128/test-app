import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import {
  DefCredential,
  IUser,
  IUserCredential,
  UserList,
} from "../Models/User";
import { Maincontext } from "../Contexts/MainContext";

export interface ILoginForm {
  open: boolean;
  onClose: () => void;
}

export default function LoginForm(props: ILoginForm) {
  const [credential, setcredential] = useState<IUserCredential>(DefCredential);
  const [userNameError, setUserNameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const context = useContext(Maincontext);

  useEffect(() => {
    ResetErrors();
    setcredential(DefCredential);
  }, [props.open]);

  useEffect(() => {
    ResetErrors();
  }, [credential]);

  const ResetErrors = () => {
    setUserNameError("");
    setPasswordError("");
  };

  const IsValid = () => {
    let valid: boolean = true;
    if (credential.userName === "") {
      setUserNameError("Il nome utente è obbligatorio");
      valid = false;
    }
    if (credential.password === "") {
      setPasswordError("La password è obbligatoria");
      valid = false;
    }

    return valid;
  };

  const onLogin = () => {
    if (IsValid()) {
      console.log(UserList);
      console.log(credential);
      const user = UserList.find(
        (x) =>
          x.userName === credential.userName &&
          x.password === credential.password
      );

      if (user) {
        context.setContext({ ...context, user: user });
        props.onClose();
      } else {
        setUserNameError("Utente o password errati");
      }
    }
  };

  return (
    <Dialog open={props.open} maxWidth="xs">
      <DialogTitle>
        <Grid item xs={12} marginTop={1}>
          <Typography variant="h5">Login</Typography>{" "}
        </Grid>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} sx={{ paddingTop: "8px" }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Utente"
              value={credential.userName}
              error={userNameError !== ""}
              helperText={userNameError}
              onChange={(event) =>
                setcredential({ ...credential, userName: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              fullWidth
              label="Password"
              value={credential.password}
              error={passwordError !== ""}
              helperText={passwordError}
              onChange={(event) =>
                setcredential({ ...credential, password: event.target.value })
              }
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ paddingRight: "12px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => onLogin()}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => setcredential(DefCredential)}
            >
              Reset
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={() => props.onClose()}
            >
              Annulla
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
