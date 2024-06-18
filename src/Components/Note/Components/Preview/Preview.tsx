import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';

interface Props {
  title: string;
  content: string;
}

const Preview = ({ title, content }: Props) => {
  return (
    <div css={previewStyle}>
      <h2>{title}</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

const previewStyle = css({
  textAlign: 'left',
  height: 'calc(50vh - 16px)',
  margin: '16px 16px',
  overflowY: 'scroll',
  background: 'rgba(0,0,0,0.1)',

  'h2,p': {
    margin: 0,
    padding: '12px',
  },
});

export default Preview;
