import React from 'react';

// interface ReadmeData {
//   overview: string[];
//   design: string[];
//   development: string[];
// }

// interface Props {
//   ReadmeData: ReadmeData;
// }

// const parseLines = (section: string[]) => {
//   const lines = (section + '').split('\n');
//   const elements: JSX.Element[] = [];

//   lines.forEach((line, index) => {
//     if (/^\d{4,}/.test(line)) {
//       elements.push(<h6 key={index} className='mb-0 pt-0 position-relative'>{line}</h6>);
//     } else if (/^[A-Za-z0-9]/.test(line)) {
//       elements.push(<h6 key={index} className='my-0 pt-0 position-relative'>{line}</h6>);
//     } else if (/^-/.test(line)) {
//       elements.push(<p key={index} className='my-0 p-0 ms-4 indent position-relative'>{line}</p>);
//     } else if (/^\s{2,}/.test(line)) {
//       elements.push(<p key={index} className='my-0 p-0 ps-4 ms-4 indent position-relative'>{line}</p>);
//     }
//   });

//   return elements;
// };

const About: React.FC = () => {
  
  return (
    <div className='about text-dark'>
      
      <div className='row mt-5'>
        <div className='col-12'>

            <div className='row d-flex justify-content-center'>

              <div 
                className='col-xs-6 col-lg-9 col-12 rounded rounded-4 p-3'
                style={{color: 'goldenrod', textShadow: 'goldenrod 0px 0px 10px'}}
              >
                <h3>Constellations</h3>

                <p>Constellations is a proof of concept social media platform that emphasizes connection and community – not popularity metrics, mindless consumption, or superficial comparisons. For millenia, we have looked up to the stars for spiritual guidance and direction. We have a natural inclination to make connections amongst ourselves as did the ancient navigators and astronomers when they defined the constellations. As the world becomes more driven by social media and algorithms, our social lives are prone to lacking the authenticity, sponteneity, and care necessary for fulfilling relationships. </p>
                <p>Social media platforms are driven by likes, view counts, and user retention metrics for the purpose of maximzing ad revenue. The focus is on content consumption, regardless of whether the content is excessively negative, manipulative, inauthentic, or otherwise lacking in deeper meaning. In trying something new, Constellations seeks to make the aspect of building connections – defining constellations amongst ourselves – its primary feature. Rather than focusing on likes, follower counts, or encouraging you to scroll through an infinite amount of addictive content, Constellations focuses on the quality of the connections you make with your friends, family, and community. Your connections grow naturally the more you interact with posts, comments, and reactions. The night sky is accessible to all, but some stars are dimmer than others. To discover new connections, use the telescope feature.</p>
                <p>Constellations in the night sky are defined not by the number of connections between constitutent stars but by their quality. Some constellations are just a few stars small and yet they inpsire generations of storytelling. These enduring relationships and memories are what social media should help faciliate.</p>

                <br></br>

                <h4>Design</h4>
                <span><strong>Primary Elements</strong></span>
                <ul>
                  <li>Stars represent individual users</li>
                  <li>Brightness indicates recent activity level</li>
                  <li>Position remains relatively stable to maintain recognizable patterns</li>
                </ul>
                <span><strong>Interface Elements</strong></span>
                <ul>
                  <li>Home view shows your star and closest connections</li>
                  <li>Navigation feels like panning across a star field</li>
                  <li>Zoom out reveals broader patterns and communities</li>
                </ul>

              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
