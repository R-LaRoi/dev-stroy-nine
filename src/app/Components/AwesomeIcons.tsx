import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpressSimple, faShopify, faSquarespace, faWebflow, faReact } from '@fortawesome/free-brands-svg-icons';

export default function AwesomeIcons() {
  return (
    <div className="flex items-left justify-center space-x-4 mb-4 md:space-x-6 md:mb-8 py-16">
      <FontAwesomeIcon icon={faWordpressSimple} className="text-2xl" />
      <FontAwesomeIcon icon={faShopify} className="text-2xl" />
      <FontAwesomeIcon icon={faSquarespace} className="text-2xl" />
      <FontAwesomeIcon icon={faWebflow} className="text-2xl" />
      <FontAwesomeIcon icon={faReact} className="text-2xl" />
    </div>
  );
};


