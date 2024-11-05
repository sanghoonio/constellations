import React from 'react';

interface ReadmeData {
  overview: string[];
  design: string[];
  development: string[];
}

interface Props {
  ReadmeData: ReadmeData;
}

const parseLines = (section: string[]) => {
  const lines = (section + '').split('\n');
  const elements: JSX.Element[] = [];

  lines.forEach((line, index) => {
    if (/^\d{4,}/.test(line)) {
      elements.push(<h6 key={index} className='mb-0 pt-0 position-relative'>{line}</h6>);
    } else if (/^[A-Za-z0-9]/.test(line)) {
      elements.push(<h6 key={index} className='my-0 pt-0 position-relative'>{line}</h6>);
    } else if (/^-/.test(line)) {
      elements.push(<p key={index} className='my-0 p-0 ms-4 indent position-relative'>{line}</p>);
    } else if (/^\s{2,}/.test(line)) {
      elements.push(<p key={index} className='my-0 p-0 ps-4 ms-4 indent position-relative'>{line}</p>);
    }
  });

  return elements;
};

const About: React.FC<Props> = ({ ReadmeData }) => {
  
  return (
    <div className='about text-light'>
      {Object.keys(ReadmeData).map((section, index) => (
        <div className='mb-3' key={index}>
          <h6 className='mb-0 mt-2 fw-semibold'>{section.charAt(0).toUpperCase() + section.slice(1)}</h6>
          {parseLines(ReadmeData[section as keyof ReadmeData])}
        </div>
      ))}

    </div>
  );
};

export default About;
