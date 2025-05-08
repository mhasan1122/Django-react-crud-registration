import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { getRegistrationById, updateRegistration } from '../services/api';
import type { Registration } from '../types/registration';
import { toast } from 'react-toastify';

export default function UpdatePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<Partial<Registration>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistration = async () => {
      try {
        const response = await getRegistrationById(Number(id));
        if (response.status) {
          setInitialData(response.data);
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

  const handleSubmit = async (data: any) => {
    try {
      const response = await updateRegistration(Number(id), data);
      if (response.status) {
        toast.success('Registration updated successfully!');
        navigate(`/detail/${id}`);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('An error occurred while updating the registration.');
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Update Registration</h1>
      <RegistrationForm initialData={initialData} onSubmit={handleSubmit} isUpdate={true} />
    </div>
  );
}