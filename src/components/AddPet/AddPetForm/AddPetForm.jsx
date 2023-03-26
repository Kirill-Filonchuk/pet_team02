import { useState } from 'react';
import StepOne from '../StepOne';
import StepTwo from '../StepTwo';

export default function AddPetForm(props) {
  const [data, setData] = useState({
    category: '',
    titleAd: '',
    namePet: '',
    dateBirth: '',
    breedPet: '',
    gender: '',
    location: '',
    price: '',
    // image: null,
    message: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    console.log('Form Submitted', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
    console.log(currentStep);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} onClose={props.onClose} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log('data', data);

  return <div>{steps[currentStep]}</div>;
}
