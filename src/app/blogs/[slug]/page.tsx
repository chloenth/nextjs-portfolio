import fs from 'fs/promises';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // Read Markdown file from public/blogs
  const filePath = path.join(
    process.cwd(),
    'public',
    'blogs',
    `${params.slug}.md`
  );
  const source = await fs.readFile(filePath, 'utf8');

  return (
    <div className='prose prose-headings:text-white/80 mx-auto p-6 text-white/80'>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{source}</ReactMarkdown>
    </div>
  );
}
