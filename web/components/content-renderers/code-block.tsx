import { useTheme } from 'next-themes';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atomOneDark,
  atomOneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface CodeBlockProps {
  value: {
    code: string;
    language?: string;
  };
}

const CodeBlock = (props: CodeBlockProps) => {
  const { resolvedTheme } = useTheme();
  const codeToShow = props?.value?.code || '';
  const language = props?.value?.language || 'javascript';

  return (
    <div
      className={`${
        resolvedTheme === 'light' ? 'border border-gray-200 ' : ''
      } my-4 rounded-md shadow-lg sm:my-8`}
    >
      <SyntaxHighlighter
        language={language}
        style={resolvedTheme === 'dark' ? atomOneDark : atomOneLight}
      >
        {codeToShow}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
