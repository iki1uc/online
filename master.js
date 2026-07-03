export const MASTER = (online) => {
  return {
    master: "3hit90",
    cpu: 90,
    ram: 90,
    gpu: 90,
    clone_hit: (online.clone.x + online.clone.y + online.clone.z) / 3,
    status: "clean"
  };
};
