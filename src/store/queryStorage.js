const queryStorage = () => {
  const getQueryData = (categoryId, gender) => {
    const queryObject = {
      categoryId: categoryId || null,
      gender: gender || null,
    };
  };
  const queryParams = new URLSearchParams();
  if (categoryId) queryParams.append("categoryId", categoryId);
  if (gender) queryParams.append("gender", gender);
  const queryParamsToString = queryParams.toString();
  let initialURL = "";
  /*
    if(queryParamsToString){
        if(gender && gender === "k"){
            initialURL = `/shop/k/prod`
        }
    }
    */
};
