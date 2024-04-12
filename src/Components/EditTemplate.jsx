import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../Data';

const EditTemplate = () => {
  const { projectName } = useParams();
  const details = data.filter((temp) => temp.projectName === projectName);

  return (
    <div className='container-fluid px-2 py-2'>
      {details.map((item, index) => (
          <textarea rows={30} cols={14} key={index}
            className='px-1 p-0'
            style={{
              outline: 'none',
              width: '100%',
              
            }}
            value={`
              Project Name: ${item.projectName}
              Description: ${item.description}
              Features: ${item.features}
              Usage Steps: ${item.usage.steps}
              Installation Prerequisites: ${item.installation.prerequisites}
              Installation Steps: ${item.installation.steps}
              Testing: ${item.testing.runningTests}
              Test Coverage: ${item.testing.testCoverage}
              Contributing: ${item.contributing}
              License: ${item.license}
              Documentation: ${item.documentation}
              Authors: ${item.authors}
              Copyright: ${item.copyright}
            `}
          />
      ))}
    </div>
  );
};

export default EditTemplate;
