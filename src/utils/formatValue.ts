const formatValue = (value: number | null | undefined): string => {
  if (value) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
  return '--';
};

export default formatValue;
