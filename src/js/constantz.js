module.exports.planSizes = {
  SMALL: 'plan-s',
  MEDIUM: 'plan-m',
  LARGE: 'plan-l'
};

module.exports.parallelTasks = {
  'plan-s': 1,
  'plan-m': 2,
  'plan-l': 4
};

module.exports.workerStates = {
  START: 'start',
  PLAYING: 'in progress',
  STOP: 'ended',
  ERROR: 'error'
};
