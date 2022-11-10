import { makeStyles } from "@mui/styles";
import config from "../app/config";

const useGlobal = makeStyles(() => ({
  '@global': {
    body: {
      backgroundColor: config.layout.bgcolor,
      color: '#333',
      font: '14px/16px Helvetica,Arial,sans-serif',
      fontSize: '14px'
    }
  }
}));

export default useGlobal;