import type { Registration } from '../types/registration';
import { Link } from 'react-router-dom';

interface RegistrationListProps {
  registrations: Registration[];
  onDelete: (id: number) => Promise<void>;
}

export default function RegistrationList({ registrations, onDelete }: RegistrationListProps) {
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              ID
            </th>
            <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Name
            </th>
            <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Email
            </th>
            <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {registrations.map((registration) => (
            <tr key={registration.id}>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{registration.id}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{registration.name}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{registration.email}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div className="space-x-2">
                  <Link
                    to={`/detail/${registration.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View
                  </Link>
                  <Link
                    to={`/update/${registration.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onDelete(registration.id!)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}