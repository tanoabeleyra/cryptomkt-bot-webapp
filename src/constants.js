export const countries = ['ARS', 'BRL', 'CLP', 'EUR']

const currencies = {
  'ARS': {
    code: 'ARS',
    name: 'Peso Argentino',
    prefix: '$',
    postfix: '',
    decimals: 2
  },
  'BRL': {
    code: 'BRL',
    name: 'Real Brasileño',
    prefix: 'R$',
    postfix: '',
    decimals: 2
  },
  'BTC': {
    code: 'BTC',
    name: 'Bitcoin',
    prefix: '',
    postfix: 'BTC',
    step: 0.000001,
    decimals: 6
  },
  'CLP': {
    code: 'CLP',
    name: 'Pesos Chilenos',
    prefix: '$',
    postfix: '',
    decimals: 0
  },
  'ETH': {
    code: 'ETH',
    name: 'Ether',
    prefix: '',
    postfix: 'ETH',
    step: 0.0001,
    decimals: 4
  },
  'EUR': {
    code: 'EUR',
    name: 'Euro',
    prefix: '',
    postfix: '€',
    decimals: 2
  },
  'XLM': {
    code: 'XLM',
    name: 'Stellar Lumens',
    prefix: '',
    postfix: 'XLM',
    step: 0.0001,
    decimals: 4
  }
}

export const markets = {
  'ARS': [
    {
      code: 'BTCARS',
      baseCurrency: currencies['BTC'],
      quoteCurrency: currencies['ARS'],
      step: 20,
      decimals: 0
    },
    {
      code: 'ETHARS',
      baseCurrency: currencies['ETH'],
      quoteCurrency: currencies['ARS'],
      step: 2,
      decimals: 0
    },
    {
      code: 'XLMARS',
      baseCurrency: currencies['XLM'],
      quoteCurrency: currencies['ARS'],
      step: 0.005,
      decimals: 3
    }
  ],
  'BRL': [
    {
      code: 'BTCBRL',
      baseCurrency: currencies['BTC'],
      quoteCurrency: currencies['BRL'],
      step: 2,
      decimals: 0
    },
    {
      code: 'ETHBRL',
      baseCurrency: currencies['ETH'],
      quoteCurrency: currencies['BRL'],
      step: 0.2,
      decimals: 1
    },
    {
      code: 'XLMBRL',
      baseCurrency: currencies['XLM'],
      quoteCurrency: currencies['BRL'],
      step: 0.0005,
      decimals: 4
    }
  ],
  'CLP': [
    {
      code: 'BTCCLP',
      baseCurrency: currencies['BTC'],
      quoteCurrency: currencies['CLP'],
      step: 200,
      decimals: 0
    },
    {
      code: 'ETHCLP',
      baseCurrency: currencies['ETH'],
      quoteCurrency: currencies['CLP'],
      step: 20,
      decimals: 0
    },
    {
      code: 'XLMCLP',
      baseCurrency: currencies['XLM'],
      quoteCurrency: currencies['CLP'],
      step: 0.05,
      decimals: 2
    }
  ],
  'EUR': [
    {
      code: 'BTCEUR',
      baseCurrency: currencies['BTC'],
      quoteCurrency: currencies['EUR'],
      step: 1,
      decimals: 0
    },
    {
      code: 'ETHEUR',
      baseCurrency: currencies['ETH'],
      quoteCurrency: currencies['EUR'],
      step: 0.1,
      decimals: 1
    },
    {
      code: 'XLMEUR',
      baseCurrency: currencies['XLM'],
      quoteCurrency: currencies['EUR'],
      step: 0.0002,
      decimals: 4
    }
  ]
}
