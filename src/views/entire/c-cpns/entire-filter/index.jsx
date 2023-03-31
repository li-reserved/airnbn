import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(name) {
    const newItems = [...selectItems];
    if (newItems.includes(name)) {
      const itemIndex = newItems.findIndex((i) => i === name);
      newItems.splice(itemIndex, 1);
    } else {
      newItems.push(name);
    }
    setSelectItems(newItems);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames(
                { active: selectItems.includes(item) },
                "item"
              )}
              key={item}
              onClick={() => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
