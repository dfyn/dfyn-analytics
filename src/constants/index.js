export const FACTORY_ADDRESS = '0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  //'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
  'https://raw.githubusercontent.com/dfyn/new-host/main/list-token.tokenlist.json',
]

// hide from overview list

export const OVERVIEW_TOKEN_BLACKLIST = [
  '0xbbe867d90f9814900c720cf46f2a23920a57b626',
  '0x02f3af4b81fe3f6661be4c152d75da0f44e063ba',
  '0xe4e8d9cfd123699a040219165e22fa912d47147b',
  '0x2456c4e8352584c33b71b539c17d8d9bbc01e271',
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  '0xd50dc82b44ccb96eb05919faad54a704df91daf0', //SAILROMOON
  '0xc4ef5d17bfb13209c487d898fd8b24cd807835c5', //WNDR
  '0x5227f8773b9122310380b59e335cde26166910df', //xICE
  '0xd422089785ada2762343b209b43bc48dd7ad4ae9', //CZR
  '0x19a935cbaaa4099072479d521962588d7857d717', //LitCoin
  '0x43308565c0204c8076a291f0726f914c3133ce34', //Tet
]

export const TOKEN_BLACKLIST = [
  '0xbbe867d90f9814900c720cf46f2a23920a57b626',
  '0x02f3af4b81fe3f6661be4c152d75da0f44e063ba',
  '0xe4e8d9cfd123699a040219165e22fa912d47147b',
  '0x2456c4e8352584c33b71b539c17d8d9bbc01e271',
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76',
  '0x93b2fff814fcaeffb01406e80b4ecd89ca6a021b',
  '0xa99cf31b7f04ee76c27bbd30c9770703d0f5c3af', //PON
  '0xcbce9f77921c2e90522d438df4c5582f4c617768', //AGA
  '0x669ddc70273084ea30e6cd4f28ca6e2c70735065', //AGAc
  '0xd50dc82b44ccb96eb05919faad54a704df91daf0', //SAILROMOON
  '0xc4ef5d17bfb13209c487d898fd8b24cd807835c5', //WNDR
  '0x5227f8773b9122310380b59e335cde26166910df', //xICE
  '0xd422089785ada2762343b209b43bc48dd7ad4ae9', //CZR
  '0x19a935cbaaa4099072479d521962588d7857d717', //LitCoin
  '0x43308565c0204c8076a291f0726f914c3133ce34', //TeT

  // rebass tokens
  '0x9ea3b5b4ec044b70375236a281986106457b20ef',
  '0x05934eba98486693aaec2d00b0e9ce918e37dc3f',
  '0x3d7e683fc9c86b4d653c9e47ca12517440fad14e',
  '0xfae9c647ad7d89e738aba720acf09af93dc535f7',
  '0x7296368fe9bcb25d3ecc19af13655b907818cc09',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5',
  '0x97cb8cbe91227ba87fc21aaf52c4212d245da3f8',
  '0x1acba73121d5f63d8ea40bdc64edb594bd88ed09',
  '0x7d7e813082ef6c143277c71786e5be626ec77b20',
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or ETH pairings.'
