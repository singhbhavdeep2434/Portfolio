import React from 'react';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  credentialUrl
}: CertificationCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Award className="w-10 h-10 text-blue-500 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{issuer}</p>
      <p className="text-gray-500 text-sm mb-4">{date}</p>
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 text-sm"
        >
          View Credential
        </a>
      )}
    </div>
  );
}