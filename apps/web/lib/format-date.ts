import { format } from 'date-fns';
import norwegian from 'date-fns/locale/nb';
import { FormatDateProps } from '../types/interfaces';

export const formatDate = ({ created, updated }: FormatDateProps) => {
  let publishDate, updatedDate;

  if (created && !isNaN(Date.parse(created))) {
    publishDate = format(new Date(created), 'dd. MMMM yyyy', {
      locale: norwegian,
    });
  } else publishDate = '-';

  if (updated && !isNaN(Date.parse(updated))) {
    updatedDate = format(new Date(updated), 'dd. MMMM yyyy', {
      locale: norwegian,
    });
  } else updatedDate = publishDate;

  const dateToShow =
    publishDate !== updatedDate
      ? `Publisert: ${publishDate} (oppdatert: ${updatedDate})`
      : `Publisert: ${publishDate}`;

  return dateToShow;
};
