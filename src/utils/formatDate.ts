import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

const formatDate = (value: string | null | undefined): string => {
  if (value) {
    return format(new Date(value), 'dd/MM/yyyy HH:mm:ss', { locale: ptBR });
  }
  return '--';
};

export default formatDate;
