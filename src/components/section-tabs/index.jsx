import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { TabsWrapper } from "./style";
import global from "@/assets/image/global.png";
import classNames from "classnames";
import ScrollView from "@/base-ui/scoll-view";

const SectionTabs = memo((props) => {
  const { tabNames = [] } = props;
  const [index, setIndex] = useState(0);

  function changeIndex(i, name) {
    setIndex(i);
    props.tabClick(i, name);
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, i) => {
          return (
            <div
              className={classNames({ active: index === i }, "item")}
              key={item}
              onClick={() => changeIndex(i, item)}
            >
              {index === i && <img src={global} alt="" />}
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
