export const ONLINE = () => {
  return {
    visitors: Math.floor(Math.random() * 5),
    active: ["WpiR","dir","RUN8","FIT","9vec3tor","3hit90"],
    working: ["RUN8","FIT"],
    waiting: ["FAIL"],
    ping: Math.floor(Math.random() * 100),
    time: Date.now()
  };
};

