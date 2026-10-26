import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * A small, dependency-free Markdown renderer for the site's own content (case studies).
 * Supports: ## and ### headings, paragraphs, - and 1. lists, > quotes, ``` code blocks,
 * ![alt](src) images on their own line, **bold**, *italic*, `code` and [links](url).
 * Content is written by me, but text is still rendered as React text (never raw HTML).
 */

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  // order matters: code first so its content isn't parsed further
  const re = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*\s][^*]*\*)|(\[[^\]]+\]\([^)\s]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    const key = `${keyBase}-${i++}`;
    if (tok.startsWith('`')) out.push(<code key={key}>{tok.slice(1, -1)}</code>);
    else if (tok.startsWith('**')) out.push(<strong key={key}>{inline(tok.slice(2, -2), key)}</strong>);
    else if (tok.startsWith('*')) out.push(<em key={key}>{inline(tok.slice(1, -1), key)}</em>);
    else {
      const lm = tok.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
      if (lm) {
        const [, label, url] = lm;
        const external = /^https?:\/\//.test(url);
        const protocol = /^(mailto|tel):/.test(url);
        out.push(
          external ? (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer">
              {inline(label, key)}
            </a>
          ) : protocol ? (
            <a key={key} href={url}>
              {inline(label, key)}
            </a>
          ) : (
            <Link key={key} href={url}>
              {inline(label, key)}
            </Link>
          ),
        );
      } else out.push(tok);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source, className = 'prose-case' }: { source: string; className?: string }) {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;
  let k = 0;
  const isBlockStart = (l: string) => /^(#{2,3}\s|[-*]\s|\d+\.\s|>\s?|```|!\[)/.test(l);

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    const key = `b${k++}`;
    if (line.startsWith('```')) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++]);
      i++;
      blocks.push(
        <pre key={key}>
          <code>{code.join('\n')}</code>
        </pre>,
      );
      continue;
    }
    const h = line.match(/^(#{2,3})\s+(.*)$/);
    if (h) {
      const content = inline(h[2], key);
      blocks.push(h[1].length === 2 ? <h2 key={key}>{content}</h2> : <h3 key={key}>{content}</h3>);
      i++;
      continue;
    }
    const img = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)\s*$/);
    if (img) {
      blocks.push(<img key={key} src={img[2]} alt={img[1]} loading="lazy" decoding="async" />);
      i++;
      continue;
    }
    if (/^>\s?/.test(line)) {
      const q: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, ''));
      blocks.push(
        <blockquote key={key}>
          <p>{inline(q.join(' '), key)}</p>
        </blockquote>,
      );
      continue;
    }
    if (/^[-*]\s/.test(line) || /^\d+\.\s/.test(line)) {
      const ordered = /^\d+\.\s/.test(line);
      const items: string[] = [];
      while (i < lines.length && (ordered ? /^\d+\.\s/.test(lines[i]) : /^[-*]\s/.test(lines[i]))) {
        items.push(lines[i++].replace(/^([-*]|\d+\.)\s+/, ''));
      }
      const lis = items.map((it, n) => <li key={n}>{inline(it, `${key}-${n}`)}</li>);
      blocks.push(ordered ? <ol key={key}>{lis}</ol> : <ul key={key}>{lis}</ul>);
      continue;
    }
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) para.push(lines[i++].trim());
    blocks.push(<p key={key}>{inline(para.join(' '), key)}</p>);
  }
  return <div className={className}>{blocks}</div>;
}
