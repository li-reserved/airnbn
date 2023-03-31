import React, { memo } from "react";
import PropTypes from "prop-types";
import { SectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle || null}
      />
      <SectionRoom roomList={infoData.list} itemWidth="20%" />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV1;
