import * as React from 'react';
import Button from '@mui/material/Button';

export type pro = {
  props:string;
}

export function Buttons(props:pro) {
  
  return <Button variant="contained">{props.props}</Button>;
}