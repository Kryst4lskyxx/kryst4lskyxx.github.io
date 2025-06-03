import Link from 'next/link';
import { ComponentProps } from 'react';

export const MDXComponents = {
    h1: ({ children, ...props }: ComponentProps<'h1'>) => (
        <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100" {...props}>
            {children}
        </h1>
    ),
    h2: ({ children, ...props }: ComponentProps<'h2'>) => (
        <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-gray-100" {...props}>
            {children}
        </h2>
    ),
    h3: ({ children, ...props }: ComponentProps<'h3'>) => (
        <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-gray-100" {...props}>
            {children}
        </h3>
    ),
    p: ({ children, ...props }: ComponentProps<'p'>) => (
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props}>
            {children}
        </p>
    ),
    a: ({ href, children, ...props }: ComponentProps<'a'>) => (
        <Link
            href={href || '#'}
            className="text-blue-600 dark:text-blue-400 hover:underline"
            {...props}
        >
            {children}
        </Link>
    ),
    ul: ({ children, ...props }: ComponentProps<'ul'>) => (
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-1" {...props}>
            {children}
        </ul>
    ),
    ol: ({ children, ...props }: ComponentProps<'ol'>) => (
        <ol className="list-decimal list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-1" {...props}>
            {children}
        </ol>
    ),
    li: ({ children, ...props }: ComponentProps<'li'>) => (
        <li className="mb-1" {...props}>{children}</li>
    ),
    blockquote: ({ children, ...props }: ComponentProps<'blockquote'>) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 italic" {...props}>
            {children}
        </blockquote>
    ),
    code: ({ children, ...props }: ComponentProps<'code'>) => (
        <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200" {...props}>
            {children}
        </code>
    ),
    pre: ({ children, ...props }: ComponentProps<'pre'>) => (
        <pre className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4" {...props}>
            {children}
        </pre>
    ),
    img: ({ src, alt, ...props }: ComponentProps<'img'>) => (
        <img
            src={src}
            alt={alt}
            className="max-w-full h-auto rounded-lg shadow-md my-4"
            {...props}
        />
    ),
    hr: ({ ...props }: ComponentProps<'hr'>) => (
        <hr className="border-gray-300 dark:border-gray-600 my-8" {...props} />
    ),
    table: ({ children, ...props }: ComponentProps<'table'>) => (
        <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-300 dark:border-gray-600" {...props}>
                {children}
            </table>
        </div>
    ),
    th: ({ children, ...props }: ComponentProps<'th'>) => (
        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-800 font-semibold text-left" {...props}>
            {children}
        </th>
    ),
    td: ({ children, ...props }: ComponentProps<'td'>) => (
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" {...props}>
            {children}
        </td>
    ),
}; 