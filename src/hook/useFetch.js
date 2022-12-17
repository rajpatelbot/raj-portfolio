import { useState, useEffect } from "react";

const useFetch = (file_name) => {
  const [data, setData] = useState('');
  
  useEffect(() => {
    import(`../md/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setData(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [file_name]);

  return [data];
};

export default useFetch;
