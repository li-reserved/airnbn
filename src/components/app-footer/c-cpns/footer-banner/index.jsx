import IconClose from "@/assets/svg/icon_close";
import React, { memo } from "react";
import { FooterWrapper } from "./style";

const FooterBanner = memo(() => {
  const list = [
    {
      title: "爱彼迎",
      children: [
        { title: "工作机会" },
        { title: "爱彼迎新闻" },
        { title: "政策" },
        { title: "无障碍设施" },
      ],
    },
    {
      title: "发现",
      children: [
        { title: "信任与发现" },
        { title: "旅行基金" },
        { title: "商务差旅" },
        { title: "爱彼迎杂志" },
        { title: "Airbnb.org" },
      ],
    },
    {
      title: "出租",
      children: [
        { title: "为什么要出租" },
        { title: "房东义务" },
        { title: "开展体验" },
        { title: "资源中心" },
      ],
    },
    {
      title: "客服支持",
      children: [{ title: "帮助" }, { title: "邻里支持" }],
    },
  ];
  return (
    <FooterWrapper>
      <span className="close">
        <IconClose />
      </span>
      <div className="list">
        {list.map((item) => {
          return (
            <div key={item.title}>
              <h4>{item.title}</h4>
              <ul>
                {item.children.map((e) => {
                  return (
                    <li key={e.title}>
                      <a href="javastript:;">{e.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </FooterWrapper>
  );
});

export default FooterBanner;
