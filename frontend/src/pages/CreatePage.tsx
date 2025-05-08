import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import { createRegistration } from '../services/api';
import { toast } from 'react-toastify';

export default function CreatePage() {
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    try {
      const response = await createRegistration(data);
      if (response.status) {
        toast.success('Registration created successfully!');
        navigate('/');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('An error occurred while creating the registration.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Registration</h1>
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
}