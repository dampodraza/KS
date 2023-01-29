export const redirectNonMobile = (ctx) => {
    const userAgent = ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
  
    if (!isMobile && ctx.res) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }
  
    return { isMobile };
  }