import React, { useEffect, useState } from "react";

import axios from "axios";
import "./YemishetuEkawoche.css";
function YemishetuCollection() {
  const [goodsColleciton, setgoodsColleciton] = useState([]);
  const [searchApiData, setsearchApiData] = useState([]);
  const [filterVal, setfilterVal] = useState("");

  let url = `http://localhost:6500/user/getGoods`;
  const dataForGoods = async () => {
    try {
      const responceForGoods = await axios.get(url);

      let convertedForGoods = JSON.parse(JSON.stringify(responceForGoods.data));

      setgoodsColleciton(() => convertedForGoods.data);
      setsearchApiData(() => convertedForGoods.data);
    } catch (err) {
      // console.log({ "its error": err });
    }
  };
  // console.log(goodsColleciton);
  useEffect(() => {
    dataForGoods();
    window.scrollTo(0, 0);
  }, []);

  const handleFilter = (e) => {
    if (e.target.value == "") {
      setgoodsColleciton(searchApiData);
    } else {
      const filterResult = searchApiData.filter((item) =>
        item.item_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setgoodsColleciton(filterResult);
    }
    setfilterVal(e.target.value);
  };

  return (
    <>
      <h1 className="text-decoration-underline ml-5 " >Buy Goods</h1>
      <div className="inputs">
        <input
          id="searchPhd"
          placeholder="Search using Item name"
          value={filterVal}
          onInput={(e) => handleFilter(e)}
        ></input>
      </div>
      {
        <div className="row container mx-auto h-100 pt-5 mb-5  goods">
          {goodsColleciton.map((singleGood, i) => {
            // console.log(singleGood);
            let displayGoods = (
              <div key={i} className="col-md-3 m-4 ">
                <div className="card cardAkafi ">
                  <img
                    src={`http://localhost:6500/${singleGood.item_photo}`}
                    className="card-img-top passedImage"
                    alt="..."
                  />
                  <div className="card-body">
                    <h2 className="card-title text-dark text-decoration-underline">
                      {singleGood.item_name}
                    </h2>
                    <p className="card-text text-justify">
                      {`Seller : ${singleGood.user_firstName} ${singleGood.user_firstLast} `}
                    </p>
                    <p className="card-text text-justify">
                      {`Description : ${singleGood.item_description}`}
                    </p>
                    <p className="card-text text-justify">
                      {`Contact : ${singleGood.user_IndianNumber} / ${singleGood.user_whatsappNumber}  `}
                    </p>
                    <a href="#" className="btn btn-primary ">
                      {singleGood.item_price} INR
                    </a>
                  </div>
                </div>
              </div>
            );
            return displayGoods;
          })}
        </div>
      }
    </>
  );
}

export default YemishetuCollection;
