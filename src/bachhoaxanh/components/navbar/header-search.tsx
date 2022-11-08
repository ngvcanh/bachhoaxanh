import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "src/store";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";

export default function HeaderSearch(){

  const router = useRouter();

  const [ position, setPosition ] = useState(0);
  const [ focus, setFocus ] = useState(false);
  const [ keyword, setKeyword ] = useState(router.query.keyword ?? '');
  const [ open, setOpen ] = useState(false);

  const placeholders = useSelector(state => state.layout.navbar.searchMessage);

  const box = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setInterval>>();

  const newPosition = (): number => {
    const newValue = +Math.random().toString().substring(2, 3);
    if (newValue !== position && newValue < placeholders.length) return newValue;
    return newPosition();
  }

  useEffect(() => {
    focus ?
      input.current?.focus() :
      input.current?.blur();
  }, [ focus ]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setPosition(newPosition());
    }, 2500);

    return () => {
      timer.current && clearInterval(timer.current);
    }
  }, []);

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key !== 'Enter' || keyword === '') return;

    e.preventDefault();
    router.push(`/bhx-home/?keyword=${ keyword }`);
  }

  return <>
    <Box
      ref={ box }
      sx={{
        flexGrow: 1,
        width: '100%',
        ml: 3,
        bgcolor: '#fff',
        borderRadius: '4px',
        height: '35px'
      }}
    >
      <Input
        fullWidth
        disableUnderline
        placeholder={ placeholders[position] }
        ref={ input }
        value={ keyword }
        onChange={ e => setKeyword(e.target.value) }
        onKeyUp={ onKeyUp }
        onFocus={ () => setOpen(true) }
        sx={{
          height: '100%',
          px: '8px',
          fontSize: '13px'
        }}
      />
    </Box>
    <Popper
      open={ open }
      placement="left-start"
      anchorEl={ box.current }
      transition
    >
      {({ TransitionProps }) => (
        <Fade 
          { ...TransitionProps }
          timeout={ 400 }
        >
          <Paper>
            <Box>Popper</Box>
          </Paper>
        </Fade>
      )}
    </Popper>
  </>
}