import React from 'react'
// Path: ./src/app/page.tsx

import Image from "next/image";

// Path: ./src/app/page.tsx

const response = await fetch(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`,
);
const articles = await response.json();

const page = () => {
  
  return (
    <div>
      
    </div>
  )
}

export default page
