import React, { useState } from 'react';

import { Content } from '../styles';
import { Brands, HeaderText } from './styles';

const brands = [
  'Adriática',
  'Antarctica Sub Zero',
  'Antarctica',
  "Beck's",
  'Brahma',
  'Brahma Zero',
  'Bohemia',
  'Brahma Light',
  'Brahma Extra',
  'Brahma Bier',
  'Brahma Fresh',
  'Budweiser',
  'Caracu',
  'Colorado',
  'Corona',
  'Franziskaner',
  'Goose Island',
  'Hertog Jan',
  'Hoegaarden',
  'Kronenbier',
  'Labatt Blue',
  'Lakeport Brewing',
  'Leffe',
  'Magnífica',
  'Miller',
  'Norteña',
  'Nossa',
  'Original',
  'Patagonia',
  'Patricia',
  'Pilsen',
  'Polar',
  'President',
  'Puerto del Mar',
  'Quilmes',
  'Serramalte',
  'Serrana',
  'Skol',
  'Skol Hops',
  'Skol 360',
  'Skol Beats Senses',
  'Skol Beats Spirit',
  'Skol Beats Secret',
  'Skol Beats 150 BPM',
  'Skol Beats GT',
  'Skol Ultra',
  'Skol Puro Malte',
  'Samson',
  'Stella Artois',
  'Wäls',
];

const StartPage: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function handleItemClick(itemName: string) {
    const alreadySelected = selectedItems.findIndex(item => item === itemName);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== itemName);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  }

  return (
    <Content>
      <HeaderText>
        <strong>Escolha a marca que você costuma consumir</strong>
      </HeaderText>
      <Brands>
        {brands.map(name => (
          <li
            onClick={() => handleItemClick(name)}
            className={selectedItems.includes(name) ? 'selected' : ''}
          >
            {name}
          </li>
        ))}
      </Brands>
    </Content>
  );
};

export default StartPage;
