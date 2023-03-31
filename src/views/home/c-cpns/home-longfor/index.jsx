import React, { memo } from "react";
import PropTypes from "prop-types";
import SectionHeader from "@/components/section-header";
import { LongforWrapper } from "./style";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scoll-view";

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongforItem key={item.city} itemData={item} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongfor;
