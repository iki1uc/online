export const MASTER = (online) => {
  return {
    master: "3hit90",
    cpu: 90,
    ram: 90,
    gpu: 90,
    status: "clean",
    visitors: online.visitors,
    working: online.working.length,
    waiting: online.waiting.length
  };
};

