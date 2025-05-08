import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationList from '../components/RegistrationList';
import { getAllRegistrations, deleteRegistration } from '../services/api';
import type { Registration } from '../types/registration';
import { toast } from 'react-toastify';

export default function ListPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await getAllRegistrations();
        if (response.status) {
          setRegistrations(response.data);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error('Failed to fetch registrations');
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await deleteRegistration(id);
      if (response.status) {
        toast.success('Registration deleted successfully!');
        setRegistrations(prev => prev.filter(reg => reg.id !== id));
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Failed to delete registration');
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Registrations</h1>
        <Link
          to="/create"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create New
        </Link>
      </div>
      <RegistrationList registrations={registrations} onDelete={handleDelete} />
    </div>
  );
}