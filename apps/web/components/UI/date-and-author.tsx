import { DateAndAuthorProps } from '../../types/interfaces';

export default function DateAndAuthor({ date, author }: DateAndAuthorProps) {
  if (!date && !author) {
    return null;
  }

  return (
    <div className='ml-0 pl-0 pt-4 text-sm italic'>
      {author && <div>Forfatter: {author}</div>}
      {date && <div>{date}</div>}
    </div>
  );
}
