import React, { Suspense } from "react";
import CategoriesCourse from "../../pages/CategoriesCourse";

const categoryList = () => {
  return (
    <div className="mt-6">
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <CategoriesCourse></CategoriesCourse>
      </Suspense>
    </div>
  );
};

export default categoryList;
