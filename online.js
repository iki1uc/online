export const ONLINE = () => {
  const clone = window.CLONE || { x:0, y:0, z:0 };

  return {
    visitors: Math.floor(Math.random() * 5),
    clone: {
      x: clone.x,
      y: clone.y,
      z: clone.z
    },
    active: ["WpiR","dir","RUN8","FIT","9vec3tor","3hit90"],
    working: ["RUN8","FIT"],
    waiting: ["FAIL"],
    ping: Math.floor(Math.random() * 100),
    time: Date.now()
  };
};
