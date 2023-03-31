import React, { memo, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { throttle } from "underscore";

const ScollList = memo((props) => {
  const loading = useRef(true);
  useEffect(() => {
    const viewScroll = throttle(function () {
      // 变量 scrollHeight 是滚动条的总高度
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // 变量 windowHeight 是可视区的高度
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // 变量scrollTop为当前页面的滚动条纵坐标位置
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 滚动条到底部得距离 = 滚动条的总高度 - 可视区的高度 - 当前页面的滚动条纵坐标位置
      const scrollBottom = scrollHeight - windowHeight - scrollTop;

      if (scrollBottom <= 30 && loading.current) {
        loading.current = false;
        // 发送请求
        props.load();
      }
    }, 100);

    window.addEventListener("scroll", viewScroll);
    if (props.finishedm) {
      window.removeEventListener("scroll", viewScroll);
    }

    return () => {
      window.removeEventListener("scroll", viewScroll);
    };
  }, [props]);

  useEffect(() => {
    if (!props.loadingRoom) {
      loading.current = true;
    }
  }, [props.loadingRoom]);

  return <>{props.children}</>;
});

ScollList.propTypes = {
  loadingRoom: PropTypes.bool,
  load: PropTypes.func,
  finishedm: PropTypes.bool,
};

export default ScollList;
