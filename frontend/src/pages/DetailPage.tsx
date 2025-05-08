import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import RegistrationDetail from '../components/RegistrationDetail';
import { getRegistrationById } from '../services/api';
import type { Registration } from '../types/registration';
import { toast } from 'react-toastify';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistration = async () => {
      try {
        const response = await getRegistrationById(Number(id));
        if (response.status) {
          setRegistration(response.data);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error('Failed to fetch registration details');
      } finally {
        setLoading(false);
      }
    };

    fetchRegistration();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!registration) {
    return <div className="text-center py-8">Registration not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Registration Details</h1>
        <div className="space-x-2">
          <Link
            to={`/update/${id}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Edit
          </Link>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to List
          </Link>
        </div>
      </div>
      <RegistrationDetail registration={registration} />
    </div>
  );
}