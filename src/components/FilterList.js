import React from "react";
import { useContext } from "react";
import FilterContext from "../context/filter/FilterContext";
import SearchContext from "../context/search/SearchContext";
import {
  filterProductByColorList,
  filterProductByGenderList,
  filterProductByPriceList,
  filterProductByTypeList,
} from "../utils/constants";

const FilterList = () => {
  const filterContext = useContext(FilterContext);
  const searchContext = useContext(SearchContext);

  const handleFilterByColor = (
    event,
    filterContext,
    productArr,
    setProductArr,
    filterArr
  ) => {
    filterContext.handleCheckBoxChange(
      event,
      filterContext.filterInputByColor,
      filterContext.setFilterInputByColor
    );

    // if (filterArr.length === 0) return;
    // const filteredArrByColor = productArr.filter((product) =>
    //   filterArr.includes(product.color)
    // );
    // setProductArr(filteredArrByColor);
  };

  return (
    <div className=" w-1/4 max-w-[250px]    ml-4">
      <div className="flex flex-col px-6 py-4 gap-2 `  shadow-lg">
        <p className="font-semibold text-blue-400">Color</p>
        <ul>
          {filterProductByColorList.map((list) => (
            <li key={list.id} className="px-1">
              {" "}
              <input
                type="checkbox"
                value={list.value}
                className=" text-lg accent-blue-400 mr-1"
                onChange={(event) => handleFilterByColor(event, filterContext)}
              />{" "}
              {list.name}
            </li>
          ))}
        </ul>
        <p className="font-semibold text-blue-400 ">Gender</p>
        <ul>
          {filterProductByGenderList.map((list) => (
            <li key={list.id} className="px-1">
              <input
                type="checkbox"
                value={list.value}
                className=" text-lg accent-blue-400 mr-1"
                onChange={(event) =>
                  filterContext.handleCheckBoxChange(
                    event,
                    filterContext.filterInputByGender,
                    filterContext.setFilterInputByGender
                  )
                }
              />
              {list.name}
            </li>
          ))}
        </ul>
        <p className="font-semibold text-blue-400 ">Price</p>
        <ul>
          {filterProductByPriceList.map((list) => (
            <li className="px-1" key={list.id}>
              <input
                type="checkbox"
                value={list.value}
                className=" text-lg accent-blue-400 mr-1"
                onChange={(event) =>
                  filterContext.handleCheckBoxChange(
                    event,
                    filterContext.filterInputByPrice,
                    filterContext.setFilterInputByPrice
                  )
                }
              />
              {list.name}
            </li>
          ))}
        </ul>
        <p className="font-semibold text-blue-400 ">Type</p>
        <ul>
          {filterProductByTypeList.map((list) => (
            <li key={list.id} className="px-1">
              <input
                type="checkbox"
                className=" text-lg accent-blue-400 mr-1"
                value={list.value}
                onChange={(event) =>
                  filterContext.handleCheckBoxChange(
                    event,
                    filterContext.filterInputByType,
                    filterContext.setFilterInputByType
                  )
                }
              />
              {list.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterList;
