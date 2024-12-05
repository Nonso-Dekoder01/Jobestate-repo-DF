import React from 'react';
import { AiOutlineFileDone } from "react-icons/ai";
const RegistrationProgress = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Personal Info', path: '/register/personal' },
    { id: 2, name: 'Work Experience', path: '/register/experience' },
    { id: 3, name: 'Education', path: '/register/education' },
    { id: 4, name: 'Resume Upload', path: '/register/resume' }
  ];

  return (
    <div className=" w-[674px] mx-auto  relative mb-8">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex-1 flex flex-col items-center">
            <span className={`
              text-xs text-center absolute top-6 w-full px-2
              ${currentStep > step.id 
                ? 'text-[#1155B2]'
                : currentStep === step.id
                  ? 'font-bold text-[#1155B2]'
                  : 'text-gray-500'
              }
            `}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Progress Line */}
      <div className='flex  gap-4 items-center w-full'>
      <div className=" flex items-center gap-2 w-full  h-1 bg-gray-200 ">
        <div
          className="h-full w-full bg-[#1155B2] transition-all duration-300"
          style={{
            width: `${((currentStep - 0) / (steps.length - 0)) * 100}%`
          }}
        />
      </div>
      <div className=''>
      <AiOutlineFileDone className='text-[#205EB7]' />
      </div>
    </div>
    </div>
  );
};

export default RegistrationProgress;