const { SlashCommandBuilder } = require('discord.js');
const {backend} = require('./build/index.main.mjs');
const {loadStdlib} = require('@reach-sh/stdlib');
const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: 'TestNet',
}));

module.exports = {
  data: new SlashCommandBuilder()
    .setName('contract')
    .setDescription('Test smart contract implementation'),
  async execute(interaction) {
    const acc = await stdlib.newAccountFromMnemonic(MNEMONIC);
    const ctc = acc.contract(backend);
    await ctc.p.Admin({
      num: 5,
      showNum: (n) => {
        console.log(`The new number is ${n}`);
      },
    });
    await interaction.reply('pong!');
  }
}