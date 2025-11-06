import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductForm from '../../components/AddProductForm';

const AddProduct = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/products/list');
  };

  const handleCancel = () => {
    navigate('/products/list');
  };

  return (
    <AddProductForm 
      onSuccess={handleSuccess} 
      onCancel={handleCancel} 
      isModal={false}
    />
  );
};

export default AddProduct;
