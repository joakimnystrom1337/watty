const aliases = (prefix = `src`) => ({
    '@atoms': `${prefix}/Components/Atoms`,
    '@molecules': `${prefix}/Components/Molecules`,
    '@organisms': `${prefix}/Components/Organisms`,
    '@templates': `${prefix}/Components/Templates`,
    '@components': `${prefix}/Components`,
  });
  
  module.exports = aliases;