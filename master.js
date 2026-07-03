export const MASTER = (online, clone) => {
  return {
    master: "3hit90",

    // 3hit90 bleibt sauber
    cpu: 90,
    ram: 90,
    gpu: 90,

    // echte Prüfung
    clone_hit: {
      x: clone.x,
      y: clone.y,
      z: clone.z,
      avg: ((clone.x + clone.y + clone.z) / 3).toFixed(2)
    },

    online_hit: {
      visitors: online.visitors,
      working: online.working.length,
      waiting: online.waiting.length,
      ping: online.ping
    },

    status: "clean"
  };
};
