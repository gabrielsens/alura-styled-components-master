import React from "react";
import { Box, Button } from "../Ui";

import {extratoLista} from '../../info';
import { Items, Item } from "../Items";
import ImageFiltes from '../ImageFilter';

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id}>
            {ImageFiltes(type)}
            <Item>
              <span className="text">{type}</span>
              <span>{from}</span>
              <span>{value}</span>
            </Item>
            <span>{date}</span>
          </Items>
        )
      })}
      <Button>Ver Mais</Button>
    </Box>
  )
}

export default Extrato;
