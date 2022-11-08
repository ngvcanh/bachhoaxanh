import { makeStyles } from "@mui/styles";
import config from "../app/config";

const useGlobal = makeStyles(() => ({
  '@global': {
    body: {
      backgroundColor: config.layout.bgcolor,
      color: '#333',
      font: '14px/18px Helvetica,Arial,sans-serif'
    }
  }
}));

export default useGlobal;