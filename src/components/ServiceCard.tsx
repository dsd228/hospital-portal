import { ReactNode } from "react";

interface Props {
  icon: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
}

export default function ServiceCard({ icon, title, text, link, linkText }: Props) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-transform hover:-translate-y-2">
      <i className={`fas ${icon} text-4xl text-blue-600 mb-4`}></i>
      <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{text}</p>
      <a
        href={link}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
      >
        {linkText}
      </a>
    </div>
  );
}
